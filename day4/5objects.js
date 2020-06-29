var num = 3.4;
var nane = "Eich";
var done = true;
var person = { id: 1, name: "Eich" }; // {} -> object
var arr = []; // [] -> array
// var myarr = new Array(10); // DIScouraged

// Use it like a normal array with arr[0] syntax
arr = [1, 2, 3, 4, 5]; // Not array, they are linked list
console.log(list[4])

// Use it like a linked list
list = [1, "Bottle", true, 12.3, {id:1 , name: "Eich"}];
console.log(list);


// Push and pop like stack
list.push("i am the last");
console.log(list);
list.pop();
console.log(list);

// Shift/unshift like a Queue
list.shift(); // drop the first one (like queue)
console.log(list);
list.shift();
console.log(list);

// JS -> single threaded language