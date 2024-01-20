from app import app
from flask import jsonify, request
from db import mysql
import pymysql

# get all countries
@app.route('/countries', methods = ['GET'])
def get_all_countries():
    conn = None
    cursor = None
    row = None
    resp = jsonify([])

    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * from country')
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


