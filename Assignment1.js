// Assignment 1
// Expenses Tracker

//Add 3 functions
//1. addIncome()
//2. resetAccount()
//3. getAccountSummary

//"Account for John Doe has Rp. 50000. Rp 100000 in income. Rp 50000 in expense"

var balanceAccount = {
    name: Glenn Mandagi,
    expenses: 50000,
    income: 100000,
};

var addIncome = function(account, amount){
    account.income = account.income+amount
};

var addExpenses = function(account, amount){
    account.expenses = account.income-account.expenses
};

var resetAccount = function(){
    account={};
}

var getAccountSummary = function(account){
    return{
        summary: account.name has + "Rp. " + account.expenses. + "Rp. " + account.income + " in income and " + " Rp. " + account.expenses + " in expense"
    };
};

console.log(getAccountSummary.summary)