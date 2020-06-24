// 1st way
var obj_1 = {} // object literal

// 2nd way
var bigB = {
    id:1,
    firstName: "Amitabh",
    lastName: "Bachhan",

    print: function() {
        // `template string` or back ticks -> anything inside this is expanded
        // ${expression} - string interpolation, value is substituted
        console.log(`My first name is ${this.firstName} and surname is  ${this.lastName} and my ancestor is ${this.ancestor}`);
        // console.log("My name is ", this.firstName, " and surname ", this.lastName);
    }
}
// console.log(bigB);
// // console.table(bigB);


var smallB = Object.create(bigB); // sets the prototype("parent") of the object
smallB.age = 45;
// console.log(smallB.age);
// console.log(smallB.lastName); // prototype chaining came into place -> it checks the properties in the parent(prototype)
//                               // prototype chaining is like base class override of Java, C#, etc.

bigB.print();
smallB.firstName = "Abhishek"; // overriding this will be used as this. object and what's not there will be picked from prototype chaining
smallB.print();

// undefined will come -> after looking whole chain in prototype chaining
// undefined will occur only for missing properties.

// ------- stopping/breaking chain of prototype --------
// var bigB = Object.create(null); // stopping the __proto__ of bigB and setting it to null so it will not come and chaining will stop there.
// bigB.firstName = "Amitabh";
// bigB.lastName = "Bachchan";
// bigB.print = function() {
//     console.log(`My name is ${this.firstName} ${this.lastName}`)
// }
// var smallB = Object.create(bigB); // sets the prototype("parent") of the object
// console.log(smallB.toString()); // this will cause  error -> toString() not a function
// ------------------------------------------------------

// 3rd generation
bayB = Object.create(smallB);
bayB.firstName = "Aradhya";
bayB.print();

var shweta = Object.create(bigB);
bigB.job = "Actor"; // bigB is a shared object so same will be reflected in all the usuages
console.log(shweta.lastName);
// console.log(shweta.a.b) // error -> can't read property of undefined
console.log(`Shweta's job : ${shweta.job}`);
console.log(`Smallb's job : ${smallB.job}`);

// 3rd way
var silly = new Object(); // DON'T do this.
var literal = {}; // DO THIS instead

console.log(silly);

// Java5cript data types (do NOT create them like this)
// JS is built in 10 days...
var n = new Number(); // var n = 0; -> better
var b = new Boolean();
var s = new String();
var o = new Object();
var a = new Array();