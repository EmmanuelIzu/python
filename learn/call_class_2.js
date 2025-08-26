import Car from './create_class_1.js';
import ServiceCar from './class_extend_4.js';

const new_car1 = new Car('Toyota','Camry','Grey','SE',4,'Clean','Gas');

console.log(new_car1);

const new_car2 = new Car('Honda','CRV','Blue','XLE',2,'Clean','Gas');

console.log(new_car2);


const ServiceCheck = new ServiceCar('toyota','camry','grey','SE',4,'clean',2,true) 

console.log(ServiceCheck.engine);
ServiceCheck.change_engine(5);
console.log(ServiceCheck.engine);


console.log(new_car1.engine);

//Template Litterals

const content = `
    <h1>This Is My ${new_car1.make} Dealership</h1>
    <div class = "template">
        <h3><ul>
            <li>Brand:${new_car1.brand}</li>
            <li>Color:${new_car1.color}</li>
            <li>Trim:${new_car1.car_status.car_trim}</li>
            <li>Door:${new_car1.door}</li>
            <li>title:${new_car1.car_status.car_title}</li>
            <li>engine:${new_car1.engine}</li>
        </ul></h3>
    </div>
`
document.body.innerHTML = content;
document.getElementsByClassName("template")[0].classList.add("template1")

// Template Litterals