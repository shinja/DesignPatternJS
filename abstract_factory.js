

// A constructor for defining new cars
function Car( options ) {

    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

//define AbstractVehicleFactory interface.
Car.prototype.drive = function() {
    console.log("car drive");
}
Car.prototype.breakDown = function() {
    console.log("car breakdown");
}

// A constructor for defining new trucks
function Truck( options) {

    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";

    //NOT defined in prototype
    this.drive = function() {
        console.log("truck drive");
    }

    this.breakDown = function() {
        console.log("truck breakdown");
    }
}

var abstractVehicleFactory = (function () {
    // Storage for our vehicle types
    var types = {};

    return {

        getVehicle: function ( type, customizations ) {
            var Vehicle = types[type];
            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle: function ( type, Vehicle ) {

            var proto = Vehicle.prototype;
            // only ALLOW register classes that fulfill the vehicle contract
            if ( proto.drive && proto.breakDown ) {
                types[type] = Vehicle;
            }
            return abstractVehicleFactory;
        }
    };
})();

abstractVehicleFactory.registerVehicle("car", Car)
.registerVehicle("truck", Truck); //register faild.

// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle( "car", {
            color: "lime green",
            state: "like new" } );
console.log(car);
// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle( "truck", {
            wheelSize: "medium",
            color: "neon yellow" } );
console.log(truck);//get null
