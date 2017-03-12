import random
def print_board(board):
    print(board[0], board[1], board[2])
    print(board[3], board[4], board[5])
    print(board[6], board[7], board[8])


def user_input_pos():
    position = ""
    while position not in ["1", "2", "3", "4", "5", "6", "7", "8", "9"] or not is_free(int(position), board):
        position = input("input position on the board (1-9), choose free positions\n")
    position = int(position) - 1
    return position


def is_free(p, board):
    p = int(p)
    p -= 1
    if board[p] == ".":
        return True
    if board[p] == "X" or board[p] == "O":
        return False


def user_marker(m):
    li = ['X', "O"]
    if m != 'X' and m != "O":
        m = random.choice(li)
        print("-----first goes '%s'-----" % m)

    elif m == "X":
        m = "O"
        print("------'O' turn------")
    elif m == "O":
        m = "X"
        print("------'X' turn------")
    return m


def place_marker(board, position, marker):
    board[position] = marker


def check_if_win(marker):
    if board[0] == marker and board[1] == marker and board[2] == marker or board[3] == marker and board[4] == marker and \
                    board[5] == marker or board[6] == marker and board[7] == marker and board[8] == marker or board[
        0] == marker and board[4] == marker and board[8] == marker or board[0] == marker and board[3] == marker and \
                    board[6] == marker or board[1] == marker and board[4] == marker and board[7] == marker or board[
        2] == marker and board[5] == marker and board[8] == marker or board[0] == marker and board[1] == marker and \
                    board[2] == marker or board[2] == marker and board[4] == marker and board[6] == marker:
        print("CONGRATULATIONS -- %s -- WIN" % marker)
        return True
    n = 0
    for i in board:
        if i == '.':
            n += 1
            if n == 0:
                print("_____It's draw_____")
                return True


def replay():
    answer = ""
    while answer not in 'y n'.split():
        answer = input("One more time?? Y/N \n").lower()
        if answer == "y":

            return True
        if answer == "n":
            return False

while True:
    board = [".", ".", ".",
             ".", ".", ".",
             ".", ".", "."]
    marker = ""
    print("\n NEW GAME")
    while True:
        marker = user_marker(marker)
        place_marker(board, user_input_pos(), marker)
        print_board(board)
        if check_if_win(marker):
            break
    if not replay():
        break
