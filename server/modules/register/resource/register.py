from urllib import response
from flask_restful import Resource
from flask import request, jsonify, make_response
from models.users import Users
from flask_jwt_extended import create_access_token


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
                token = create_access_token(identity=username)
                new_user = Users(username=username, password=password, email=email, token=token)
                Users.save_user(new_user)
                response_json = jsonify({'message': 'User created successfully', 'token': token})
                response = make_response(response_json, 201)
                return response
        else:
            response_json = jsonify({'message': 'Please provide all the details'})
            response = make_response(response_json, 400)
            return response
