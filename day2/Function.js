// deep dive into functions

function funny() {
    //print
    console.log("Hehe...");
}

funny();
console.log(funny); // a function without () is its referene (address/pointer)
console.log(funny.toString());

gfn = function() { // global function
    console.log(`gfn ${this}`);
}
gfn();

var vfn = function() { // local function
    this.funny = "bunny"; // its overriding funny thats defined in global -> corrupting global namespace
    console.log(`vfn ${this}`);
}
vfn();

function lfn() { // local function
    this.bunny = "funny"; // WARNING! polluting globals
    console.log(`lfn ${this}`);
}
lfn();

// vfn() and lfn() also has global context since they are not attached or contained to any object
// all top level functions bind to global
// local function can be bound to global context so be careful while using the variables and assignemnts there

var person = {
    id: 1,
    name: "Brendan",
    c: `${this}`, // this is also in context of this object
    print: function() {
        console.log(`person ${this}`) // here the context is object itself and not global so safe.
        this.salary = 50000;
    }
}

person.print();
console.log(person.c);

// var and function "hoisting"
// Flag "hoisting", def are moved "up" (top of the scope)
// even before the execution reaches to them

// 1st def
function printMe() {
    console.log("me 0");
}
printMe();

// 2nd def
function printMe(msg) { // brought it up to beginning of scope
    console.log(`me ${msg}`);
}
printMe("Hello");
// No method overloading in JS -> since key names are stored in map and not possible to have 2 keys with same name

// 3rd def
function printMe(obj1, obj2) { // this is also hoisted
    console.log(`me ${obj1} & ${obj2}`);
}
printMe("hi","there");
// So, u can have only 1 instance of a function irrespective of number of times defined

// dontHoistMe = 3 -> we can't use it here since its a 'let' variable and it will not be hoisted so we can't use it like this.
var hoistme = 0; // this is also hoisted and moved to top scope
let dontHoistMe = 0; // this is not hoisted and will be defined 

// everything in JS is Object