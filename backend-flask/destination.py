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


@app.route("/destinations", methods = ['GET'])
def get_all_destinations():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT destination.name, destination.id, destination.cost, destination.notes, country.name AS countryName \
                       FROM destination INNER JOIN country \
                       ON country.id = destination.country_id')
        row = cursor.fetchall()
        
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()

    if row != None:
        resp = jsonify(row)
    else:
        resp = jsonify("destinations not found")
    resp.status_code = 200
    return resp
    

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