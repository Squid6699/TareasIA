import heapq

puzzle_initial = [
    [5,4,1], 
    [2,0,6], 
    [7,8,3]
]

puzzle_target = [
    [1,2,3], 
    [4,5,6], 
    [7,8,0]
]

def puzzle8(puzzle_initial, puzzle_target):
    priority_queue = []
    visited_states = set() #To store visited states

def heuristic_manhattan(puzzle):
    distance = 0
    for i in range(3):
        for j in range(3):
            if puzzle[i][j] != 0:
                #Manhattan distance
                distance += abs(i - (puzzle[i][j] - 1) // 3) + abs(j - (puzzle[i][j] - 1) % 3)
    return distance
    