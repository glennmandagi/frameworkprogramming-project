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

/*
    3. Arrow function
*/

// ES5
// var show5 = function(){
//     return 'My name is John';
// }

//ES6
// const show6 = () => {
//   return `My name is John`;
// }

// One Parameter
// ES5
// var show5 = function(firstName) {
//  return `My name is ${firstName}`;
// }

// ES6
// const show6 = firstName => `My name is ${firstName}`;
// console.log(show6('Mike'));

// Two Parameters
// ES5
// var show5 = function (firstName, lastName){
//      return `My name is ${firstName} ${lastName}`;
// }

// ES6
// const show6 = {firstName, lastName} => `My name is $(firstName) ${lastName}`;
// console.log(show6('John', 'Smith'));

// let numbers = ['One', 'Two', 'Three', 'Four', 'Five'];

// ES5
// numbers.forEach(function(item, index){
//    console.log(item, index);
// })

// ES6
// numbers.forEach((number, index) => console.log (number, index));
// console.log(result);

// let result = numbers.map(number => { return number } => {
//     return{
//         number,
//         index
//     }
// });

// console.log(result);

// Change to ES6 s
// const findNote

// var findNote = function (notes, query){
//     return notes.find(function(note, index)){
//         var isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//         var isBodyMatch = note.title.toLowerCase().includes.(query.toLowerCase());
//         return isTitleMatch || isBodyMatchl
//     })

/*
    4. Default Function Argument
*/

// const getScore = (name = 'Anonymous', score = 0) => {
//     return `Name = ${name}, Score = ${score}`;
// }

// console.log(getScore('John'));
// console.log(getScore(undefined, 90));

// Challenge
// create function tipCalculator
// 2 args : totalBill, percentage with default (10%)

// const tipCalculator = (totalBill, percentage = .1) =>{
//    return (totalBill * percentage) + totalBill; 
// }

// console.log(`Total Payment = ${tipCalculator(100000)}`);
// console.log(`Total Payment = ${tipCalculator(100000, .3)}`);

/*
    5. Rest and Spread Operator
*/

// Rest Operator

// const addNumbers5 = (a, b, c, d, e) =>{
//     let numbers = [a, b, c, d, e]
//     let sum = 0;
//     numbers.forEach(item => sum += item);
//     return sum;
// }

// console.log(addNumbers(1, 1, 1, 1, 1))

// const addNumbers6 = (...numbers) => {
//     console.log(numbers);
//     let sum = 0;
//     numbers.forEach(item => sum += item);
//     return sum;
// }

// console.log(addNumbers6(1, 2, 3, 4, 5, 6, 7));

// Spread Operator

// let numbers1 = [1, 2, 3];
// let numbers2 = [5, 6, 7];
// let numbers3 = [8, 9, 10];

// let combinedNumbers5 = numbers1.concat(numbers2.concat(numbers3));
// console.log(combinedNumbers5)

// let combinedNumbers6 = [...numbers1, ...numbers2, ...numbers3];
// console.log(combinedNumbers6);

// const validateCart = (...items) => {
//     if(items.indexOf('Roti') < 0){
//         return [...items, 'Roti'];
//     }
//     return items;
// }
// console.log(validateCart('Sabun Cuci', 'Tissue', 'Buah Apel'));
// console.log(validateCart('Pepsodent', 'Aqua', 'Roti'));

/*
    6. Destructuring
*/

// let myArr = ['a', 'b', 'c', 'd'];

// ES5
// let a5 = myArr[0];
// let b5 = myArr[1];
// let c5 = myArr[2];
// let d5 = myArr[3];
// console.log(a5, b5, c5, d5);

// ES6
// let [a6, b6, c6, d6] = myArr;
// console.log (a6, b6, c6, d6);

// let [a6, ...rest] = myArr;
// console.log(a6);
// console.log(rest);

// Swapping variable
// let a = 5, b = 7;
// console.log(a, b);

// Swapping code
// ES5
// let temp;
// temp = a;
// a = b;
// b = temp;

//ES6
// [a, b] = [b, a];
// console.log(a, b);

// const func = () => [1, 2, 3]
// const [a, b, c] = func();
// console.log(a, b, c);

// let myObj = {
//     one: 'a',
//     two: 'b',
//     three: 'c',
//     four: () => 'd'
// }

// ES5
// let one5 = myObj.one
// let two5 = myObj.two
// let three5 = myObj.three
// let four5 = myObj.four();
// myObj.four();
// console.log(one5, two5, three5, four5);

// ES6
// let { one: one6, two: two6, three: three6, four: four6 } = myObj;
// console.log(one6, two6, three6, four6);

// let myObj = {
//     one: 'a',
//     two: 'b',
//     three: 'c',
//     four: () => 'd'
// }

// let { one, ...rest} = myObj;
// console.log(one);
// console.log(rest);

// const addNumber = ({num1 = 10, num2, num3}) => {
//     return num1 + num2 + num3;
// }

// console.log(addNumber({ num2: 15, num3: 25 }));

// /*
//     7. Classes
// */

// class Person {
//     constructor(gender) {
//         this.gender = gender;
//     }
// }

// class Student extends Person {
//     constructor(gender, firstName, lastName, score) {
//         super(gender);
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.score = score;
//     }

//     displayFullName(){
//         return `Hello ${this.firstName} ${this.lastName}. Your gender is ${this.gender}`;
//     }
// }

// const student1 = new Student('Male', 'John', 'Smith', 90);
// console.log(student1.displayFullName());
// const student2 = new Student('Female', 'Mary', 'Miller', 80);
// console.log(student2.displayFullName());

//                             Vehicle
// Car (model, year, engine)        // Truck (model, year, engine)
// Toyota        Nissan             Hino            Mitsubishi

// class Vehicle {
//     constructor(type){
//         this.type = type;
//     }
// }

// class Car extends Vehicle {
//     constructor(model, year, engine){
//         super(model);
//         this.model = model;
//         this.year = year;
//         this.engine = engine;
//     }

//     displayCarName(){
//         return `Hello ${this.model} made in ${this.year}. The engine is ${this.engine}`;
//     }
// }

// class Truck extends Vehicle {
//     constructor(model, year, engine) {
//         super(model);
//         this.model = model;
//         this.year = year;
//         this.engine = engine;
//     }

//     displayTruckName(){
//         return `Hello ${this.model} made in ${this.year}. The engine is ${this.engine}`;
//     }
// }

// const car1 = new Car('Toyota Agya', 2015, '200cc');
// console.log(car1.displayCarName());
// const car2 = new Car('Nissan Terrano', 2015, '200cc');
// console.log(car2.displayCarName());
// const truck1 = new Truck('Hino Dutro', 2006, '275 cc');
// console.log(truck1.displayTruckName());
