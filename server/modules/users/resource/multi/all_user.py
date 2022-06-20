from re import U
from flask_restful import Resource
from flask import jsonify, make_response
from models.users import Users

class AllUsers(Resource):
    def get(self):
        users = Users.list_all()
        print(users)
        if users:
            dict_users = []
            for user in users:
                dict_users.append(user.as_dict())
            
            for user in dict_users:
                user.pop('password')

            response_json = jsonify(dict_users)
            response = make_response(response_json, 200)
            dict_users = []
            return response
        else:
            response_json = jsonify({'message': 'User not found'})
            response = make_response(response_json, 404)
            return response


