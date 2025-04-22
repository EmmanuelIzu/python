class anything1:
    def call(self):
        return "this is a call"

class anything2:
    def call(self):
         return "this is a call"



def shout(calling):
    print(calling.call())


a = anything1()
b = anything2()

shout(a)
shout(b)