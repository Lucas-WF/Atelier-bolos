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
        name = data['name']
        number = data['number']
        
        if username and password and email:
            user = Users.find_by_username(username=username)
            mail = Users.find_by_email(email=email)
            num = Users.find_by_number(number=number)
            if user:
                response_json = jsonify({'message': 'Username already exists'})
                response = make_response(response_json, 400)
                return response
            elif mail:
                response_json = jsonify({'message': 'Email already exists'})
                response = make_response(response_json, 400)
                return response
            elif num:
                response_json = jsonify({'message': 'Number already exists'})
                response = make_response(response_json, 400)
                return response
            else:
                token = create_access_token(identity=username)
                new_user = Users(username=username, password=password, email=email, name=name, number=number)
                Users.save_user(new_user)
                response_json = jsonify({'message': 'User created successfully', 'token': token, 'username': username, 'email': email, 'name': name, 'number': number})
                response = make_response(response_json, 201)
                return response
        else:
            response_json = jsonify({'message': 'Please provide all the details'})
            response = make_response(response_json, 400)
            return response
