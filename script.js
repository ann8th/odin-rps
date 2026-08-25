// Define winning score constant
const WINNING_SCORE = 3;

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

// Get the human choice
// function getHumanChoice() {
//     let humanChoice = prompt('Rock, Paper or Scissors?',).toLowerCase();
//     return humanChoice;
// }

// Create the players score variables and select the elements for displayed values
let humanScore = 0, computerScore = 0;

const computerScoreDisplayed = document.querySelector(".computer");
computerScoreDisplayed.textContent = computerScore;
const humanScoreDisplayed = document.querySelector(".human");
humanScoreDisplayed.textContent = humanScore;

// The logic for playing a single round
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
            break;
    }

}


// The logic for playing the game
function playGame() {    
    while (humanScore !== WINNING_SCORE && computerScore !== WINNING_SCORE) {
        let computerSelection = getComputerChoice(),
            humanSelection = getHumanChoice();
        console.log(playRound(computerSelection, humanSelection));

        if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
        let winner;
        humanScore === WINNING_SCORE ? winner = "HUMAN" : winner = "COMPUTER";
        console.log(`GAME WON BY ${winner}`);
        }
    }

}

playGame();