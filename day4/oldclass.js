// Think of this as "constructor"
// JS 5 syntax
// class Person
// {
    function Person(id, name) {
        this.id = id;
        this.name = name;
        
        // closure variables
        var balance = 0;

        // private functions are possible
        function inner() {

        }

        // WASTEFUL! Goes into EVERY object
        // this.print = function() {
        //     console.log(`id=${this.id}, name=${this.name}`);
        // }
        Person.prototype.print = function() {
            console.log(`id=${this.id}, name=${this.name}`);
            balance += 100;
        }
    }
    // }
    var eich = new Person(1, "Brendan");
    console.log(eich);
    eich.print();
    console.log(eich.inner)// undefined