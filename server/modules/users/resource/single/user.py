from re import I
from flask_restful import Resource
from flask import jsonify, make_response
from models.users import Users

class User(Resource):
    def get(self, user_id):
        user = Users.find_by_id(user_id)
        if user:
            user = user.as_dict()
            user.pop('password')
            response_json = jsonify(user)
            response = make_response(response_json, 200)
        else:
            response_json = {'message': 'User not found'}
            response = make_response(response_json, 404)
        return response