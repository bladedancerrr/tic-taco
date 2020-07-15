from tree import *
import numpy as np
# returns the square id of the move AI is going to make


def generate_AI_move(click_state):
    pass


def evaluate(board_state, player):
    """
    player - taco / burrito
    """
    opponent = 1 if player == 2 else 1
    blank = 0
    values = {player: 2, opponent: -1, blank: 1}

    # Keep track of the score of rows, col and diag separately
    np_board = np.array(board_state)
    scores = {}
    scores["rows"] = evalRows(get_rows(np_board), values)
    scores["cols"] = evalColumns(get_cols(np_board), values)
    scores["diags"] = evalDiags(get_diags(np_board), values)

    print(scores)


def get_rows(np_board):
    rows = []
    for i in (0, 3, 6):
        row = list(np_board[[i, i+1, i+2]])
        rows.append(row)
    return rows


def get_cols(np_board):
    cols = []
    for i in (0, 1, 2):
        col = list(np_board[[i, i+3, i+6]])
        cols.append(col)
    return cols


def get_diags(np_board):
    diag1 = list(np_board[[0, 4, 8]])
    diag2 = list(np_board[[2, 4, 6]])
    return [diag1, diag2]


def evalColumns(columns, values):
    # return evalution of the columns
    print(values)
    evals = []
    for column in columns:
        currEval = 0
        for val in column:
            currEval += values[val]
        evals.append(currEval)
    return evals


def evalRows(rows, values):
    # return evaluation of the rows
    evals = []
    for row in rows:
        currEval = 0
        for val in row:
            currEval += values[val]
        evals.append(currEval)
    return evals


def evalDiags(diags, values):
    evals = []
    for diag in diags:
        currEval = 0
        for val in diag:
            currEval += values[val]
        evals.append(currEval)
    return evals


if __name__ == "__main__":
    evaluate([1, 0, 0, 0, 0, 0, 0, 0, 0], 1)
