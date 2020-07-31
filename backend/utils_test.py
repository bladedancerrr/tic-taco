import unittest
from utils import is_game_over


class Test_is_game_over(unittest.TestCase):
    def test_player_2_win(self):
        board = [1, 2, 1, 1, 2, 0, 0, 2, 0]
        self.assertTrue(is_game_over(board))

    def test_player_1_win(self):
        board = [1, 2, 0, 1, 2, 0, 1, 0, 0]
        self.assertTrue(is_game_over(board))

    def test_draw(self):
        board = [1, 2, 1, 1, 2, 1, 2, 1, 2]
        self.assertTrue(is_game_over(board))

    def test_game_not_over(self):
        board = [1, 2, 0, 0, 0, 0, 0, 0, 0]
        self.assertFalse(is_game_over(board))


if __name__ == "__main__":
    unittest.main()
