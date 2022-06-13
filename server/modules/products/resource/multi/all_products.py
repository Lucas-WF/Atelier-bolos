from flask_restful import Resource
from models.products import Products
from flask import jsonify, request, make_response
import datetime


class AllProducts(Resource):
    def get(self):
        products = Products.list_all()
        if products:
            dict_products = []
            for product in products:
                dict_products.append(product.as_dict())
            response_json = jsonify(dict_products)
            response = make_response(response_json, 200)
            dict_products = []
            return response
        else:
            response_json = jsonify({'message': 'Product not found'})
            response = make_response(response_json, 404)
            return response

    def post(self):
        data = request.get_json()
        date = data['date_created'].split('/')
        date_created = datetime.datetime(
            int(date[0]), int(date[1]), int(date[2]))

        new_product = Products(name=data['name'], price=data['price'], description=data[
            'description'], quantity=data['quantity'], date_created=date_created, category=data['category'])
        Products.save_product(new_product)
        response_json = jsonify(new_product.as_dict())
        response = make_response(response_json, 201)
        return response
