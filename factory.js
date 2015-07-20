
// A constructor for defining new cars
function Car( options ) {

    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

// A constructor for defining new trucks
function Truck( options){

    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}


//===Factory Sample===
// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car; //prototype property
// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {

    switch(options.vehicleType){
        case "car":
        this.vehicleClass = Car; //object property
        break;
        case "truck":
        this.vehicleClass = Truck;
        break;
        //**defaults to VehicleFactory.prototype.vehicleClass (Car)**
    }

    /*
        If NOT math any vehicleType above, will using prototype.vehicleClass as the constructor.
    */
    return new this.vehicleClass( options );
};

// Create an instance(object) of our factory that makes cars
var carFactory = new VehicleFactory();
console.log("carFactory:" + carFactory, typeof carFactory);
var car = carFactory.createVehicle( {
    vehicleType: "truck",
    color: "yellow",
    doors: 6
} );
console.log(carFactory.vehicleClass);
console.log(VehicleFactory.prototype.vehicleClass);

console.log(car);
console.log(car instanceof  Truck);
console.log(car instanceof  Car);
