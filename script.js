// Define winning score constant
const WINNING_SCORE = 5;

// Get the computer choice
function getComputerChoice() {
    let computerChoice;
    let randomNum = Math.floor(Math.random() * 3 + 1);
    randomNum === 1 ? computerChoice = "rock" :
    randomNum === 2 ? computerChoice = "paper" :
    randomNum === 3 ? computerChoice = "scissors" :
    computerChoice = randomNum;
    return computerChoice;
}

// Create the players score variables
let humanScore = 0, computerScore = 0;

// Select the elements for computer and human scores display
const computerScoreDisplayed = document.querySelector(".computer");
const humanScoreDisplayed = document.querySelector(".human");
computerScoreDisplayed.textContent = computerScore;
humanScoreDisplayed.textContent = humanScore;

// Select the game-space imgs for displaying round choices
const gameSpace = document.querySelector(".game-space");
const computerRoundChoiceToDisplay = document.querySelector("#computer");
const humanRoundChoiceToDisplay = document.querySelector("#human");
gameSpace.appendChild.humanRoundChoiceToDisplay;
gameSpace.appendChild.computerRoundChoiceToDisplay;
computerRoundChoiceToDisplay.width = 100;
humanRoundChoiceToDisplay.width = 100;

// The logic for playing each round
function playRound(computerRoundChoice, humanRoundChoice) {
    switch(computerRoundChoice) {
        case "rock":
            {
                switch(humanRoundChoice) {
                    case "paper":
                        ++humanScore;
                        break;
                    case "scissors":
                        
                        ++computerScore;
                        break;
                }
            }
            break;
        case "paper":
            {
                switch(humanRoundChoice) {
                    case "rock":
                        
                        ++computerScore;
                        break;
                    case "scissors":
                        ++humanScore;
                        break;
                }
            }
            break;
        case "scissors":
            {
            switch(humanRoundChoice) {
                    case "rock":
                        ++humanScore;
                        break;
                    case "paper":
                        
                        ++computerScore;
                        break;
                }
            }
    }


    // console.log(`Computer drew ${computerRoundChoice}.\nHuman drew ${humanRoundChoice}.\nHuman: ${humanScore}\nComputer: ${computerScore}`)

    // display the choices made by players and their scores
    computerRoundChoiceToDisplay.src = `/imgs/${computerRoundChoice}.svg`;
    computerScoreDisplayed.textContent = computerScore;
    humanRoundChoiceToDisplay.src = `/imgs/${humanRoundChoice}.svg`;
    humanScoreDisplayed.textContent = humanScore;

    // condition for checking if there is a winner
    if (computerScore === WINNING_SCORE || humanScore === WINNING_SCORE) {
        displayWinner();
    }

}

// Select buttons, the game container 
const gameBtns = document.querySelector(".game-btns");
const gameContainer = document.querySelector(".game-container");
// create element for displaying the winner
const text = document.createElement("h2");
gameContainer.appendChild(text);
// create button for starting a new game
const newGameButton = document.createElement("button");


// Event listener for playing the game
const gameInputs = document.querySelectorAll("input");
    for (const input of gameInputs) {
        input.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            playRound(getComputerChoice(), e.target.alt);
        })
    }
    
    // Display winner
    function displayWinner() {
        let winner;
    humanScore === WINNING_SCORE ? winner = "YOU" : winner = "COMPUTER";
    // Hide the game buttons and game space
    gameBtns.classList.add("hidden");
    gameSpace.classList.add("hidden");
    // Show the congratulatory message
    text.classList.add("congrats");
    text.textContent = `THE WINNER IS ${winner}!`;
    // Show the button for new game
    gameContainer.appendChild(newGameButton);
    newGameButton.type = "reset";
    newGameButton.innerText = "NEW GAME?";
    newGameButton.classList.add("btn");
    
    newGameButton.addEventListener("click", (e) =>{
        restartGame();

    })
}


// Restart the Game
function restartGame() {
    // Reset the scores
    humanScore = 0;
    computerScore = 0;
    computerScoreDisplayed.textContent = computerScore;
    humanScoreDisplayed.textContent = humanScore;
    
    // Show game buttons and game space
    gameBtns.classList.remove("hidden");
    gameSpace.classList.remove("hidden");
    
    // Reset round choice imgs 
    computerRoundChoiceToDisplay.src = '';
    humanRoundChoiceToDisplay.src = '';
    
    // Erase congratulatory message and button
    text.textContent = '';
    newGameButton.innerText = '';
    gameContainer.removeChild(newGameButton);

}