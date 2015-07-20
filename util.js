
//return(export) an Object.
module.exports = {

    defineProp: function ( obj, key, value ){
        var config = {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
        };
        Object.defineProperty( obj, key, config );
    },

    dumpProp: function(obj) {
        for (var map in obj) {
            if (obj.hasOwnProperty(map)) {
                console.log("hasOwnProperty [" + map + "]")
            } else {
                console.log("extend from SuperClass [" + map + "]")
            }
        }
    }
};
