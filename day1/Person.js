// Put, get, remove -> operations on dict. are supported.
var Person_object = {  // Object literal -> literally created object
    id: 1,
    name: "Brendan", // no need to mention name as "name"
    print: function() { console.log("Hi, I am ",this.name) } // value can be a function
}

console.log(Person_object)
console.log(Person_object.print.toString())
Person_object.print()

Person_object.salary = 30000 // dynamically adding key-value
Person_object[404] = "not found" 

console.log(Person_object)

delete Person_object.id // dynamically deleting attributes
console.log(Person_object);

function functionAsKey() {
    console.log("hi i am a dummy function..");
}
Person_object[functionAsKey] = function() { console.log("I am function value of a function key...") } // giving function as key in object that will be
                                                                                         // stoed in string form
console.log(Person_object)
Person_object[functionAsKey]() // calling function of the key that was stored as function itslef
// undefined ~ null in javascript
// console.log(undefined.xyz) // TypeError: Cannot read property 'xyz' of undefined

// Person_object.true = false
// console.log(Person_object)

Person_object[true] = true
Person_object[false] = false
console.log(Person_object)

console.log(Object.keys(Person_object))

// map retains the key type
var m = new Map()
m.set(1,'one');
m.set(2,"two");
m.set(function (){ console.log("key") },function () { console.log("inside a map key") });
m.set(true,"this key is of boolean type")
console.log("KEYS : ",m.keys())
console.log("VALUES : ",m.values())
