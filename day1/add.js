a_global = 10; // this is a global variable that will be stored in a dictionary(in heap) pointing from global area

var x=3; // this is a local variable that will be stored in dictonary(in heap) pointing from stack area from anonymous function frame
var y=4; // ---- do ----

function add(x,y) {
    console.log("Inside add function !");
    var c = x+y; // local variable to scope of function : add(...)
    console.log("arguments[0] : ",arguments[0]);
    console.log("arguments[1] : ",arguments[1]);
    return c;
}

var z = add(x,y);
console.log("Sum of "+x+" and "+y+" = ",z);

// utilising flexibility of the function to accept multiple arguments to make a generic add() function to add n numbers
function add_n() {
    var final_sum = 0;
    for(var i=0;i<arguments.length;i++) {
        final_sum+=arguments[i];
    }
    return final_sum;
}

var generic_sum = add_n(1,2,3,4,5);
console.log("Generic sum value : ",generic_sum);