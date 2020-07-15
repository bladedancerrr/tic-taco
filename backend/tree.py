class Node(object):
    def __init__(self, value):
        self.value = value
        self.children = []

    def add_child(self, obj):
        self.children.append(obj)

    def generate_nodes(self, depth):
        pass


class Tree(object):
    def __init__(self, Node):
        self.root = Node
        self.__generate_tree()

    def __generate_tree(self, depth):
        self.root.__generate_nodes
