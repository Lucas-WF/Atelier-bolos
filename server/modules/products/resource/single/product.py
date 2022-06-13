from flask_restful import Resource
from flask import request, jsonify, make_response
from models.products import Products


class Product(Resource):
    def get(self, product_id):
        product = Products.find_by_id(product_id)
        if product:
            response_json = jsonify(product.as_dict())
            response = make_response(response_json, 200)
            return response
        else:
            response_json = jsonify({'message': 'Product not found'})
            response = make_response(response_json, 404)
            return response

    def put(self, product_id):
        data = request.get_json()
        product = Products.find_by_id(product_id)
        if product:
            product.name = data['name']
            product.price = data['price']
            product.description = data['description']
            product.quantity = data['quantity']
            product.date_created = data['date_created']
            product.category = data['category']
            Products.update_product(product)
            response_json = jsonify(product.as_dict())
            response = make_response(response_json, 200)
            return response
        else:
            response_json = jsonify({'message': 'Product not found'})
            response = make_response(response_json, 404)
            return response

    def delete(self, product_id):
        product = Products.find_by_id(product_id)
        if product:
            Products.delete_product(product)
            response_json = jsonify({'message': 'Product deleted'})
            response = make_response(response_json, 204)
            return response
        else:
            response_json = jsonify({'message': 'Product not found'})
            response = make_response(response_json, 404)
            return response