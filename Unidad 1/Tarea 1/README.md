# Proyecto: Implementación de un Árbol Binario de Búsqueda en Python

## Descripción
Este proyecto implementa una estructura de datos de Árbol Binario de Búsqueda (ABB) en Python. Contiene las clases `Arbol` y `Nodo` que permiten insertar elementos, realizar búsquedas y recorrer el árbol en orden.

## Estructura del Proyecto
El proyecto está compuesto por tres archivos principales:
1. `main.py`: Archivo principal que instancia un árbol, inserta valores y ejecuta la búsqueda y el recorrido en orden.
2. `Arbol.py`: Contiene la implementación de la clase `Arbol` con operaciones como inserción, búsqueda y recorrido.
3. `Nodo.py`: Define la estructura del nodo del árbol, con atributos para su valor y referencias a sus nodos izquierdo y derecho.

## Uso
Para ejecutar el proyecto, simplemente corre el archivo `main.py`:
```sh
python main.py
```

## Funcionalidades
- **Inserción de nodos**: Se insertan valores en el árbol siguiendo las reglas de un Árbol Binario de Búsqueda.
- **Búsqueda recursiva**: Se verifica si un valor está presente en el árbol y se muestran sus nodos adyacentes.
- **Verificación de vacío**: Se determina si el árbol está vacío.
- **Recorrido en inorden**: Se imprimen los valores del árbol en orden ascendente.

## Ejemplo de Uso
```python
from Arbol import Arbol

if __name__ == "__main__":
    arbol = Arbol()
    valores = [80, 2, 45, 44, 23, 60, 12]
    for v in valores:
        arbol.insertar(v)
    
    arbol.buscar_recursivo(arbol.raiz, 80)
    
    print("RECORRIDO DE ARBOL INORDEN.")
    arbol.imprimir_inorden(arbol.raiz)
```