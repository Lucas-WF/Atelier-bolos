from flask_restful import Resource
from flask import request
from models.admin import Admins

class Admin(Resource):
    def post(self):
        data = request.get_json()
        login = data['login']
        password = data['password']
        
        admin = Admins.find_by_admin_login(admin_login=login)

        if admin and admin.password == password:
            return {'message': 'Logged in successfully'}, 200
        else:
            return {'message': 'Wrong credentials'}, 401