
/*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
 */


var util = require('util');

// Define the Person constructor
var Person = function(firstName) {
  this.firstName = firstName;
};

// Add a couple of methods to Person.prototype
Person.prototype.walk = function(){
  console.log("I am walking!");
};

Person.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName);
};

// Define the Student constructor
var Student = function(firstName, subject) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  Person.call(this, firstName);

  // Initialize our Student-specific properties
  this.subject = subject;
};

// ***Create a Student.prototype object that inherits from Person.prototype.***
// Note: A common error here is to use "new Person()" to create the
// Student.prototype. That's incorrect for several reasons, not least
// that we don't have anything to give Person for the "firstName"
// argument. The correct place to call Person is above, where we call
// it from Student.
Student.prototype = Object.create(Person.prototype); // See note below
// Student.prototype = Person.prototype;//DO NOT set reference to the same prototype object.
console.log("Student.prototype === Person.prototype ", Student.prototype === Person.prototype);

// Set the "constructor" property to refer to Student for 'new' keyword usage.
console.log("Student.prototype.constructor === Student", Student.prototype.constructor === Student);
Student.prototype.constructor = Student;
console.log("Student.prototype.constructor === Student", Student.prototype.constructor === Student);

// Replace the "sayHello" method
Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + ".");
};

// Add a "sayGoodBye" method
Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

// Example usage:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

//Student could fallback reference to Person available functions.
Person.prototype.personNewFun = function() {
	console.log('Pserson newFunc');
}
student1.personNewFun();

// Check that instanceof works correctly
console.log(student1 instanceof Person);  // true
console.log(student1 instanceof Student); // true
