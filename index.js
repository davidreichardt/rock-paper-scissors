const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const roundDescription = document.querySelector('.round-description');
let humanScore = 0;
let computerScore = 0;
const humanScoreboard = document.getElementById('human-score');
const computerScoreboard = document.getElementById('computer-score');

rock.addEventListener('click', clicked);
paper.addEventListener('click', clicked);
scissors.addEventListener('click', clicked);

function clicked(humanChoice) {
  humanChoice = this.id;
  playRound(humanChoice);
}

function getComputerChoice() {
  let choice;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
  }
  return choice;
}

function resetGame() {
  let message = document.querySelector('.message');
  let message2 = document.querySelector('.message2');
  humanScore = 0;
  computerScore = 0;
  humanScoreboard.innerText = humanScore;
  computerScoreboard.innerText = computerScore;
  message.remove();
  message2.remove();
}

function updateScore() {
  humanScoreboard.innerText = humanScore;
  computerScoreboard.innerText = computerScore;
  const winnerMessage = document.createElement('p');
  winnerMessage.classList.add('message2');

  if (computerScore === 5) {
    winnerMessage.textContent = 'Computer won this game!';
    roundDescription.appendChild(winnerMessage);
    setTimeout(resetGame, 1000);
  }
  else if (humanScore === 5) {
    winnerMessage.textContent = 'You won this game!';
    roundDescription.appendChild(winnerMessage);
    setTimeout(resetGame, 1000);
  }
}

function addMessage(matchResultMessage) {
  matchResultMessage.classList.add('message');
  roundDescription.appendChild(matchResultMessage);
}

function appendMatchResult(matchResultMessage) {
  let existingMessage = document.querySelector('.message');
  let messageExists = existingMessage ? true : false;

  if (!messageExists) {
    addMessage(matchResultMessage);
  } else {
    existingMessage.remove();
    addMessage(matchResultMessage);
  }
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  let matchResultMessage = document.createElement('p');

  if (computerChoice === humanChoice) {
    matchResultMessage.textContent = `Computer chose ${computerChoice} and you chose ${humanChoice}, it's a draw!`;
    appendMatchResult(matchResultMessage);
    updateScore();
    console.log(
      `Computer chose ${computerChoice} and you chose ${humanChoice}, it's a draw!`
    );
  } else if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'rock')
  ) {
    matchResultMessage.textContent = `Computer chose ${computerChoice} and you chose ${humanChoice}, you lose this round!`;
    appendMatchResult(matchResultMessage);
    computerScore++;
    updateScore();
    console.log(
      `Computer chose ${computerChoice} and you chose ${humanChoice}, you lose this round!`, humanScore, computerScore
    );
  } else {
    matchResultMessage.textContent = `Computer chose ${computerChoice} and you chose ${humanChoice}, you win this round!`;
    appendMatchResult(matchResultMessage);
    humanScore++;
    updateScore();
    console.log(
      `Computer chose ${computerChoice} and you chose ${humanChoice}, you win this round!`, computerScore, humanScore
    );
  }
}
