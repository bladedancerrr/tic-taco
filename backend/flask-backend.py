# simple REST API with flask

from flask import Flask, jsonify, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class HelloWord(resource):
    # get request
    def get(self):
        return {"Tic-Taco": "Made with <3 by Pete & Aye"}

    # post request
    def post(self):
        rec_json = request.get_json()
        return {'Hey there! You\'ve sent': rec_json}, 201


# set up api resource routing
api.add_resource(HelloWord, '/')

if __name__ == "__main__":
    app.run()
