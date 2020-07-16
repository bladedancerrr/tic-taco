import numpy as np
from tree import *
# returns the square id of the move AI is going to make


def generate_AI_move(click_state):
    states = Tree(Node(click_state))
    minimax()


def minimax(Node, depth, maximizingPlayer):
    pass


def evaluate(board_state, player):
    """
    player - taco / burrito
    """
    opponent = 1 if player == 2 else 2
    blank = 0
    values = {player: 2, opponent: -1, blank: 1}

    # Keep track of the score of rows, col and diag separately
    np_board = np.array(board_state).reshape(3, 3)
    scores = {}

    rows = get_rows(np_board)
    cols = get_cols(np_board)
    diags = get_diags(np_board)

    scores["rows"] = evalArray(rows, values)
    scores["cols"] = evalArray(cols, values)
    scores["diags"] = evalArray(diags, values)

    return scores


def get_rows(np_board):
    return np_board.tolist()


def get_cols(np_board):
    return np_board.transpose().tolist()


def get_diags(np_board):
    maj_diag = np.diagonal(np_board).tolist()
    min_diag = np.diagonal(np.rot90(np_board).tolist())
    return [maj_diag, min_diag]


def evalArray(arrays, values):
    # return an array of with the sums of the weights of each sub-array in arrays
    return([sum(values[val] for val in arr) for arr in arrays])
