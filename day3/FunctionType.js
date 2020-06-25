// regular function
function add(a, b) { // function name is in lower/camel
    return a+b;
}

// defining this will "create" objects -> 2 actually : one immediate and second one prototype object
function Employee(id, name) { // function name is Proper case (pascal case)
    this.id = id;
    this.name = name;
    return this.id;
}
console.log(Employee(1, "BillG")); // WRONG usuage -> it will pollute global namespace
var billg = new Employee(1, "BillG"); // calling new will create one more object besides those 2 objects
// prototype -> this type of object is shared object