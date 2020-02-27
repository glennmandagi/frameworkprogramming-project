/* 
    1. Let and Const
*/

// ES5
// var firstName = 'John';
// var firstName = 'Jane';

// console.log(firstName);

// ES6
// console.log(firstName); // Error
// let firstName = 'John';
// firstName = 'Jane';
// console.log(firstName);

// const yearOfBirth = 1991;

// let firstName = 'Jane'; // Error

// Scope

// var -> function scope
// let -> block scope

// ES5
// var displayName5 = function(){
//     if(true){
//         if(true){
//             var firstName5 = 'John';
//         }
//     }
//     console.log('Your name is ' + firstName5);
// }

// displayName5();

// ES6
// const displayName6 = function() {
//     if(true){
//         let firstName6 = 'John';
//         console.log('Your name is ' + firstName6);
//     }
// }
// displayName6();

// Global Scope - Defined outside of all code block
// Local Scope - Defined inside a code block

// var -> function scope
// let & const -> block scope

// Global (varOne)
    // Local (varTwo)
        // Local (name)
    // Local (varThree)

// let varOne = 'varOne';

// if(true){
//     let varTwo = 'varTwo';
//     console.log(varOne);
//     if(true){
//         let name = 'Jane';
//         console.log(name);
//     }
// }

//console.log(varTwo)

// if(true){
//     let varThree = 'varThree';
//     console.log(name);
// }

/*
    2. Strings
*/

// ES5
// function displayInformation5(){
//     var firstName5 = 'John';
//     var lastName5 = 'Smith';
//     var age5 = 28;

//     console.log('My name is ' + firstName5 + ' ' + lastName5 + '. I am ' + age5 + ' years old')
// }

// displayInformation5();

// ES6
// const displayInformation6 = function (){
//     let firstName6 = 'John';
//     let lastName6 = 'Smith';
//     let age6 = 28;

//     return `My name is ${firstName6} ${lastName6}. I am ${age6} years old.`;
// }

// let info = displayInformation6();
// console.log(info);
