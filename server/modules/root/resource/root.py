from flask_restful import Resource
from flask import jsonify, make_response

class Root(Resource):
    def get(self):
        response_json = jsonify({'message': 'Welcome to the root of the API'})
        response = make_response(response_json, 200)
        return response