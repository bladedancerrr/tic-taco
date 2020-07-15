class Node(object):
    def __init__(self, board_state):
        self.board = board_state
        self.children = []

    def add_child(self, board):
        self.children.append(board)

    def generate_nodes(self, depth, player_no):
        if depth == 0:
            return
        else:
            # Iterate through the blank states and add children
            for i, square in enumerate(self.board):
                if square == 0:
                    child = self.board.copy()
                    child[i] = player_no
                    self.add_child(child)
                    # Recursive call to generate the next level
                    self.generate_nodes(
                        depth=depth-1, player_no=1 if player_no == 2 else 2)

    def get_blank_count(self):
        total = 0
        for square in self.board:
            if square == 0:
                total += 1
        return total


class Tree(object):
    def __init__(self, Node):
        self.root = Node
        self.__generate_tree()

    def __generate_tree(self):
        # TODO:
        # Fixing the depth to 2 for now, the actual value is subject to change
        depth = 2 if self.root.get_blank_count() >= 2 else 1
        # TODO: The AI player is assumed to go second at the moment, change later
        ai_player = 2

        self.root.generate_nodes(depth, ai_player)


if __name__ == "__main__":
    n = Node([0, 1, 1, 2, 2, 0, 0, 0, 0])
    t = Tree(n)
    print(t)
