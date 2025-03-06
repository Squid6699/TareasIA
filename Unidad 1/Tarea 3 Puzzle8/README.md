# Resolución del Problema del 8-Puzzle con A*

Este proyecto implementa el algoritmo A* para resolver el problema del 8-Puzzle. Utiliza una heurística basada en la distancia de Manhattan para encontrar la solución óptima.

## Descripción del Problema
El 8-Puzzle es un juego en el que se tiene una cuadrícula de 3x3 con 8 fichas numeradas y un espacio vacío (representado por `0`). El objetivo es mover las fichas deslizando una hacia el espacio vacío hasta obtener una configuración objetivo.

## Estructura del Código
- **`puzzle8(puzzle_initial, puzzle_target)`**: Función principal que implementa el algoritmo A*.
- **`movePiece(puzzle, move)`**: Realiza el movimiento de una ficha en la dirección indicada.
- **`heuristic_manhattan(puzzle)`**: Calcula la heurística de Manhattan para estimar la distancia al estado objetivo.
- **`Nodo`**: Clase que representa un estado del puzzle con información de costos y movimientos.

## Requisitos
Para ejecutar el código, se requiere Python 3 y la instalación de la biblioteca `tabulate`:
```sh
pip install tabulate
```

## Uso
Ejecuta el script con:
```sh
python Puzzle8.py
```
El programa mostrará los movimientos necesarios para resolver el puzzle junto con la representación visual de cada paso.

## Ejemplo de Entrada
```python
puzzle_initial = [
    [5,4,1],
    [2,0,6],
    [7,8,3]
]

puzzle_target = [
    [3,4,2],
    [1,8,6],
    [7,5,0]
]
```

## Ejemplo de Salida
```
Move 1: LEFT
+----+----+----+
|  5 |  4 |  1 |
|  0 |  2 |  6 |
|  7 |  8 |  3 |
+----+----+----+
...
Número de movimientos: X
```

## Notas
- Si no hay solución, el programa imprimirá `No solution`.
- Se utiliza una cola de prioridad (`heapq`) para manejar los estados.
- El algoritmo sigue la función de evaluación: `f(n) = g(n) + h(n)`, donde `g(n)` es el costo del camino y `h(n)` es la heurística de Manhattan.
