
function checkType(value, type){
    if (typeof value !== type){
        throw new TypeError(`Expecting a ${type}, but got a ${typeof value}`)
    }
}


class person {
    constructor(name,age,gender,Mstatus,Wstatus){
        checkType(name, "string");
        checkType(age, "number");
        checkType(gender, "string");
        checkType(Mstatus, "string");
        checkType(Wstatus, "string");

        this.name = name;
        this.age = age;
        this.gender = gender;
        this.status = {
            MaritalStatus : Mstatus,
            WorkStatus : Wstatus,
        }
    }

    changename(newname){
        checkType(newname, "string");
        this.name = newname;
    }

    changeage(newage){
        checkType(newage, "number");
        this.age = newage;
    }
}

let a = "Emmanuel";

for(let i = 0; i <= 10; i++){
    console.log(i);
}
