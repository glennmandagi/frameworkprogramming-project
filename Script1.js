/* 1. Variables and Data Type */
// var firstName = "John";
// console.log(firstName);

// var age = 28
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

// var job, isMarried;
// console.log(job);

// job = "Teacher"
// console.log(job);

/* 2. Variable Mutation and Type Coercion */
// var firstName="John";
// var age = 28;

//Type coercion
// console.log(firstName + ', ' + age);

// var isMarried = true;
// console.log(firstName + " is a " + age + " year old. Is he married? " + isMarried);

// age = "twenty eight"
// console.log(firstName + " is a " + age + " year old. Is he married? " + isMarried);

// var lastName = prompt("What is his last name? ")
// console.log(firstName + " " + lastName);

/* 3. Basic Operator */
// Math Operator
// var year, yearJohn, yearMark, ageJohn, ageMark;
// year = 2020;
// ageJohn = 33;
// ageMark = 25;

// yearJohn = 2020 - ageJohn;
// yearMark = 2020 - ageMark;

// console.log(yearJohn);
// console.log(yearMark);

// console.log(year + 10);
// console.log(year * 2);
// console.log(year / 12);

//Logical Operator (<, >, <=, >=, ===)
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

//typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "John and Mark");
// var x;
// console.log(typeof x);

/* 4. Operator Precedence */
// var now = 2020;
// var yearJohn = 1987;
// var fullAge = 17;

// Multiple Operator
// var isFullAge = now - yearJohn > fullAge;
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 25;
// var average = (ageJohn + ageMark) / 2;

// //Multiple Assignment
// var x, y;
// x = y = (3 + 5) * 4 - 6; //8 * 4 -6 //32 - 6 //26
// console.log(x, y);

// x = x * 2;

// x = x
// console.log(x);

/* 5. Boolean */
// Relational Operator
// === - Strict equality operator
// == - equality operator (does type coercion)
// !== - No equal operator
// < - Less than operator
// > - Greater than operator
// <= - Less than or equal to operator
// >= - Greater than or equal to operator

// Logical Operator
// && (AND)
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// ||(OR)
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// !(NOT)
// !true = false
// false = true

// var temp = 30;
// temp between 30 to 32 fahrenheit is freezing
// var isFreezing = temp >= 20 && temp <= 32;

// console.log(isFreezing);

/* 6. If/Else Statement */
// var temp = 80;

// var isFreezing = temp >= 20 && temp <= 32;

// if (temp <= 32){
//     console.log("It is freezing outside");
// } else {
//     console.log("It is hot outside");
// }

// var isAccountLocked = true;
// var userRole = 'admin';

// if(isAccountLocked){
//     console.log("Is account locked")
// } else if (userRole === "admin"){
//     console.log("Welcome admin");
// } else {
//     console.log("Welcome");
// }

// var userName = "user";
// var password = "12345";

// if (userName === "admin" && password === "12345"){
//     console.log("Welcome admin");
// } else if (userName === "user" && password === "12345"){
//     console.log("Welcome user");
// } else {
//     console.log ("Username atau password anda salah");
// }

/* 7. Function */
// Function: input, process, output
// Function declaration
// function greetUser() {
//     console.log("Hello user");
// }

// greetUser();
// greetUser();

// Function expression
// var greetUser = function(firstName, lastName){
//     var message = "Hello " + firstName + " " + lastName;
//     return message;
// };

// var msg = greetUser("John", "Miller");
// console.log(msg);

/* 8. Objects */
// var myBook = {
//     title: "Framework Programming",
//     author: "John Miller",
//     pageCount: 567,
// };

// console.log(myBook);
// console.log(myBook.author);
// console.log(myBook["title"]);

// myBook.author = "John Smith";
// console.log(myBook.title + " by " + myBook.author);

/* 9. Objects and Methods */
// var myBook = {
//     title: "Framework Programming",
//     author: "John Miller",
//     pageCount: 567
// };

// var otherBook = {
//     title: "Introduction to JavaScript",
//     author: "Mike Miller",
//     pageCount: 456
// };

// var getSummary = function(book){
//     return {
//         summary: book.title + " by " + book.author,
//         pageCountSummary: book.title + " is " + book.pageCount + " pages long "
//     };
// };

// var bookSummary = getSummary(myBook);
// var otherBookSummary = getSummary(otherBook);

// console.log(bookSummary.summary, otherBookSummary.pageCountSummary);
// console.log(otherBookSummary.summary, bookSummary.pageCountSummary);

/* 10. Object Reference */
// var myAccount = {
//     name: "John Doe",
//     expenses: 0,
//     income: 0,
// };

// var addExpenses = function (account, amount) {
//     account.expenses = account.expenses + amount;
// };

// addExpenses(myAccount, 15000);
// console.log(myAccount);

/* 11. Arrays */

//Initialize new array
// var notes = ["Notes 1", "Notes 2", "Notes 3"];

// console.log(notes);
//How to access single element in array?

// console.log(notes[0]); //Will print Notes 1
// console.log(notes[1]); //Will print Notes 2
// console.log(notes[2]); //Will print Notes 3
// console.log(notes[22]); //Will print undefined
// console.log(notes.length); // Will print numbers of elements in array : 3

// //How to change data in array
// notes[2] = "Notes Three";
// console.log(notes);

// Foreach
// MyNotes.foreach(function (item indeks) {
//     console.log(item);
//     console.log(indeks);
// });

// Searching Array
// var notes = ["Notes 1, Notes 2, Notes 3"]

// var pos = notes.indexOf('notes3');
// console.log(pos);

// var notes = [{
//     title: 'My Next Trip',
//     body: 'I would like to Bali'
// }, {
//     title: 'Habits to work on',
//     body: 'Exercise, eating a bit better'
// }, {
//     title: 'Office modification',
//     body: 'Get a new seat'
// }]

// var index = notes.findIndex(function (note) {
//     return note.title === 'Habits to work on'
// })

// var findNote = function(notes, notesTitle){
//     return notes.find(function (note) {
//         return note.title.toLowerCase() === notesTitle.toLowerCase();
//     });
// }

// var note1 = findNote(notes, 'Habits to work on');
// var note2 = findNote(notes, 'OFFICE MODIFICATION');

// console.log(note1);
// console.log(note2);

// Filter Array

// var filterNotes  = function (notes, query) {
//     return notes.filter(function (note, index){
//         var isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//         var isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//         return isTitleMatch || isBodyMatch;
//     });
// }

// console.log(filterNotes);
