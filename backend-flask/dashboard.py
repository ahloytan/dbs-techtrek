import pymysql 
from flask import Flask 
from db import mysql
from app import app
from flask import jsonify
from flask import flash, request

@app.route('/itineraries/<id>', methods = ['GET'])
def get_itinerary_by_id(id):
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM itinerary INNER JOIN itinerary_destination ON itinerary_destination.itinerary_id = itinerary.id INNER JOIN destination ON itinerary_destination.destination_id = destination.id INNER JOIN country ON itinerary.country_id = country.id WHERE itinerary.id = %s ', id)
        rows = cursor.fetchall()
        if not rows:
            return jsonify("itinerary not found")
        first_row = rows[0]
        itinerary = {
            "id": first_row["id"],
            "title": first_row["title"],
            "budget": first_row["budget"],
        }
        destinations = []
        for row in rows:
            destination = {
                "id": row["destination_id"],
                "title": row["title"],
                "cost": row["cost"],
                "name": row["name"],
                "notes": row["notes"]
            }
            destinations.append(destination)
        itinerary["destinations"] = destinations
        resp = jsonify(itinerary)
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()


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