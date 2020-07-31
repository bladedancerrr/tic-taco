import numpy as np
from tree import Node, Tree
from utils import is_board_full, count_free_space, get_all_vectors, get_outcome, is_game_over


def generate_hard_AI_move(board_state):
    states = Tree(Node(board_state), full_tree=True)
    best_node, _ = minimax(states.root, maximizing_player=True)
    return best_node.move


def minimax(node, maximizing_player):
    if is_game_over(node.board):
        return (node, evaluate(node.board))

    best_node = None
    if maximizing_player:
        max_eval = -float("inf")
        for potential_node in node.children:
            _, eval = minimax(potential_node, False)
            if eval > max_eval:
                max_eval = eval
                best_node = potential_node
        return best_node, max_eval

    else:
        min_eval = float("inf")
        for potential_node in node.children:
            _, eval = minimax(potential_node, True)
            if eval < min_eval:
                min_eval = eval
                best_node = potential_node
        return best_node, min_eval


def evaluate(board_state):
    """
    At the end of the game
    Take the baord / click_state, evualuate the state of the board with the following equation.
    score = (1 + #free_space_left) * outcome_of_game,
    where outcome_of_game = 1 if player2 wins, 
    outcome_of_game = 1 for draw and
    outcome_of_game = -1 for loss
    """

    n_free_space = count_free_space(board_state)

    outcome = get_outcome(board_state)
    # Change outcome to -1 for the purpose of evaluation (If p1 wins, then it's a loss for the AI)
    if outcome == 1:
        outcome = -1
    elif outcome == 2:
        outcome = 1

    # This function should only be called when the game finished
    if not is_board_full(board_state) and outcome == 0:
        raise Exception(
            "evaluate called when the game have not been completed")

    return (1 + n_free_space) * outcome


if __name__ == "__main__":
    board = [1, 2, 1, 1, 2, 0, 0, 0, 0]
    # board = [1, 2, 1, 1, 2, 1, 2, 0, 0]
    generate_hard_AI_move(board)
