def do():
    num1 = 0

    def incr():
        
        def incr1():
            nonlocal num1
            num1+=1
            return num1
        return incr1()
    return incr()+1
print(do())