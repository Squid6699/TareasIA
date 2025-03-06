import heapq
from tabulate import tabulate

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

moves = ("UP", "DOWN", "LEFT", "RIGHT")

# f(n)=g(n)+h(n)

def puzzle8(puzzle_initial, puzzle_target):
    priority_queue = [] #To store the states
    visited_states = set() #To store visited states
    
    gn = 0 #Cost of the path
    hn = heuristic_manhattan(puzzle_initial)
    heapq.heappush(priority_queue, Nodo(puzzle_initial, gn, hn, "", None))

    while priority_queue:
        current= heapq.heappop(priority_queue)
        if current.puzzle == puzzle_target:
            break
        visited_states.add(str(current.puzzle))
        for move in moves:
            new_puzzle = movePiece(current.puzzle, move)
            if new_puzzle is not None and str(new_puzzle) not in visited_states:
                gn = current.gn + 1
                hn = heuristic_manhattan(new_puzzle)
                heapq.heappush(priority_queue, Nodo(new_puzzle, gn, hn, move, current))
    
    if (current.puzzle != puzzle_target):
        print("No solution")
        return None

    # get the path
    path = []
    while current is not None:
        path.append(current)
        current = current.ant
    path.reverse()

    # print the path
    for index, node in enumerate(path):
        if node.move:
            print(f"Move {index}: {node.move}\n")

        table = [[f'{num:2}' for num in row] for row in node.puzzle]
        print(tabulate(table, tablefmt="grid"))
        print('')

    print("Number of moves:", len(path) - 1)
    print("")


def movePiece(puzzle, move):
    next_puzzle = [row.copy() for row in puzzle]
    x, y = next((i, j) for i in range(3) for j in range(3) if puzzle[i][j] == 0) #
    if move == 'UP':
        if x > 0:
            next_puzzle[x][y], next_puzzle[x - 1][y] = next_puzzle[x - 1][y], next_puzzle[x][y]
            return next_puzzle
    elif move == 'DOWN':
        if x < 2:
            next_puzzle[x][y], next_puzzle[x + 1][y] = next_puzzle[x + 1][y], next_puzzle[x][y]
            return next_puzzle
    elif move == 'LEFT':
        if y > 0:
            next_puzzle[x][y], next_puzzle[x][y - 1] = next_puzzle[x][y - 1], next_puzzle[x][y]
            return next_puzzle
    elif move == 'RIGHT':
        if y < 2:
            next_puzzle[x][y], next_puzzle[x][y + 1] = next_puzzle[x][y + 1], next_puzzle[x][y]
            return next_puzzle
    return None

def heuristic_manhattan(puzzle):
    heuristica = 0
    for i in range(3):
        for j in range(3):
            current = puzzle[i][j]
            if current != puzzle_target[i][j]:
                for x in range(3):
                    for y in range(3):
                        if puzzle_target[x][y] == current:
                            heuristica += abs(i - x) + abs(j - y)
                            break
    return heuristica


class Nodo():
    def __init__(self, puzzle, gn, hn, move, ant):
        self.puzzle = puzzle
        self.gn = gn
        self.hn = hn
        self.move = move
        self.ant = ant

    def __lt__(self, other):
        return self.gn + self.hn < other.gn + other.hn

if __name__ == "__main__":
    puzzle8(puzzle_initial, puzzle_target)