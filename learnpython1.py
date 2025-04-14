

class education:
    def edu(self):
        return "I have a masters degree"

class User(education):
    """This is a user class for this program, please  
    refer to the help file for more class description"""

    def __init__(self,f_name,l_name):
        self.first_name = f_name
        self.last_name = l_name
    
    def doit(self):
        print(first_name)
        print(last_name)
        
def bark():
    print("woof!")

if __name__ == "__main__":
    
    user1 = User('Emmanuel','Nkwocha')
    user1.doit()

