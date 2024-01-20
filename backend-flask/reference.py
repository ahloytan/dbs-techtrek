import pymysql 
from flask import Flask 
from db import mysql
from app import app
from flask import jsonify
from flask import flash, request
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager




# @app.route("/getitinerary", methods = ['GET'])
# def get_itinerary():
#     try:
#         conn = mysql.connect()
#         cursor = conn.cursor(pymysql.cursors.DictCursor)
#         cursor.execute('SELECT * FROM itinerary')
#         row = cursor.fetchall()
#         if row != None:
#             resp = jsonify(row)
#         else:
#             resp = jsonify("itinerary not found")
#         resp.status_code = 200
#         return resp
#     except Exception as e:
#         print(e)
#     finally:
#         cursor.close() 
#         conn.close()

        
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

@app.route('/addtransaction', methods=['POST'])
def addtransaction():
	try:
		_json = request.json
		_TransactionAmount = _json['TransactionAmount']
		_Comment = _json['Comment']
		_AccountID = _json['AccountID']
		_ReceivingAccountID = _json['ReceivingAccountID']
		_Date = _json['Date']
		# validate the received values
		if _TransactionAmount and _Comment and _AccountID and _ReceivingAccountID and _Date and request.method == 'POST':
			sql = "INSERT INTO scheduledtransactions(AccountID, ReceivingAccountID, Date, TransactionAmount, Comment) VALUES(%s, %s, %s, %s, %s)"
			data = (_AccountID, _ReceivingAccountID, _Date, _TransactionAmount, _Comment,)
			conn = mysql.connect()
			cursor = conn.cursor()
			cursor.execute(sql, data)
			conn.commit()
			resp = jsonify('Transaction added successfully!')
			resp.status_code = 200
			return resp
		else:
			return not_found()
	except Exception as e:
		print(e)
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



@app.route("/destinations/<int:destination_id>", methods = ['PUT'])
def update_destination(destination_id):
    conn = None
    cursor = None
    row = None
    resp = jsonify([])

    name = request.args.get('name')
    cost = request.args.get('cost')
    notes = request.args.get('notes')

    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)

        # update
        cursor.execute("UPDATE destination \
                       SET name = %s, cost = %s, notes = %s \
                       WHERE id = %s;",
                       (name, cost, notes, destination_id))
        conn.commit()

        # retrieve the row
        cursor.execute("SELECT destination.name, country.name as countryName, destination.cost, destination.notes, destination.id \
                       FROM country INNER JOIN destination \
                       ON country.id = destination.country_id \
                       WHERE destination.id = %s;", (destination_id))
        row = cursor.fetchone()

        if row != None:
            resp = jsonify(row)
    except Exception as e:
        print(e, "error")
        resp.status_code = 404
    finally:
        if conn:
            conn.close()
        if cursor:
            cursor.close() 
        
    resp.status_code = 200
    return resp