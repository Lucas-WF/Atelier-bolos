from db import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __init__(self, username, password, email):
        self.username = username
        self.password = password
        self.email = email

    @classmethod
    def find_by_username(cls, username):
        user = cls.query.filter_by(username=username).first()
        if user is not None:
            return user
        return None

    @classmethod
    def find_by_email(cls, email):
        email = cls.query.filter_by(email=email).first()
        if email is not None:
            return email
        return None

    @classmethod
    def save_user(cls, user):
        db.session.add(user)
        db.session.commit()

    def __repr__(self):
        return '<User %r>' % self.username