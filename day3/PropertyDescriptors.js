a = 1; // a is a "property" in global dictionary
       // 1 is a property "value"

function Person(id, name) {
    // Property
    this.id = id; // we cannont make it read-only or hidden

    // lets create a read only property
    Object.defineProperty(this,
        "balance",
        { value: 10000, enumerable: true, configurable: false } // default enumerable & writable -> false
                                                                // configurable decides if later on someone can configure this property
        );
    
        // Let's create a "partially" hidden property
        Object.defineProperty(this,
            "mothersname",
            { value: "mimom", writable: true, enumerable: true, configurable: false } // making configurable false here will stop line no. 28 to get executed since it tries to redefine the property for which configurable is set as false (can use this for making private variables)
        );
}
let eich = new Person(1, "Brendan");
eich.id = 420;
eich.balance = 20000;
console.log(eich)
eich.mothersname = "amma";
console.log(eich.mothersname); // if you know its there u can access it

// Object.defineProperty(eich, "mothersname", {value: "amma", enumerable: true, writable: true, configurable: true})
Object.freeze(eich) // stop adding new properties (however can alter the properties)
eich.house = "HUGE";

console.log(eich)
// everything in JS is public, so always use property descriptors to restrict access
// eich.name.enumerable = false; // we can't access it -> they are only private in JS
