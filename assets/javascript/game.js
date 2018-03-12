
var wins = 0;
var losses = 0;
var times = 10;
var guess =[];

 // Create an array of words
 var library = [
 "monkey",
 "panda",
 "ducky",
 "pancake"
 ];


//Create a function to display image
 function displayImg(word) {
   
    if (word === "pancake"){
   document.getElementById("coolimage").src = "assets/images/pancake.jpg";
   }

   if (word === "ducky"){
   document.getElementById("coolimage").src = "assets/images/ducky.jpg";
   }

   if (word === "panda"){
   document.getElementById("coolimage").src = "assets/images/panda.jpg";
   }

   if (word === "monkey"){
   document.getElementById("coolimage").src = "assets/images/monkey.jpg";
   }

}

// Create a function to display audio
function displayAudio(word){
   

    if (word === "ducky")
    { var audio = new Audio("assets/audio/ducky.mp3");
    audio.play();};
    if (word === "pancake")
    { var audio = new Audio("assets/audio/pancake.mp3");
    audio.play();};
    if (word === "monkey")
    { var audio = new Audio("assets/audio/monkey.mp3"); 
    audio.play();};
    if (word === "panda")
    { var audio = new Audio("assets/audio/panda.mp3");
    audio.play();};

}

// Create a function to change background color
function background(word) {
    if (word === "ducky"){
    document.body.style.backgroundColor = "#ffffb3";}

     if (word === "monkey"){
    document.body.style.backgroundColor = "#99bbff";}

     if (word === "panda"){
    document.body.style.backgroundColor = "grey";}

      if (word === "pancake"){
    document.body.style.backgroundColor = "#ffcccc";}
}

//When user open up or refresh the page, gameloop starts
onload= Gameloop();


 // Game loop starts with computer to pick a random word from the array
function Gameloop(){
 var word = library [Math.floor(Math.random() * library .length)];
console.log (word);

// Set up the answer array with "_" according to the length of the word that computer randomly picked 
 var guessField = [];
 for (var i = 0; i < word.length; i++) {
guessField[i] = "_";
 }

// When user press anykey....
document.onkeyup = function(event) {
var userGuess = event.key;


// if the guess action is not finish..keep running
 if(guessField.join("") !== word) {


 //create a for loop to check through each letter of the computer picked word, if user typed in correct letter, fill that in the guessfield
 for (var j = 0; j < word.length; j++) {
  
 if (word[j] === userGuess) {
 guessField[j] = userGuess;
 }
//end of for loop
 }


//otherwise, if user typed in wrong letter, guessing chance -1
if(word.indexOf(userGuess)=== -1){
   times--;
 }

 console.log(times);
 console.log(guessField);


//anyway, always record the letter users typed in, as a upper case letter, no matter wrong or correct, use push
  guess.push(userGuess.toUpperCase()); 



     
}

// if the guess action done win, end the game, wins+1, also display image and audio, rest all other fields
if (guessField.join("") == word){
     wins++;
     times=10;
     guess=[];
     Gameloop();
     background(word);
     displayImg(word);
     displayAudio(word);
     }

// if the guess has used up 10 guessing chances, end the game, losses+1, rest all other fields
if (times==0){
    losses++;
    times=10;
     guess=[];
     Gameloop();
}





// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses etc.

var html =
        "<p>PRESS ANY KEY TO GET STARTED! </p>" +
          "<p>Wins " + wins + "</p>" +
          "<p>Losses " + losses + "</p>" +
          "<p>CURRENT WORD " + guessField + "</p>"+
          "<p>NUMBERS OF GUESSES REMAINING " + times + "</p>"+
          "<p>lETTERS ALREADY GUESSED " + guess + "</p>";

        // Set the inner HTML contents of the #game div to our html string
       
        document.querySelector("#game").innerHTML = html;

 //the end of onkeyup event
 };


// The end of the game loop
}

