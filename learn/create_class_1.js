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
    }

    change_status =  function (car_title,car_trim){
        this.car_status.car_title = car_title;
        this.car_status.car_trim = car_trim;
    }

}


export default Car;
