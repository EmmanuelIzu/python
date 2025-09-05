function checkInput(value, type){
    if(typeof value !== type){
        throw new TypeError(`expecting a ${type} but got a ${typeof value}`);
    }
}

class Car{
    constructor(make, brand, color, trim, door, title, engine){
        this.make = make;
        this.brand = brand;
        this.color = color;
        this.engine = engine;
        this.door = door;
        this.car_status = {
            car_trim : trim,
            car_title : title,
        }
    }

    change_engine = function (engine_type){
        this.engine = engine_type;
        return this;
    }

    change_status =  function (car_title,car_trim){
        this.car_status.car_title = car_title;
        this.car_status.car_trim = car_trim;
        return this;
    }

}


export default Car;

const new_car1 = new Car('Toyota','Camry','Grey','SE',4,'Clean','Gas');

new_car1.change_engine('diesel').change_status('SALVAGE','XLE');

console.log(new_car1);

cust