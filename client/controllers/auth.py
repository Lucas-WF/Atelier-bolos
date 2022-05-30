import re
from flask import render_template
from flask import request, jsonify
from flask import Blueprint

auth = Blueprint("auth", __name__)

@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        data = jsonify(request.form)
        print(data.data)

    return render_template("login.html")

@auth.route("/register", methods=["GET", "POST"])
def register():
    return render_template("register.html")