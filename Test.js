const account = {
    name: 'Glenn Mandagi',
    expenses: []
}

var addExpenses = function (name, expenses){
    account.expenses.foreach(expenses){
        return account.expenses + expenses;
    }
}

addExpenses('Buy food', 15000);
addExpenses('Transport', 30000);
