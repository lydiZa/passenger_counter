// document.getElementById("count-el").innerText=5;


// // 1. Create a variable, myAge, and set its value to your age
// let myAge = 24;
// // 2. Log the myAge variable to the console
// console.log(myAge);

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch
// console.log(count);

// // 1. Create two variables, myAge and humanDogRatio
// let myAge = 24;
// let humanDogRatio = 7;
// // 2. Multiply the two together and store the result in myDogAge 
// let myDogAge = myAge*humanDogRatio;
// // 3. Log myDogAge to the console
// console.log(myDogAge);

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints-75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints+45;
// console.log(bonusPoints);


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// function increment(){
//     console.log("The button was clicked");
// }

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// //Set up race
// function countdown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// //Call the function
// countdown() 

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
// function fortyTwo(){
//     console.log(42);
// }
// fortyTwo();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// // Create a function that logs out the sum of all the lap times
// function totalSum(){
//     console.log(lap1+lap2+lap3);
// }
// totalSum();



// let lapsCompleted = 0
// Create a function that increments the lapsCompleted variable with one
// Run it three times
// function incrementLaps(){
//     lapsCompleted = lapsCompleted+1;
// }
// incrementLaps();
// incrementLaps();
// incrementLaps();
// console.log(lapsCompleted);



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// let count = 0;
// function increment(){
//     count = count + 1;
//     console.log(count);
//     document.getElementById("count-el").innerText = count;
// }

// grab the count-el element, store it in a countEl variable
let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    // set countEl's innerText to the count
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save(){
    console.log(count);
}

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Lydia"
// let greeting = "Hi, my name is"

// let myGreeting = greeting + " " + name
// console.log(myGreeting)

// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"

function save() {
    // Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let saveEl = document.getElementById("save-el")
    // Render the variable in the saveEl using innerText
    saveEl.textContent += " " + countEl.innerText + " - "
    // NB: Make sure to not delete the existing content of the paragraph
    count = 0;
    document.getElementById("count-el").textContent = 0;
}




