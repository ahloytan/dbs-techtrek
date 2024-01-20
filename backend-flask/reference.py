import pymysql 
from flask import Flask 
from db import mysql
from app import app
from flask import jsonify
from flask import flash, request

# importing routes
import auth


@app.route("/getitinerary", methods = ['GET'])
def get_itinerary():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM itinerary')
        row = cursor.fetchall()
        if row != None:
            resp = jsonify(row)
        else:
            resp = jsonify("itinerary not found")
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()

        
@app.route('/getusers',methods = ['POST'])
def insert_users():
    try:
        _json = request.json
        _id = _json['id']
        _username = _json['username']
        _password = _json['password']
		# validate the received values
        if _id and _username and _password and request.method == 'POST':
            sql = 'INSERT INTO user (id, username, password) VALUES (%s,%s,%s)'
            data = (_id, _username, _password,)
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute(sql, data)
            conn.commit()
            resp = jsonify('Transaction added successfully!')
            resp.status_code = 200
            return resp
        else:
            return not_found()
    finally:
        cursor.close()
        conn.close()

@app.route('/', methods = ['GET'])
def hello():
    return 'Your Flask Server Running'

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp


if __name__ == "__main__":
    app.run(port = 8000, host="0.0.0.0")