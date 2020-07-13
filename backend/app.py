from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/")
def api():
    return jsonify("haloo")


if __name__ == "__main__":
    app.run()