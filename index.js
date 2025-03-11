let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice;
    switch (Math.floor(Math.random() * 3)) {
        case 0: 
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
   let userInput = window.prompt("Enter 'Rock', 'Paper', or 'Scissors'... ");
    return userInput.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log(`Computer chose ${computerChoice} and you chose ${humanChoice}, it's a draw!`);
    } 
    else if (
        computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "scissors" && humanChoice === "paper" ||
        computerChoice === "paper" && humanChoice === "rock"
    ) {
        computerScore++;
        console.log(`Computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`);
    }
    else {
        humanScore++;
        console.log(`Computer chose ${computerChoice} and you chose ${humanChoice}, you win!`)
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);