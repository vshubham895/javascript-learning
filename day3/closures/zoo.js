function Zoo() {
    var tiger = "Zinda Hai";
    var lion = "zaroor marega";

    // define only, dont call
    function whoIsAlive() { // remember this has global context -> so it will not be destroyed
        console.log("tiger ", tiger) // tiger will be persisted in "closure" and the original tiger & lion variables will be destroyed
                                     // we can thus use closures for treating variables as private
    }

    // returning function address (pointer or reference)
    return whoIsAlive;

    // When a function call comes to an end, what happens to local var ?
    // They are destroyed - tiger and lion will be destroyed -> as in other languages, but here its not as used in the code.
}

var innerFn = new Zoo(); // It will return function pointer
innerFn();
// closure is scope (separate hidden dictionary) for handling conspiracies in the code