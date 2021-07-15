import flask
from flask import Flask
from flask_restful import Resource, Api
import json

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=['GET'])
def Message():
    response = flask.jsonify({'message': 'Hello Babe, I am working', 'smessages':'This is a second string'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=True)