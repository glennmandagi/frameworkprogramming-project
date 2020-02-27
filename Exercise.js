//Coding Exercise #1

//Temperature Converter

// var fahrenheit = 300; // 0C 273.15K

// //Calculate Celcius and store in Celcius variable
// //Print that value
// var celcius = (fahrenheit - 32) * 5/9;

// //Calculate Kelvin and store in Kelvin variable
// //Print that value
// var kelvin = (fahrenheit + 459.67) * 5/9;

// console.log(celcius);
// console.log(kelvin);

//Create age variable and set to your age
//Calculate is child - if they are 7 or under
//Calculate is teenager - if they are between 7 to 14
//Calculate is young man - if they are between 14 to 25
//Calculate is a man - if they are between 25 to 65
//Calculate is a senior - if they are 65 or older

// var age = 20;

// var isChild = age <= 7
// console.log(isChild);
// var isTeenager = age >= 7 && age <= 14
// console.log(isTeenager)
// var isYoungman = age >= 14 && age <= 25
// console.log(isYoungman);
// var isMan = age >= 25 && age <= 65
// console.log(isMan);
// var isSenior = age >= 65
// console.log(isSenior);

// Coding Exerice #2
//If temp between 60 to 90 print to "It is pretty nice out"
//If temp less than or equal to 0. print "Do not go outside"
//If temp more than or equal to 120, print "Do not go outside"
//Else print "Do what you want"

// var temp = 80;

// if(60 > 90){
//     console.log("It is pretty nice out");
// } else if(temp <=0 && temp >=120){
//     console.log("Do not go outside");
// } else{
//     console.log("Do what you want");
// }

// Are both vegan? print "Only offer up vegan dishes"
// At least one vegan? print "Make sure to offer up some vegan options"
// Else, print "Offer up anything on the menu"

// var isGuestOneVegan = false;
// var isGuestTwoVegan = true;

// if (isGuestOneVegan === true && isGuestTwoVegan === true){
//     console.log("Only offer vegan dishes")
// } else if(isGuestOneVegan || isGuestTwoVegan === true){
//     console.log("Make sure to offer up some vegan options");
// } else{
//     console.log("Offer up anything on the menu");
// }

// Coding Exercise #3
// Grade Calculator
// 1. Initialise 2 variable, student score and total score
// Ex: 15/20 = 75%
// Print to the console "You got a C (75%)"
// 4. A 90-100, B 80-89, C = 70-79, D 60-69, F 0-59
// var studentScore = 20;
// var totalScore = 20;

// var percentage = studentScore/totalScore*100;

// if(percentage>=90 && percentage<=100){
//     console.log("You got A ("+percentage+"%)");
// } else if (percentage>=80 && percentage<=89){
//     console.log("You got B ("+percentage+"%)");
// } else if (percentage>=70 && percentage<=79){
//     console.log("You got C ("+percentage+"%)");
// } else if (percentage>=60 && percentage<=69){
//     console.log("You got D ("+percentage+"%)");
// } else if (percentage>=0 && percentage<=59){
//     console.log("You got F ("+percentage+"%)");
// }

//Coding Exercise #4
// var fahrenheit = 100;
// var converter = function(fahrenheit){
//     var celcius = (fahrenheit-32) * 5/9;
//     console.log(celcius);
// }

// var  fhr = converter (100);

// var calculator = function( studentScore ){
//     var totalScore = 10;
//     var percentage = studentScore/totalScore*100;
//     if(percentage>=90 && percentage<=100){
//         console.log("You got A ("+percentage+"%)");
//     } else if (percentage>=80 && percentage<=89){
//         console.log("You got B ("+percentage+"%)");
//     } else if (percentage>=70 && percentage<=79){
//         console.log("You got C ("+percentage+"%)");
//     } else if (percentage>=60 && percentage<=69){
//         console.log("You got D ("+percentage+"%)");
//     } else if (percentage>=0 && percentage<=59){
//         console.log("You got F ("+percentage+"%)");
//     }
//     return percentage;
// }

// var msg = calculator (10);

//Coding Exercise #5
//name, age, location
//John is 27 and lives in Airmadidi
//Increase age by 1
//Print message again

// var people = {
//     name: "Glenn Mandagi",
//     age: 20,
//     location: "Airmadidi Atas"
// };

// console.log(people.name + " is " + people.age + " and lives " + people.location);

// people.age = people.age + 1;
// console.log(people.name + " is " + people.age + " and lives " + people.location);

//Create function
//Take fahrenheit as argument
//return object with all three (fahrenheit, celcius, kelvin)
//print th

// var getFahrenheit = function(fahrenheit){
//     return {
//         fahrenheit: fahrenheit,
//         celcius: (fahrenheit - 32) * 5/9,
//         kelvin: (fahrenheit + 459.78) * 5/9
//     }
// };

// var temp = getFahrenheit(32);

// console.log(temp.celcius, temp.kelvin, temp.fahrenheit);


// Coding Excercise #6

// Create an array with five todos (define your own todos)
// Print to the console "You have x todos"
// Print the first and second to last items to the console for example
// Todo: Buy food,
// Todo: Go to class
// HINT : you can use length properties

// var todos = ["Buy Food", "Go to class", "Go to home", "Sleep", "Eat"];

// console.log(todos);

// console.log("do you have " + todos.length + " todos");
// console.log(todos[0]); //Will print Buy Food
// console.log(todos[3]); //Will print Go to class 
// console.log(todos.length); // Will print numbers of elements in array : 3

// //How to change data in array
// todos[2] = "Go to church";
// console.log(todos);