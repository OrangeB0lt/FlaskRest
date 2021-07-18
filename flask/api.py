import flask
from flask import Flask
from flask_restful import Resource, Api
import json

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=['GET'])
def Message():
    response = flask.jsonify({'message': 'Hello Babe, I am working', 
                              'smessage': 'This is a second string'},
                              {'message': 'Hello JOEB, I am working', 
                              'smessage': 'This is JOEB second string'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/create_user', methods=['POST'])
def login():
    data = request.json
    return 0
    

if __name__ == '__main__':
    app.run(debug=True)