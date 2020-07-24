from minimax_naive import generate_easy_AI_move
from minimax import generate_hard_AI_move


class AI():
    difficulty = None

    @staticmethod
    def set_difficulty(difficulty):
        AI.difficulty = difficulty
        print("difficulty of AI is", AI.difficulty)

    @staticmethod
    def generate_move(click_state):
        if AI.difficulty == "AI-easy":
            return str(generate_easy_AI_move(click_state))
        else:
            return str(generate_hard_AI_move(click_state))
