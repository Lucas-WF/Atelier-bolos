from flask_restful import Resource
from flask import request
from models.users import Users

class Login(Resource):
    def post(self):
        data = request.get_json()
        email = data['email']
        password = data['password']
        mail = Users.find_by_email(email=email)
        if mail and mail.password == password:
            return {'message': 'Logged in successfully'}, 200
        else:
            return {'message': 'Wrong credentials'}, 401