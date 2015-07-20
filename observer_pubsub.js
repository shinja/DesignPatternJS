
var jsdom = require('jsdom');
var window = jsdom.jsdom().defaultView;
var $ = require('jquery')(window);

console.log($.fn.jquery);


//===Publish/Subscribe Implementations with jQuery===
var el = {};
$( el ).on( "/login", function( event, data ){

    console.log(Object.getPrototypeOf(arguments), Object.getPrototypeOf([]));
    // console.log(arguments.slice(1)); // error
    console.log([].slice.call(arguments, "1"));
    // console.log(event);
    console.log(data);
    // console.log(arguments);
});

$(el).trigger( "/login", [{username:"test", userData:"test"}] );
