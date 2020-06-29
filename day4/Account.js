class Account {
    constructor(acno, name, bal) {
        this.acno = acno;
        this.name = name;
        this.bal = bal;
    }
    print() {
        console.log(`id=${this.id}, name=${this.name}, bal=${this.bal}`);
    }
}

class SavingsAccount extends Account {
    constructor(id, name, bal, minbal) {
        super(id, name, bal);
        this.minbal = minbal;
    }
    print() {
        super.print();
        console.log("SA print");
    }
}
