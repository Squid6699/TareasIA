from flask import Flask, jsonify, request
from flask_cors import CORS
from reglas_y_hechos import hechos, diagnosticos, evaluar_reglas

app = Flask(__name__)
CORS(app)


@app.route("/api/obtenerHechos", methods=["GET"])
def obtener_hechos():
    return jsonify({"hechos": hechos})

@app.route("/api/diagnostico", methods=["POST"])
def diagnostico():
    data = request.get_json()
    print("Datos recibidos:", data)

    for clave, valor in data.items():
        hechos[clave] = valor
    
    evaluar_reglas(hechos)

    return jsonify({"diagnosticos": diagnosticos})

if __name__ == '__main__':
    app.run(debug=True, port=3001)