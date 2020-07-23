def is_game_over(board_state):
    for square in board_state:
        if square == 0:
            return False
    return True


def count_free_space(board_state):
    total = 0
    for square in board_state:
        if square == 0:
            total += 1
    return total
