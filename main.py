#variable and functions
import random

def get_choices ():
    while True:
        player_choice = input('Enter a choice (rock, paper, scissors:)')
        choice_list = ['rock','paper','scissors']
        computer_choice = random.choice(choice_list)
        choices = {"player":player_choice, "computer":computer_choice}

        if computer_choice != player_choice:
            print('try again')
            continue
        break
    print("its a tie!")


get_choices()