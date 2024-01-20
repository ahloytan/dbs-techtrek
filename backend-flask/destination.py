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
    conn = None
    cursor = None
    row = None
    resp = jsonify([])

    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT destination.name, destination.id, destination.cost, destination.notes, country.name AS countryName \
                       FROM destination INNER JOIN country \
                       ON country.id = destination.country_id')
        row = cursor.fetchall()
        if row != None:
            resp = jsonify(row)
    except Exception as e:
        print(e)
        resp.status_code = 404
    finally:
        if conn:
            conn.close()
        if cursor:
            cursor.close() 
        
    resp.status_code = 200
    return resp
    
@app.route("/destinations", methods = ['POST'])
def add_destination():
    conn = None
    cursor = None
    row = None
    resp = jsonify([])

    country_id = request.json['countryId']
    name = request.json['name']
    notes = request.json['notes']
    cost = request.json['cost']
    itinerary_id = request.json['itineraryId']

    # print(type(country_id))
    # print(type(name))
    # print(type(notes))
    # print(type(cost))
    # print(type(itinerary_id))

    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)

        cursor.execute('INSERT INTO destination \
                       (country_id, cost, name, notes) \
                       VALUES (%s, %s, %s, %s);', (country_id, cost, name, notes))
        
        cursor.execute('SELECT LAST_INSERT_ID() AS id;')
        row = cursor.fetchone()
        destination_id = row["id"]

        ## inserting into joint table
        cursor.execute('INSERT INTO itinerary_destination \
                       (destination_id, itinerary_id) \
                       VALUES (%s, %s);', (destination_id, itinerary_id))

        ## select the join with country to get country name
        cursor.execute("SELECT destination.name, country.name as countryName, destination.cost, destination.notes, destination.id \
                       FROM country INNER JOIN destination \
                       ON country.id = destination.country_id \
                       WHERE destination.id = %s;", (destination_id))
        row = cursor.fetchone()
        conn.commit()
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