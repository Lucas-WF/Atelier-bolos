from flask_restful import Resource
from flask import request, jsonify, make_response
from models.admin import Admins
from flask_jwt_extended import create_access_token 

class Admin(Resource):
    def post(self):
        data = request.get_json()
        login = data['login']
        password = data['password']
        
        admin = Admins.find_by_admin_login(admin_login=login)

        if admin and admin.password == password:
            token = create_access_token(identity=login)
            response_json = jsonify({'message': 'Login successful', 'token': token, 'login': admin.admin_login})
            response = make_response(response_json, 200)
            return response
        else:
            response_json = jsonify({'message': 'Login failed'})
            response = make_response(response_json, 401)
            return response