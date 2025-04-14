# this is a readme file

I will be updating information on my python code here

#DICTIONARIES
 eg. dict = {'name': 'beau', 'color': 'blue'}

 there is a key value pair, 
 name = beau and 
 color = blue


LIBRARIES:

import random = import random library
practice F string

# COMMANDS
isinstance
type  

#DATA TYPES
complex for complex numbers
int for integers
float for floating numbers
str for strings
bool for booleans
list for lists
tuple for tuples
range for ranges
dict for dictionaries
set for sets
frozenset for frozensets


Arithmetic Operators:
Used for performing mathematical calculations.
+ (Addition)
- (Subtraction)
* (Multiplication)
/ (Division)
% (Modulus - remainder of division)
// (Floor division - quotient without remainder)
** (Exponentiation)
Assignment Operators:
Used to assign values to variables.
= (Assign)
+= (Add and assign)
-= (Subtract and assign)
*= (Multiply and assign)
/= (Divide and assign)
%= (Modulus and assign)
//= (Floor divide and assign)
**= (Exponentiate and assign)
:= (Walrus operator - assign and return in an expression)
Comparison Operators:
Used to compare values.
== (Equal to)
!= (Not equal to)
> (Greater than)
< (Less than)
>= (Greater than or equal to)
<= (Less than or equal to)
Logical Operators:
Used to combine or modify boolean expressions.
and (Returns True if both operands are true)
or (Returns True if at least one operand is true)
not (Returns the opposite of the operand's boolean value)
Identity Operators:
Used to check if two variables refer to the same object in memory.
is (Returns True if both operands are the same object)
is not (Returns True if both operands are not the same object)
Membership Operators:
Used to check if a value is present in a sequence (e.g., string, list, tuple).
in (Returns True if the value is found in the sequence)
not in (Returns True if the value is not found in the sequence)
Bitwise Operators:
Used to perform operations on individual bits of integers.
& (AND)
| (OR)
^ (XOR)
~ (NOT)
<< (Left shift)
>> (Right shift) 

# NOTE
escape double quote with back slash character "\" - means escape

"\n" means new line

to escape a back slash, you have to escape back slashes too

All numbers are true except 0

A string will always be true unless it is empty

"+= command on will extend a list as an extend function will.

# "any" command, is used to check if any value is true.

        check = any([1,0,0])

        print(check)

# "all" command, is used to check if all values are true.

        check = all([1,0,0])

        print(check)

# COMPLEX

        num1 = complex(2,3)

        print(num1.imag,num1.real)

# Enums

        used to represent constants, recommend using upper case letters for members

# Difference between a Dictionary and a SET

dictionaries have key value pairs
example dict1 = {'emmanuel':1, 'izu':2, 'nkwocha':3}

while a set has no key value pair
example set1 = {'emmanuel','izu','nkwocha'}

# THE NONLOCAL COMMAND
The non local is used to call a variable in a nexted function.

def do():
    num1 = 0

    def incr():
        nonlocal num1
        num1+=1
        return num1
    
    return incr()

print(do())

#  OBJECTS

An object is an instance of a class




# SPLIT METHOD

full_name = "Emmanuel Izuchukwu Nkwocha"

splitname = full_name.split()

print(splitname[1])

# DOC STRING

written using three double quote, example below is a class with DOC string, called using the help function.

class User:
    """This is a user class for this program, please 
    refer to the help file for more class description"""

    def __init__(self):
        self.first_name = 'Emmanuel'
        self.last_name ='Nkwocha'

user1 = User()
print(user1.first_name)
print(user1.last_name)

help(User)


# Example class calling fields from an Enum class
from enum import Enum

class hold (Enum):
    emmanuel = 1
    Nkwocha = 2

class User:
    """This is a user class for this program, please 
    refer to the help file for more class description"""

    def __init__(self):
        self.first_name = 'Emmanuel'
        self.last_name ='Nkwocha'
        self.number = hold.emmanuel.value

user1 = User()
print(user1.first_name)
print(user1.last_name)
print(user1.number)

# Inheritance.
The User class is inheriting from the education class

class education:
    def edu(self):
        return "I have a masters degree"

class User(education):
    """This is a user class for this program, please 
    refer to the help file for more class description"""

    def __init__(self):
        self.first_name = 'Emmanuel'
        self.last_name ='Nkwocha'


user1 = User()
description = f"My name is {user1.first_name} {user1.last_name}, and {user1.edu()}"

print(description)


# Modules

if __name__ == "__main__": this ensures a particular script is called only when run locally.

# Importing a module from a LIB.

first you need to create the __init__.py file in the library before that can work.

# STANDARD LIBRARY
example math and json


# Lambda Functions.
        lambda argurments: expression
        # map
        The map() function in Python is used to apply a given function to each item of an iterable (like a list, tuple, or set) and returns an iterator that yields the results. It provides a concise way to perform operations on sequences without using explicit loops. The map() function takes two arguments: the function to apply and the iterable to process. 

def square(x):
  return x * x

numbers = [1, 2, 3, 4, 5]
squared_numbers = map(square, numbers)

print(list(squared_numbers))
# Expected output: [1, 4, 9, 16, 25]

below is same code solved with lambda

lst1=[1,2,3,4,5]

double_them = list(map(lambda x : x * x, lst1))

print(double_them)

        # filter 
        he filter() function in Python is used to construct an iterator from elements of an iterable for which a function returns true. It essentially filters a sequence based on a given condition. The filter() function takes two arguments: a function and an iterable. The function is applied to each item in the iterable, and if the function returns True, the item is included in the resulting iterator. If the function returns False, the item is excluded. 

def is_even(x):
    return x % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = filter(is_even, numbers)
print(list(even_numbers))
# Expected output: [2, 4, 6]

below is same code with lambda

lst1=[1,2,3,4,5,6]

filter_them = list(filter(lambda x : x % 2 == 0, lst1))

print(filter_them)



# RECURSION
