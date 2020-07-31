import numpy as np
from tree import Node, Tree
from utils import is_board_full

# TODO: AI is assumed to go second here, subject to change
AI = 2
HUMAN = 1


def generate_easy_AI_move(click_state):
    # TODO: Depth is fixed to two atm, subject to change
    depth = 2
    states = Tree(Node(click_state))

    (best_future_node, _) = minimax(
        states.root, depth, maximizingPlayer=True)
    print(best_future_node)
    print(best_future_node.move)
    return best_future_node.move


def minimax(node, depth, maximizingPlayer):
    if not depth or is_board_full(node.board):
        return (node, evaluate(node, AI if maximizingPlayer else HUMAN))

    best_node = None
    if maximizingPlayer:
        max_eval = -float("inf")

        for potential_node in node.children:
            _, eval = minimax(potential_node, depth-1, False)
            if eval > max_eval:
                max_eval = eval
                best_node = potential_node
        return best_node, max_eval
    else:
        min_eval = float("inf")
        for potential_node in node.children:
            _, eval = minimax(potential_node, depth-1, True)
            if eval < min_eval:
                min_eval = eval
                best_node = potential_node
        return best_node, min_eval


def evaluate(node, player):
    """
    player - taco / burrito
    """
    opponent = 1 if player == 2 else 2
    blank = 0
    invalid = -1
    values = {player: 2, opponent: -1, blank: 1, invalid: 0}

    # Keep track of the score of rows, col and diag separately
    np_board = np.array(node.board).reshape(3, 3)

    row = get_row(np_board, node.move)
    col = get_col(np_board, node.move)
    diag = get_diag(np_board, node.move)

    move_score = evalArrays([row, col, diag], values)
    return sum(move_score)


def get_row(np_board, square_id):
    return np_board[square_id // 3]


def get_col(np_board, square_id):
    return np_board.transpose()[square_id % 3]


def get_diag(np_board, square_id):
    diag1 = [0, 4, 8]
    diag2 = [2, 4, 6]
    if square_id in diag1:
        return np.diagonal(np_board).tolist()
    if square_id in diag2:
        return np.diagonal(np.rot90(np_board).tolist())

    # TODO: this bit is subject to change
    return [-1, -1, -1]


def evalArrays(arrays, values):
    # return an array of with the sums of the weights of each sub-array in arrays
    return([sum(values[val] for val in arr) for arr in arrays])


if __name__ == "__main__":
    # board = [0, 1, 0, 0, 0, 0, 0, 0, 0]
    # board = [1, 0, 0, 0, 0, 0, 0, 0, 0]
    board = [1, 2, 2, 0, 2, 0, 1, 1, 1]
    # node = Node(board)
    # node.move = 0
    # evaluate(node, 1)
    generate_easy_AI_move(board)
    # a = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    # np.array(a).reshape(3, 3)
