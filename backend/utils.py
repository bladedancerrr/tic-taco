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


def is_game_over(board_state):
    """
    Game is over when either the board is full and/or there is a winner
    """
    return is_board_full(board_state) or get_outcome(board_state) != 0


def get_outcome(board_state):
    outcome = 0
    # Check for a winner in the rows, cols and diags
    vectors = get_all_vectors(board_state)
    for v in vectors:
        outcome = calculate_outcome(v)
        if outcome != 0:
            return outcome

    return outcome


def calculate_outcome(vector):
    """
    draw -> outcome = 0
    p1 win -> outcome = 1
    p2 win -> outcome = 2
    """
    s = set(vector)
    if len(s) != 1:
        return 0
    return s.pop()
