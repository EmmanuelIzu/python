class Person{
    construtor(FirstName,LastName,Age,Occupaton){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.Occupaton = Occupaton
    }

    Change_FirstName = (newFirst) => this.FirstName = newFirst;

    Change_LastName = (lastName) => this.LastName = lastName;

    
}
const newPerson = new Person('Emmanuel','Nkwocha',30,'Engineer');

const changename = function (newFirst){
    return newPerson.FirstName = newFirst;
}

console.log(changename('Ure'));