import numpy as np


def is_board_full(board_state):
    for square in board_state:
        if square == 0:
            return False
    return True


def count_free_space(board_state):
    total = 0
    for square in board_state:
        if square == 0:
            total += 1
    return total


def get_all_vectors(board_state):
    np_board = np.array(board_state).reshape(3, 3)
    vectors = get_rows(np_board) + get_cols(np_board) + get_diags(np_board)
    return vectors


def get_rows(np_board):
    return np_board.tolist()


def get_cols(np_board):
    return np_board.transpose().tolist()


def get_diags(np_board):
    maj_diag = np.diagonal(np_board).tolist()
    min_diag = np.diagonal(np.rot90(np_board)).tolist()
    return [maj_diag, min_diag]
