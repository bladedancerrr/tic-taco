import numpy as np
from tree import Node, Tree
from utils import is_board_full, count_free_space, get_all_vectors


def generate_hard_AI_move(board_state):
    pass


def minimax(node, depth, maximising_player):
    pass


def evaluate(board_state):
    """
    At the end of the game
    Take the baord / click_state, evualuate the state of the board with the following equation.
    score = (1 + #free_space_left) * outcome_of_game,
    where outcome_of_game = 1 if player2 wins, 
    outcome_of_game = 1 for draw and
    outcome_of_game = 2 for loss
    """

    n_free_space = count_free_space(board_state)

    return (1 + n_free_space) * get_outcome(board_state)


def get_outcome(board_state):
    outcome = 0
    # Check for a winner in the rows, cols and diags
    vectors = get_all_vectors(board_state)
    for v in vectors:
        outcome = calculate_outcome(v)
        if outcome != 0:
            return outcome

    # This function should only be called when the game finished
    if not is_board_full(board_state) and outcome == 0:
        raise Exception(
            "evaluate called when the game have not been completed")

    return outcome


def calculate_outcome(vector):
    """
    draw -> outcome = 0
    p1 win -> outcome = 1
    p2 win -> outcome = -1
    """
    s = set(vector)
    if len(s) != 1:
        return 0
    return 1 if 1 in s else -1


if __name__ == "__main__":
    print(evaluate([1, 2, 1, 1, 2, 2, 2, 1, 1]))
