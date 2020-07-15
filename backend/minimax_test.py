import unittest
from minimax import *

player1 = 1
player2 = 2
opponent1 = 1
opponent2 = 2
empty = 0

values_1 = {player1: 2, opponent2: -1, empty: 1}
values_2 = {player2: 2, opponent1: -1, empty: 1}


class TestEvalColumn(unittest.TestCase):

    def test_zeros(self):
        self.assertEqual(evalArray([[empty]*3]*3, values_1), [3, 3, 3])

    def test_random_state_0(self):
        # player first
        columns = [[player1, empty, opponent2],
                   [empty, opponent2, empty],
                   [empty, empty, player1]]
        self.assertEqual(evalArray(columns, values_1), [2, 1, 4])

    def test_random_state_1(self):
        # player second
        columns = [[opponent1, empty, empty], [
            empty, player2, empty],
            [player2, empty, opponent1]]
        self.assertEqual(evalArray(columns, values_2), [1, 4, 2])

    def test_random_state_2(self):
        # player first
        columns = [[player1, empty, opponent2],
                   [opponent2, opponent2, player1],
                   [empty, empty, player1]]
        self.assertEqual(evalArray(columns, values_1), [2, 0, 4])

    def test_random_state_3(self):
        # player second
        columns = [[player2, opponent1, opponent1], [
            empty, opponent1, player2], [player2, empty, opponent1]]
        self.assertEqual(evalArray(columns, values_2), [0, 2, 2])


class TestEvalColumns(unittest.TestCase):
    def test_zeros(self):
        self.assertEqual(evalArray([[empty]*3]*3, values_1), [3, 3, 3])

    def test_human_first(self):
        rows = [[opponent1, empty, empty],
                [empty, player2, empty],
                [player2, empty, opponent1]]
        self.assertEqual(evalArray(rows, values_2), [1, 4, 2])

    def test_AI_first(self):
        rows = [[opponent2, opponent2, empty],
                [empty, player1, player1],
                [player1, empty, opponent2]]
        self.assertEqual(evalArray(rows, values_1), [-1, 5, 2])


class TestEvalDiagonals(unittest.TestCase):
    def test_zeros(self):
        self.assertEqual(evalArray([[empty]*3]*2, values_1), [3, 3])

    def test_human_first(self):
        diags = [[opponent1, empty, empty],
                 [empty, player2, empty]]
        self.assertEqual(evalArray(diags, values_2), [1, 4])

    def test_AI_first(self):
        diags = [[opponent2, opponent2, empty],
                 [empty, player1, player1]]
        self.assertEqual(evalArray(diags, values_1), [-1, 5])


class TestEvaluate(unittest.TestCase):
    def test_evaluate(self):
        board_state = [player1, empty, opponent2,
                       empty, opponent2, empty,
                       player1, opponent2, player1]
        self.assertEqual(evaluate(board_state, player1), {
                         "rows": [2, 1, 3], "cols": [5, -1, 2], "diags": [3, 0]})


if __name__ == '__main__':
    unittest.main()
