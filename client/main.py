from flask import Flask
from flask import render_template
from controllers.auth import auth

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

app.register_blueprint(auth, url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True)
