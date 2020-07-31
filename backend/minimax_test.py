import unittest
from minimax import generate_hard_AI_move, evaluate
from utils import is_game_over, is_board_full, count_free_space, get_all_vectors


class Test_generate_hard_AI_move(unittest.TestCase):

    def test_winning_move(self):
        board = [1, 2, 1, 1, 2, 0, 0, 0, 0]
        self.assertEqual(generate_hard_AI_move(board), 7)


class Test_evaluate(unittest.TestCase):

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
