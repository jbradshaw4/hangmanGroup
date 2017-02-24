// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================

// Array of Word Options (all lowercase).
var wordsList = ["Bart", "Homer", "Marge", "Lisa", "Maggie", "Krusty the Clown", "Sideshow Bob", "Milhouse", "Comic Book Guy"];

// Computer selected solution will be held here.
var word = Math.floor(Math.random())
// This will break the solution into individual letters to be stored in array.
// This will be the number of blanks we show based on the solution.
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
// Holds all of the wrong guesses.
// Holds the letters guessed
// Game counters for wins, losses, ties

// FUNCTIONS (These are bits of code that we will call upon to run when needed).
// ==================================================================================================

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)
function startGame() {

    // Reset the guesses back to 0.
    // Solution chosen randomly from wordList.
    // The word is broken into individual letters.
    // We count the number of letters in the word.
    // We print the solution in console (for testing).

    // CRITICAL LINE
    // Here we *reset* the guess and success array at each round.

    // CRITICAL LINE
    // Here we *reset* the wrong guesses from the previous round.

    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.

    // Print the initial blanks in console.

    // Reprints the guessesLeft to 9.

    // Prints the blanks at the beginning of each round in the HTML.

    // Clears the wrong guesses from the previous round.
}

// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

    // This boolean will be toggled based on whether or not
    // a user letter is found anywhere in the word.

    // Check if a letter exists inside the array at all.
    for (var i = 0; i < numBlanks; i ++) {

        // If the letter exists then toggle this boolean to true.
        if (chosenWord[i] === letter) {

            // This will be used in the next step.
            letterInWord = true;
        }
    }

    // If the letter exists somewhere in the word,
    // then figure out exactly where (which indices).
    if (letterInWord) {

        // Loop through the word
            // Populate the blanksAndSuccesses with every instance of the letter.
                // Here we set specific blank spaces to equal the correct letter
                // when there is a match.

        // Log the current blanks and successes for testing.
    }

    // If the letter doesn't exist at all...
    else {

        // Then we add the letter to the list of wrong letters.

        // We also subtract one of the guesses.

    }

}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

    // First, log an initial status update in the console
    // telling us how many wins, losses, and guesses are left.

    // HTML UPDATES
    // ============

    // Update the HTML to reflect the new number of guesses.

    // This will print the array of guesses and blanks onto the page.

    // This will print the wrong guesses onto the page.

    // If our hangman string equals the solution.
    // (meaning that we guessed all the letters to match the solution)...

        // Add to the win counter

        // Give the user an alert

        // Update the win counter in the HTML

        // Restart the game

    // If we've run out of guesses

        // Add to the loss counter

        // Give the user an alert

        // Update the loss counter in the HTML

        // Restart the game


}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

    // Converts all key clicks to lowercase letters.
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    // Runs the code to check for correct guesses.

    // Runs the code that ends each round.
};
