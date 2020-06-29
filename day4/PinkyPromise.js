function giveMeMoney(resolve, reject) {
    
}

function gotMyMoney(cash) {
    console.log(`Cash received: ${cash}`)
}

function notEnoughBalance(balance) {
    console.log(`Available balance: ${balance}`)
}

function whatHappened(exception) {
    console.log(`Exception occured: ${exception}`)
}

var p = new Promise(giveMeMoney);

// roam around
// read some brochuers
// have water
// LIKE multithreading because it allows you to do other things before promise is ready

// IF cashier is STILL not ready, you will wait
p.then(gotMyMoney, notEnoughBalance).catch(whatHappened);
// p.then(gotMyMoney(3), notEnoughBalance(33)).catch(whatHappened('Something wrong'));

// async function withdraw(money) {
//     await new Promise(..);
//     console.log("waiting for money");
// }