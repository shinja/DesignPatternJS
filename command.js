
function noop() {};

var carManager = {

    // purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    }
};

carManager.execute1 = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};

// //Another method from Phil,
//ES6 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
carManager.execute2 = function(name, ...args) {
    return (carManager[name] || noop)(args);
}

console.log(carManager.execute1('buyVehicle', 'mode1', 'id-1'));
console.log(carManager.execute2('buyVehicle', 'mode2', 'id-2'));
