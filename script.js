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

// let i = 0
//     , rock = 0
//     , paper = 0
//     , scissors = 0;


// do {
//     let testVal = getComputerChoice(); 
//     testVal === "rock" ? rock++ : 
//     testVal === "paper" ? paper++ :
//     testVal === "scissors" ? scissors++ : console.log(testVal);
//     i++;
// } while (i < 30);

// console.log(`rock=${rock}\npaper=${paper}\nscissors=${scissors}\ni=${i}`);

