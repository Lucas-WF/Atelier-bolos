from db import db

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    token = db.Column(db.String(120), unique=True, nullable=False)

    def __init__(self, username, password, email, token):
        self.username = username
        self.password = password
        self.email = email
        self.token = token


    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def list_all(cls):
        return cls.query.all()

    @classmethod
    def find_by_username(cls, username):
        user = cls.query.filter_by(username=username).first()
        if user is not None:
            return user
        return None

    @classmethod
    def find_by_email(cls, email):
        mail = cls.query.filter_by(email=email).first()
        if mail is not None:
            return mail
        return None

    @classmethod
    def save_user(cls, user):
        db.session.add(user)
        db.session.commit()

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    
    def __repr__(self) -> str:
        return f'<Username {self.username}>'