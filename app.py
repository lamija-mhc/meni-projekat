from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/meni")
def meni():
    return render_template("meni.html")

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 10000))  # Default 5000 ako PORT nije postavljen
    app.run(host="0.0.0.0", port=port)
