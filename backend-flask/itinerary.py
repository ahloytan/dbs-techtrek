import pymysql 
from flask import Flask 
from db import mysql
from app import app
from flask import jsonify
from flask import flash, request


@app.route("/itineraries", methods = ['GET'])
def get_itinerary():
    resp = jsonify([])
    try:
        conn = mysql.connect()

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        user_id = request.args['user_id']
        cursor.execute(f"SELECT itinerary.id, country.name  AS countryName, itinerary.budget, itinerary.title, destination.name \
                       FROM itinerary INNER JOIN country INNER JOIN destination \
                       ON country.id = itinerary.country_id WHERE itinerary.user_id = {user_id}")
        
        row = cursor.fetchall()
        if row != None:
            resp = jsonify(row)
        else:
            resp = jsonify("itinerary not found")
        resp.status_code = 200
        
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()
        return resp

@app.route('/itineraries',methods = ['POST'])
def insert_itineraries():
    try:
        _json = request.json
        _country_id = _json['country_id']
        _user_id = _json['user_id']
        _budget = _json['budget']
        _title = _json['title']
   
		# validate the received values
        if _country_id and _budget and _title and request.method == 'POST':
            sql = 'INSERT INTO itinerary (user_id, country_id,budget,title) VALUES (%s,%s,%s,%s) '
            
            data = (_user_id,_country_id,_budget,_title,)
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute(sql, data)
            conn.commit()
            resp = jsonify('Itinerary added successfully!')
            resp.status_code = 200
            return resp
        else:
            return not_found()
    finally:
        cursor.close()
        conn.close()



@app.route('/itineraries/<int:itinerary_id>', methods=['PUT'])
def update_user_details():
    conn = None
    cursor = None
    row = None
    resp = jsonify([])

    title = request.args.get('title')
    budget = request.args.get('budget')
    id = request.args.get('id')
    
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
    
        cursor.execute("UPDATE itinerary SET title = %s, budget = %s where id = %s;", (title, budget, id))

        conn.commit()
        cursor.execute(f"SELECT itinerary.id, country.name  AS countryName, itinerary.budget, itinerary.title, destination.name \
                       FROM itinerary INNER JOIN country INNER JOIN destination \
                       ON country.id = itinerary.country_id WHERE itinerary.id = {id}")			
        row = cursor.fetchone()
        
    except Exception as e:
        print(e)
		# return resp
    finally:
        cursor.close()
        conn.close()
        if row != None:
            conn.commit()
            resp = jsonify({
                "code": 200,
                "data": "Update successful."
            })
        else:
            resp = jsonify("Unable to update details.")
        resp.status_code = 200
        return resp
    
@app.route('/itineraries/<int:id>',methods=["DELETE"])
def deleteItineraries(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor(pymysql.cursors.DictCursor)
		cursor.execute("DELETE FROM itinerary WHERE id=%s", (id,))
		conn.commit()
		resp = jsonify('Itineraries deleted successfully!')
		resp.status_code = 200
		return resp
	except Exception as e:
		print(e)
	finally:
		cursor.close()
		conn.close()


# @app.route('/itineraries/:id/destination',methods = ['POST'])
# def insert_itineraries():
#     try:
#         _json = request.json
#         _itineraryid = _json['itinerary_id']
#         _destinationid = _json['destination_id']
        
   
# 		# validate the received values
#         if _itineraryid and _destinationid and request.method == 'POST':
#             sql = 'INSERT INTO itinerary (itineraryid,destinationid) VALUES (%s,%s)'
#             data = (_itineraryid,_destinationid)
#             conn = mysql.connect()
#             cursor = conn.cursor(pymysql.cursors.DictCursor)
#             cursor.execute(sql, data)
#             conn.commit()
#             resp = jsonify('Itinerary added successfully!')
#             resp.status_code = 200
#             return resp
#         else:
#             return not_found()
#     finally:
#         cursor.close()
#         conn.close()


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