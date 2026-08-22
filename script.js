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
function getHumanChoice() {
    let humanChoice = prompt('Rock, Paper or Scissors?',).toLowerCase();
    return humanChoice;
}

// Create the players score variables
let humanScore = 0, computerScore = 0;

// The logic for playing a single round
function playRound(computerRoundChoice, humanRoundChoice) {
    let roundStatus;
    if (computerRoundChoice === humanRoundChoice) {
        roundStatus = "Friendship";
    } else {
        switch(computerRoundChoice) {
            case "rock":
                {
                    switch(humanRoundChoice) {
                        case "paper":
                            roundStatus = "Human";
                            ++humanScore;
                            break;
                        case "scissors":
                            roundStatus = "Computer";
                            ++computerScore;
                            break;
                    }
                }
                break;
            case "paper":
                {
                    switch(humanRoundChoice) {
                        case "rock":
                            roundStatus = "Computer";
                            ++computerScore;
                            break;
                        case "scissors":
                            roundStatus = "Human";
                            ++humanScore;
                            break;
                    }
                }
                break;
            case "scissors":
                {
                switch(humanRoundChoice) {
                        case "rock":
                            roundStatus = "Human";
                            ++humanScore;
                            break;
                        case "paper":
                            roundStatus = "Computer";
                            ++computerScore;
                            break;
                    }
                }
        }

        
    }

    return `Computer drew ${computerRoundChoice}.\nHuman drew ${humanRoundChoice}.\nRound Won By: ${roundStatus}\nHuman: ${humanScore}\nComputer: ${computerScore}`
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