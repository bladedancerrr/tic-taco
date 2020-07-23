import unittest
from minimax_naive import get_row, get_col, get_diag
import numpy as np

player1 = 1
player2 = 2
opponent1 = 1
opponent2 = 2
empty = 0

values_1 = {player1: 2, opponent2: -1, empty: 1}
values_2 = {player2: 2, opponent1: -1, empty: 1}


class TestGetRow(unittest.TestCase):

    def test_row_zero(self):
        board = [1, 0, 0, 0, 0, 0, 0, 0, 0]
        square_id = 0
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_row(np_board, square_id), [1, 0, 0]))

    def test_row_one(self):
        board = [0, 0, 0, 0, 1, 0, 0, 0, 0]
        square_id = 4
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_row(np_board, square_id), [0, 1, 0]))

    def test_row_second(self):
        board = [0, 0, 0, 0, 0, 0, 0, 0, 1]
        square_id = 8
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_row(np_board, square_id), [0, 0, 1]))


class TestGetCol(unittest.TestCase):
    def test_col_zero(self):
        board = [1, 0, 0, 0, 0, 0, 0, 0, 0]
        square_id = 0
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_col(np_board, square_id), [1, 0, 0]))

    def test_col_one(self):
        board = [0, 0, 0, 0, 0, 1, 0, 0, 0]
        square_id = 5
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_col(np_board, square_id), [0, 1, 0]))

    def test_col_two(self):
        board = [0, 1, 0, 0, 2, 0, 0, 1, 0]
        square_id = 7
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_col(np_board, square_id), [1, 2, 1]))


class TestDiag(unittest.TestCase):
    def test_diag_one(self):
        board = [1, 0, 0, 0, 2, 0, 0, 0, 1]
        square_id = 0
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_diag(np_board, square_id), [1, 2, 1]))

    def test_diag_two(self):
        board = [0, 0, 1, 0, 2, 0, 1, 0, 1]
        square_id = 6
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_diag(np_board, square_id), [1, 2, 1]))

    def test_not_on_diag(self):
        board = [0, 0, 1, 0, 2, 0, 1, 2, 1]
        square_id = 7
        np_board = np.array(board).reshape(3, 3)
        self.assertTrue(np.array_equal(
            get_diag(np_board, square_id), [-1, -1, -1]))

# class TestEvalColumns(unittest.TestCase):
#     def test_zeros(self):
#         self.assertEqual(evalArray([[empty]*3]*3, values_1), [3, 3, 3])

#     def test_human_first(self):
#         rows = [[opponent1, empty, empty],
#                 [empty, player2, empty],
#                 [player2, empty, opponent1]]
#         self.assertEqual(evalArray(rows, values_2), [1, 4, 2])

#     def test_AI_first(self):
#         rows = [[opponent2, opponent2, empty],
#                 [empty, player1, player1],
#                 [player1, empty, opponent2]]
#         self.assertEqual(evalArray(rows, values_1), [-1, 5, 2])


# class TestEvalDiagonals(unittest.TestCase):
#     def test_zeros(self):
#         self.assertEqual(evalArray([[empty]*3]*2, values_1), [3, 3])

#     def test_human_first(self):
#         diags = [[opponent1, empty, empty],
#                  [empty, player2, empty]]
#         self.assertEqual(evalArray(diags, values_2), [1, 4])

#     def test_AI_first(self):
#         diags = [[opponent2, opponent2, empty],
#                  [empty, player1, player1]]
#         self.assertEqual(evalArray(diags, values_1), [-1, 5])


# class TestEvaluate(unittest.TestCase):
#     def test_evaluate(self):
#         board_state = [player1, empty, opponent2,
#                        empty, opponent2, empty,
#                        player1, opponent2, player1]
#         self.assertEqual(evaluate(board_state, player1), {
#                          "rows": [2, 1, 3], "cols": [5, -1, 2], "diags": [3, 0]})
if __name__ == '__main__':
    unittest.main()
