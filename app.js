// Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights



// let users = prompt("Enter Your City").toLowerCase();

// if(users === "karachi"){
//     console.log("Welcome to city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.


// let users = prompt("Enter your gender").toLowerCase();

// if(users === "Male"){
//     console.log("Good Morninig Sir");
   
// } else{
//     console.log("Good Morning Ma'am");
// }

//3.  Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// let trafficsignal = prompt("Enter Traffic Colors").toUpperCase() ;

// if(trafficsignal === "Red"){
//     console.log("Must Stop");
// } else if(trafficsignal === "Yellow"){
//     console.log("ready to move");
// } else if(trafficsignal === "Green"){
//     console.log("Move now");
// }

// 4. Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”

// let remainingFuel = +prompt("Enter Your fuel in litres");

// if(remainingFuel === 0.25){
//     console.log("please refill the in your car");
// } else{
//     console.log("Enjoy your ride");
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


// a
// var a =4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// }

// b. 
// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// fALSE STATEMENT
// }

// c 
// let c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// } else if(c === 13){
//     alert("condition 2 is true");
// } else if(++c < 14){
//     alert("condition 3 is true");
// } else if(c === 14){
//     alert("condition 4 is true");
// }


// d. 
// let materialCost = 20000;

// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if(totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }


// e

// if(true){
//     alert("True");
// } else if(false){
//     alert("false");
// }

// f 

// if("car" < "cat"){
//     alert("car is smaller than cat")
// }

// let subject = prompt("Enter Your Subject");
// let subject1 = prompt("Enter your Subjects");
// let subject2 = prompt("Enter your Subjects");

// let marks = prompt("enter your marks in " + subject);
// let marks1 = prompt("enter your marks in " + subject1);
// let marks2 = prompt("enter your marks in " + subject2);

// let result = marks + marks1 + marks2;
// let result1 = (result /300)*100;

// document.write("<h1> Mark Sheet </h1> <br>");
// document.write("Total Marks: " + result + "<br>");
// document.write("Marks Obtained: " + result1 + "<br>");
// document.write("Grade:  B" + "<br>");
// document.write("You need to improve");



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// let secretNumber = 8;

// let userNumber = +prompt("Enter your guess Number");
// if(userNumber === secretNumber){
//     alert("Bingo! Correct answer");
// } else if(userNumber +1 === secretNumber || userNumber -1 === secretNumber){
//    alert("Close enough to the target");
// } else{
//     alert("Wrong Guess! Try Again")
// }



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.


// let userNumber = prompt("Enter your Number");

// if(userNumber %3 === 0){
//     console.log(`${userNumber} divisible by 3`);
// } else{
//     console.log(`${userNumber} is not divisible by 3`);
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.


// let userNumber = +prompt("Enter Your Number");

// if(userNumber %2 === 0){
//     console.log(`${userNumber} is an even number`);
// } else{
//     console.log(`${userNumber} is an odd number`);
// }

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// let temperature = +prompt("Enter the temperature");
// if(temperature >= 40){
//     alert("It is too hot outside")
// } else if(temperature >= 30){
//     alert("The weather today is normal");

// } else if(temperature >= 20){
//     alert("Today! Weather is cool");

// } else if(temperature >= 10){
//     alert("OMG! Today's weahter is so cool");
    
// }


// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user


// let firstNumber = +prompt("Enter Your first Number");
// let secondtNumber = +prompt("Enter Your second Number");
// let Operator = prompt("Enter your operator");

// let result;
// if(Operator === "+"){
//     result = firstNumber + secondtNumber;
// } else if(Operator === "-"){
//     result = firstNumber - secondtNumber;
// } else if(Operator === "*"){
//     result = firstNumber * secondtNumber;
// } else if(Operator === "/"){
//     if(secondtNumber !== 0){
//     result = firstNumber / secondtNumber;
//     } else{
//         alert("Error: division by zero is not ALLOWED");
//         result = null;
//     }
// } else if(Operator === "%"){
//     result = firstNumber % secondtNumber;
//    } else{
//     alert("Invlid Operator");
//    }
//    if( result !== 0){
//     alert(`the result is: ${result}`);
//    }