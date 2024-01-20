from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app)
PORT = 5051

if __name__ == '__main__':
    app.run(port=PORT, debug=True)