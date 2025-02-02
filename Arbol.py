from Nodo import Nodo

class Arbol:
    def __init__(self):
        self.raiz = None

    def insertar(self, nodo):
        if self.raiz is None:
            self.raiz = Nodo(nodo)
        else:
            self.insertarNodo(nodo, self.raiz)

    def insertarNodo(self, valor, nodoActual):
        if valor < nodoActual.getValor():
            if nodoActual.getNodoIzquierdo() is None:
                nodoActual.setNodoIzquierdo(Nodo(valor))
            else:
                self.insertarNodo(valor, nodoActual.getNodoIzquierdo())
        else:
            if nodoActual.getNodoDerecho() is None:
                nodoActual.setNodoDerecho(Nodo(valor))
            else:
                self.insertarNodo(valor, nodoActual.getNodoDerecho())
                
    def buscar_recursivo(self, Nodo, valor):
        if Nodo is None:
            print("El nodo no existe.")
            return
        if valor == Nodo.getValor():
            print("El nodo buscado es:", valor)

            if (Nodo.getNodoIzquierdo() != None):
                print("El nodo izquierdo es:", Nodo.getNodoIzquierdo().getValor())
            else:
                print("No tiene nodo izquierdo.")
            
            if (Nodo.getNodoDerecho() != None):
                print("El nodo derecho es:", Nodo.getNodoDerecho().getValor())
            else:
                print("No tiene nodo derecho.")

            return
        if valor < Nodo.getValor():
            return self.buscar_recursivo(Nodo.getNodoIzquierdo(), valor)
        else:
            return self.buscar_recursivo(Nodo.getNodoDerecho(), valor)
        
    def vacio(self):
        if (self.raiz == None):
            print("El arbol esta vacio.")
        else:
            print("El arbol no esta vacio.")
    
    def imprimir_inorden(self, Nodo):
        if Nodo is not None:
            self.imprimir_inorden(Nodo.getNodoIzquierdo())
            print(Nodo.getValor())
            self.imprimir_inorden(Nodo.getNodoDerecho())


        


