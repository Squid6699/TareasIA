from typing import TypeVar, Generic
T = TypeVar('T')

class Nodo(Generic[T]):

    def __init__(self, valor: T):
        self.valor = valor
        self.__nodoIzquierdo = None
        self.__nodoDerecho = None

    def getValor(self) -> T:
        return self.valor
    
    def getNodoIzquierdo(self):
        return self.__nodoIzquierdo
    
    def getNodoDerecho(self):
        return self.__nodoDerecho
    
    def setValor(self, valor: T):
        self.valor = valor

    def setNodoIzquierdo(self, Nodo):
        self.__nodoIzquierdo = Nodo

    def setNodoDerecho(self, Nodo):
        self.__nodoDerecho = Nodo
