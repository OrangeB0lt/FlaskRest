import flask
from flask import Flask
from flask_restful import Resource, Api
import json

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=['GET'])
def HelloWorld():
    response = flask.jsonify({'message': 'Hello Babe, I am working'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=True)