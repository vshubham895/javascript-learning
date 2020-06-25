// most commonly used way of creating objects (4th way of creating objects)
// class Employee {
function Employee(id, name) { // defining a class (implicitly)
    // Fields : Instance members go into objects
    this.id = id;
    this.name = name;

    // Class level variables : Function object members go into Employee
    Employee.count++;

    // // Stupid way of writing member functions : Instance functions got into every instance (wasteful)
    // this.print = function() {
    //     console.log(`id = ${this.id}, name = ${this.name}`);
    // }

}

// Class level variables : Function object members go into Employee
Employee.count = 0; // initial employee count

// Prototpes are usually defined outside : because at every object instantiation prototype assignment also happens again and again (redundant work however the values are same, but it will not execute again and again)
// Correct way : Prototype functions are added only once
Employee.prototype.print_details = function() {
    console.log(`id = ${this.id}, name = ${this.name}`);
}

// also if we change base salary it will persist that in all objects, if its inside the Employee class then it will reset again during any object instantiation
// Shared variables b/w objects : Prototype members go into shared prototype
Employee.prototype.basesalary = 50000.00;


// object instantiation
var eich = new Employee(1, "Brendan");
// eich.print(); // called from object itself
eich.print_details(); // called from prototpe's object
// Employee.prototype <=> eich.__proto__
// child's father -> prototype
// prototype's father -> object
// class(Employee)'s father -> Function Object
// Function Object's father -> Object
console.log(eich.basesalary); // shared
console.log(eich.count); // undefined
console.log(eich.__proto__);
Employee.count++;
console.log(Employee.count); // pure static
console.log(++eich.__proto__.constructor.count) // it will work since constructor will point to the parent of itself(that will be Employee in this case)
// }

// --------------------------------------------------
// Functions with ProperCase are like construtors
// DONT call them like normal functions

// Prototype is shared base
// Put ALL members functions in prototype
// NEVER put member functions in this (wasteful)

// Move .prototype assignments OUTSIDE the function
// SO that they dont get re-assigned everytime and obj is created

// Keep object fields assignments inside
// member variables this.member = ...
// --------------------------------------------------