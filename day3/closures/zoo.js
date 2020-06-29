function Zoo() {
    var tiger = "Zinda Hai";
    var lion = "zaroor marega";
    // this.elephant = "Haathi"; // GOING into GLOBAL

    // define only, dont call
    // tiger is not local to 'cage'
    // tiger is local to 'zoo'
    // tiger is 'captured' in cage(closure)
    function cage() { // remember this has global context -> so it will not be destroyed
        // this.animal = tiger // GOIING into GLOBAL
        console.log("tiger ", tiger) // tiger will be persisted in "closure" and the original tiger & lion variables will be destroyed
                                     // we can thus use closures for treating variables as private
    }

    // returning function address (pointer or reference)
    return cage;

    // When a function call comes to an end, what happens to local var ?
    // They are destroyed - tiger and lion will be destroyed -> as in other languages, but here its not as used in the code.
}

var whoIsAlive = new Zoo(); // It will return function pointer
whoIsAlive();
// closure is scope (separate hidden dictionary) for handling conspiracies in the code
// variables in closure directs to the same variable as defined in the outside closure
