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
let remainingGuesses = 8;

const getWord = async function () {
const response = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
const word = await response.text();
const wordArray = words.split("\n");
const randomIndex = Math.floor(Math.random() * wordArray.length);
word = wordArray[randomIndex].trim();
placeholder(word);
};
 
getWord();

const placeholder = function (word) {
    const placeholderLetters = [] ;
    for (const letter of word) {
        //console.log(letter);
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

const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letters of guessedLetters) {
        const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
  }
};

const updateWordInProgress = function (guessedLetters) {
const wordUpper = word.toUpperCase();
const wordArray = wordUpper.split("");
const revealWord = [];
   for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
    } else {
        revealWord.push("●");
    }
}
//console.log(revealWord);
wordInProgress.innerText = revealWord.join("");
checkIfWin();
};

 
const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (upperWord.includes(guess)) {
        // womp womp - bad guess, lose a chance
        message.innerText = 'Sorry the word has no ${guess}.';
        remainingGuesses -= 1;
        } else {
            message.innerText =' Good guess! The word has the letter ${guess}.';
}

if (remainingGuesses === 0) {
    message.innerText = ' Game over! The word has <span class ="highlight"${word}</span>.';
} else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = '${remainingGuesses} guess';
} else {
    remainingGuessesSpan.innerText = '${remainingGuesses} guesses';
  }
};

const checkIfWin = function () {
    if(word.toUpperCase() === wordInProgress.innerText ) {
        message.classList.add("win");
        message.innerHTML = '<p class="highlight">You guessed the correct word! Congrats!</p>';
    }
};

const startOver = function () {
guessButton.classList.add("hide");
remainingGuessesElement.classList.add("hide");
guessedLettersElement.classList.add("hide");
};

playAgainButton.addEventListener("click", function () {
    message.classList.remove("win");
    guessedLetters = [];
    remainingGuesses = 8;
    remainingGuessesSpan.innerText = '${remainingGuesses} guesses';
    guessedLetters.innerHTML ="";
    message.innerText ="";

    getWord();

    guessLetterButton.classList.remove("hide");
    playAgainButton.classList.add("hide");
    remainingGuessesElement.classList.remove("hide");
    guessedLettersElement.classList.remove("hide");

});