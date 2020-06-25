g_var = 0;        // This is global

// Functions are capturing (closing over outer variables)
var balance = 0;  // Misconception that balance is "GLOBAL"

function deposit(amount) {
    balance += amount; // will be taken from closure
}

function withdraw(amount) {
    balance -= amount;
}

function print() {
    console.log(balance)
}

deposit(1000);
withdraw(300);
print();

// 1 stack frame cannot access values from other stack frame
