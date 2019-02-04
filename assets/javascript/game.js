// Bill's JavaScript for Word Guess Game


// Defining the Animals
    var  animalInput = "Elephant Lion Kangaroo Wombat Dingo Gazelle Zebra Giraffe Crocodile";

// Converting my string into an array
    var animals = animalInput.split(" "); 

console.log(animals)

// Finding a Random animal
    chosenAnimal = Math.floor(Math.random() * (animals.length));

console.log(chosenAnimal)
console.log(animals[chosenAnimal])
        
// 1 Writing the "_" to the gamebox div 2 emoving the commas from the chosenWord
    chosenWord = [];

    for (var i = 0; i < animals[chosenAnimal].length; i++) {
        chosenWord.push(" _ ");
    }

console.log(chosenWord)

// 2
    var chosenWordText = "";
    for (var i = 0; i < chosenWord.length; i++) {
        chosenWordText += chosenWord[i];
    }
    document.getElementById("gamebox").innerHTML = chosenWordText;

// Record userInput and put it into a variable. Only record letters.

document.onkeydown = function(keyPress) {
            if(event.keyCode >= 65 && event.keyCode <= 90) {
                console.log(keyPress.key.toLowerCase());
            }
    };




 