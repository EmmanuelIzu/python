class Myclass:

    name1 = "emmanuel"
    name2 = "Nkwocha"

    @classmethod
    def mth1(cls):
        return(cls.name1+cls.name2)


print (Myclass.mth1())
