from flask_restful import Resource
from flask import request
from models.admin import Admin

class Admin(Resource):
    def post(self):
        data = request.get_json()
        admin_login = data['login']
        password = data['password']
        mail = Admin.query.filter_by(admin_login=admin_login).first()
        if mail and mail.password == password:
            return {'message': 'Logged in successfully'}, 200
        else:
            return {'message': 'Wrong credentials'}, 401