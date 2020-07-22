# simple REST API with flask

from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
from minimax import generate_AI_move

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)


class ticTacoAPI(Resource):
    def __init__(self):
        difficulty = None

    # get request
    def get(self):
        return "Tic Taco made with <3 by Aye & Pete"

    # post request
    @app.route("/ai-move", methods=["POST"])
    def get_move(self):
        rec_json = request.get_json()
        print(rec_json["clickState"])
        click_state = rec_json["clickState"]
        return generate_AI_move(click_state), 201, {'Access-Control-Allow-Origin': '*'}

    # post request
    @app.route("/difficulty", methods=["POST"])
    def difficulty(self):
        rec_json = request.get_json()
        print(rec_json["difficulty"])


if __name__ == "__main__":
    app.run()
