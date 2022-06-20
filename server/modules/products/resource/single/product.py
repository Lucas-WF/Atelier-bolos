from flask_restful import Resource
from flask import request, jsonify, make_response
from models.products import Products
from datetime import datetime


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

            date_time = data['date_created'].split(' ')
            date = date_time[0].split('/')
            hour = date_time[1].split(':')
            date_created = datetime(
                int(date[0]), int(date[1]), int(date[2]), int(hour[0]), int(hour[1]), int(hour[2]))

            product.date_created = date_created
            product.category = data['category']
            product.image = data['image']

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

    def patch(self, product_id):
        data = request.get_json()
        product = Products.find_by_id(product_id)
        if product:
            if 'name' in data:
                product.name = data['name']
            if 'price' in data:
                product.price = data['price']
            if 'description' in data:
                product.description = data['description']
            if 'quantity' in data:
                product.quantity = data['quantity']
            if 'date_created' in data:
                date_time = data['date_created'].split(' ')
                date = date_time[0].split('/')
                hour = date_time[1].split(':')
                date_created = datetime(
                    int(date[0]), int(date[1]), int(date[2]), int(hour[0]), int(hour[1]), int(hour[2]))
                product.date_created = date_created
            if 'category' in data:
                product.category = data['category']
            if 'image' in data:
                product.image = data['image']
            Products.update_product(product)
            response_json = jsonify(product.as_dict())
            response = make_response(response_json, 200)
            return response
        else:
            response_json = jsonify({'message': 'Product not found'})
            response = make_response(response_json, 404)
            return response