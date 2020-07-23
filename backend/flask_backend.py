# simple REST API with flask

from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
from minimax import generate_AI_move

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)


@app.route("/ai-move", methods=["POST"])
def get_move():
    rec_json = request.get_json()
    print(rec_json["clickState"])
    click_state = rec_json["clickState"]
    return generate_AI_move(click_state), 201, {'Access-Control-Allow-Origin': '*'}


@app.route("/difficulty", methods=["POST"])
def set_difficulty():
    rec_json = request.get_json()
    print(rec_json["difficulty"])
    return "success", 200


if __name__ == "__main__":
    app.run()
