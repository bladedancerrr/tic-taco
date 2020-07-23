import numpy as np
from tree import Node, Tree
from utils import is_game_over, count_free_space


def minimax(self, board, player):

    pass


def evaluate(board):
    """
    At the end of the game
    Take the baord / click_state, evualuate the state of the board with the following equation.
    score = (1 + #free_space_left) * outcome_of_game,
    where outcome_of_game = 1 if player2 wins, 
    outcome_of_game = 1 for draw and
    outcome_of_game = 2 for loss
    """
    n_free_space = count_free_space(board_st)
