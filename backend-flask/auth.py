from app import app
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from flask import jsonify, request
from db import mysql
import bcrypt
import pymysql

app.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = 60 * 60 * 24 # 1 day for demo, usually ~1h
jwt = JWTManager(app)


@app.route('/create-dummy-users', methods=["POST"])
def create_dummy_users():
    conn = mysql.connect()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    password = bcrypt.hashpw("password".encode(), bcrypt.gensalt())
    cursor.execute("INSERT INTO user (first_name, last_name, username, password) VALUES (%s, %s, %s, %s)", ("dummy", "dummy", "test", password))
    conn.commit()
    return jsonify("success")

@app.route('/login', methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    # check if username exist in database
    conn = mysql.connect()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM user WHERE username=%s",(username,))
    user = cursor.fetchone()
    if not user:
        return jsonify({"msg": "Bad username or password"}), 401
    if not bcrypt.checkpw(password.encode(), user["password"].encode()):
        return jsonify({"msg": "Bad username or password"}), 401

    # create access token
    access_token = create_access_token(identity=username)
    response = {"access_token": access_token, "user_id": user["id"]}
    return response


@jwt_required()
def get_user_id_from_token():
    username = get_jwt_identity()
    conn = mysql.connect()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM user WHERE username=%s",(username,))
    user = cursor.fetchone()
    return user["id"]

# Test protected route
@app.route('/profile')
@jwt_required() 
def my_profile():
    response_body = {
        "name": "hey",
        "about" :"Help"
    }

    return response_body

@app.route('/user/<id>', methods=["GET"])
@jwt_required()
def get_itinerary_for_user(id):
    token_user_id = get_user_id_from_token()
    if token_user_id != int(id):
        print(token_user_id, id)
        return jsonify({"msg": "Unauthorized"}), 401
    conn = mysql.connect()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM itinerary where user_id=%s", (id,))
    itinerary = cursor.fetchall()
    return jsonify(itinerary)