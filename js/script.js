const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining"); 
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".meassage");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters [] ;
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
 
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText="";
    const guess = letterInput.value;
    const goodGUess = validateInput(guess);

if (goodGUess) {
    makeGuess(guess);
}
letterInput.value="";
});

const validateInput = function (input) {
const acceptedLetter= /[a-zA-Z]/;
if (input.length === 0) {
    // Is the input empty?
message.innerText = "Please enter a letter.";
} else if (input.length > 1) {
    //Did you type more than one letter?
    message.innerText ="Please enter a single letter.";
} else if (!input.match(acceptedLetter)) {
    // Did you type a number, or special character?
    message.innerText = "Please type a letter from A to Z.";
} else {
    // We finally got a single letter, yay!
    return input;
}
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again,";
    } else {
        guessedLetters.push(guess);
        coneole.log(guessedLetters);
    }
};
