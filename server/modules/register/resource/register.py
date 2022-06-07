from flask_restful import Resource
from flask import request
from models.users import Users

class Register(Resource):
    def post(self):

        data = request.get_json()
        username = data['username']
        email = data['email']
        password = data['password']

        if username and password and email:
            user = Users.find_by_username(username=username)
            mail = Users.find_by_email(email=email)
            if user:
                return {'message': 'User already exists'}, 400
            elif mail:
                return {'message': 'Email already exists'}, 400
            else:
                new_user = Users(username=username, password=password, email=email)
                Users.save_user(new_user)
                return {'message': 'User created successfully'}, 201
        else:
            return {'message': 'Please provide both username and password'}, 400
