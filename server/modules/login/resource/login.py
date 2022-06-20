from flask_restful import Resource
from flask import request, jsonify, make_response
from models.users import Users
from flask_jwt_extended import create_access_token

class Login(Resource):
    def post(self):
        data = request.get_json()
        email = data['email']
        password = data['password']
        mail = Users.find_by_email(email=email)
        if mail and mail.password == password:
            token = create_access_token(identity=email)
            response_json = jsonify({'message': 'Login successful', 'token': token, 'username': mail.username, 'email': mail.email, 'name': mail.name, 'number': mail.number})
            response = make_response(response_json, 200)
            return response
        else:
            response_json = jsonify({'message': 'Login failed'})
            response = make_response(response_json, 401)
            return response
