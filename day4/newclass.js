// JavaScript 5 (aka ECMAScript 5) uses functions to create objects
// Javascript is implementation of ECMA Script (a standard)
// JS 6 (ECMAScript 2015) introduces a fake "class"

// JS6 syntax
class Person { // just syntax change, it's still like function object to create objects
    
    // This is NOT local var/field
    // It's static


    // can't have local/private funciton and closures -> difference
    // function inner() {
    // 
    // }
    // balance = 0;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // Equivalent of Person.prototype.print...
    print() { // it itself goes into proototype
        console.log(`id=${this.id}, name=${this.name}`);
        // balance += 100; -> no support for closure
    }
}

var eich = new Person(1, "Brendan");
console.log(eich);
eich.print();