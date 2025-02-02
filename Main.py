from Arbol import Arbol

if __name__ == "__main__":

    arbol = Arbol()
    valores = [80, 2, 45, 44, 23, 60, 12]
    for v in valores:
        arbol.insertar(v)

    arbol.buscar_recursivo(arbol.raiz, 80)

    print("RECORRIDO DE ARBOL INORDEN.")
    arbol.imprimir_inorden(arbol.raiz)
