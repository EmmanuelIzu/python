class firstclass():
    class_variable =  "class variable"

    def __init__(self, instance_variable):
        self.instance_variable = instance_variable
     
    def instance_mathod(self):
        return f"I called {self.class_variable and self.instance_variable}"
    
    @classmethod
    def class_method(cls,me):
        cls.me = me
        return f"I called {cls.class_variable} and {cls.me}"

    @staticmethod
    def static_method():
        return "this is a static method"
    

mycall = firstclass("instance variable")

print(mycall.class_method("me"))
print(mycall.instance_mathod())
print(mycall.static_method())