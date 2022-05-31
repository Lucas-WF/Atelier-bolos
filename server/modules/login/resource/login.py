from flask_restful import Resource
from flask import request
from models.users import User

class Login(Resource):
    def post(self):
        data = request.get_json()
        email = data['email']
        password = data['password']
        mail = User.query.filter_by(email=email).first()
        if mail and mail.password == password:
            return {'message': 'Logged in successfully'}, 200
        else:
            return {'message': 'Wrong credentials'}, 401