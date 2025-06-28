
def my_decor(func):
    """This is a decorator """
    def add_func():
        print("Do this first")
        func()
        print("Do this later")
    return add_func


@my_decor
def say_hello():
    print("hello here")


@my_decor
def say_Hi():
    print("Hi here")


say_hello()
say_Hi()



