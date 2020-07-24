import numpy as np


class Node(object):
    def __init__(self, board_state):
        self.board = board_state
        self.children = []
        self.move = None

    def add_child(self, board):
        self.children.append(board)

    def generate_nodes(self, depth, player_no):
        if depth == 0:
            return
        else:
            # Iterate through the blank states and add children
            for i, square in enumerate(self.board):
                if square == 0:

                    child = Node(self.board.copy())
                    child.board[i] = player_no
                    child.move = i
                    self.add_child(child)
                    # Recursive call to generate the next level
                    child.generate_nodes(
                        depth=depth-1, player_no=1 if player_no == 2 else 2)

    def get_blank_count(self):
        total = 0
        for square in self.board:
            if square == 0:
                total += 1
        return total

    def __str__(self):
        return np.array_str(np.array(self.board).reshape(3, 3))


class Tree(object):
    def __init__(self, Node, max_depth=2, full_tree=False):
        self.root = Node
        self.__generate_tree(depth=max_depth, full_tree=full_tree)

    def __generate_tree(self, depth=2, full_tree=False):
        # TODO:
        # Fixing the depth to 2 for now, the actual value is subject to change
        max_depth = depth if self.root.get_blank_count() >= depth else 1
        # TODO: The AI player is assumed to go second at the moment, change later
        ai_player = 2

        # If a full tree were to be generated, set the depth to 9 (which is the max depth for tic tac toe)
        if full_tree:
            max_depth = 9
        self.root.generate_nodes(max_depth, ai_player)


if __name__ == "__main__":
    # n = Node([0, 1, 1, 2, 2, 0, 0, 0, 0])
    n = Node([0, 1, 0, 0, 0, 0, 0, 0, 0])
    t = Tree(n, full_tree=True)
    print()
