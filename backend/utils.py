def is_game_over(board_state):
    for square in board_state:
        if square == 0:
            return False
    return True
