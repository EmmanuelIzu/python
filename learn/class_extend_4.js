import Car from './create_class_1.js';

class ServiceCar extends Car{

    constructor(make, brand, color, trim, door, title, engine, service){
        super(make, brand, color, trim, door, title, engine);
        this.service = service
    }

    check_Service(){
        if(this.service){
            console.log("The service is current")
        }
        else{
            console.log('The car needs to be service')
        }
    }

    change_engine = function(engine_type){
        this.engine = engine_type;
        if (engine_type > 4){
            console.log("This car is hybrid");
        }
        else{
            console.log("This car is pure gas");
        }
    }


}

export default ServiceCar;
