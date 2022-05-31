from flask_restful import Resource
from flask import request
from models.users import User

class Register(Resource):
    def post(self):

        data = request.get_json()
        username = data['username']
        email = data['email']
        password = data['password']

        if username and password and email:
            user = User.query.filter_by(username=username).first()
            email = User.query.filter_by(email=email).first()
            if user:
                return {'message': 'User already exists'}, 400
            elif email:
                return {'message': 'Email already exists'}, 400
            else:
                new_user = User(username=username, password=password, email=email)
                User.save_user(new_user)
                return {'message': 'User created successfully'}, 201
        else:
            return {'message': 'Please provide both username and password'}, 400
