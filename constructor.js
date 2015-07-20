
var util = require('./util.js');

//=== Object Createion ===
// Each of the following options will create a new empty object:
var newObject = {};
// or
var newObject = Object.create( Object.prototype ); //extend from Object
var newObject2 = Object.create(null); //extend from null
// or
var newObject = new Object();

//Create object and assign properties
var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};
//define outside object  {} scope
protoRabbit.sleep = function (long) {
    console.log("The " + this.type + " rabbit sleep for '" + long + " sec.'");
}
//using defineProperty()
util.defineProp(protoRabbit, "pr1", "pr1");

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE");
killerRabbit.sleep(10);
util.defineProp(killerRabbit, "pr2", "pr2");
console.log(killerRabbit.pr1);

//append function after object created
protoRabbit.someFunc = function () {
    console.log(this.type, "some func");
}
killerRabbit.someFunc();

//dump all key in killerRabbit object.
util.dumpProp(killerRabbit);

//===Basic Constructors===
console.log('===================================');
function Car( model, year, miles ) {

    this.model = model;
    this.year = year;
    this.miles = miles;

    //redefined for each of the new objects created using the Car constructor
    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}
// Usage:
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log( civic.toString() );
console.log( mondeo.toString() );
util.dumpProp(civic);

function Car2( model, year, miles ) {

    this.model = model;
    this.year = year;
    this.miles = miles;
}
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car2.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

// Usage:
var civic = new Car2( "Honda Civic", 2009, 20000 );
var mondeo = new Car2( "Ford Mondeo", 2010, 5000 );

console.log( civic.toString() );
console.log( mondeo.toString() );
util.dumpProp(civic);
