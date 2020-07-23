import unittest
import numpy as np
from utils import is_board_full, count_free_space, get_all_vectors
from minimax import evaluate


class TestEvaluate(unittest.TestCase):

    def test_draw(self):
        board = [1, 2, 1, 1, 2, 2, 2, 1, 1]
        self.assertEqual(evaluate(board), 0)

    def test_player1_win_with_no_free_space(self):
        board = [1, 2, 1, 1, 2, 2, 1, 1, 2]
        self.assertEqual(evaluate(board), 1)

    def test_player1_win_with_free_space(self):
        board = [1, 2, 0, 1, 2, 0, 1, 0, 0]
        self.assertEqual(evaluate(board), 5)

    def test_player2_win_with_1_free_space(self):
        board = [1, 2, 1, 1, 2, 2, 0, 2, 1]
        self.assertEqual(evaluate(board), -2)

    def test_player2_win_with_2_free_space(self):
        board = [1, 1, 0, 0, 1, 0, 2, 2, 2]
        self.assertEqual(evaluate(board), -4)


if __name__ == "__main__":
    unittest.main()
