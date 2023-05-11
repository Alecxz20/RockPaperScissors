// Computer randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function fighting(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie, you both have chosen ${playerSelection}`;
  } else {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();

    const userChoice = prompt(
      "Chose 'rock' 'paper' or 'scissors'"
    ).toLowerCase();

    const result = fighting(userChoice, computerChoice);
    console.log(result);

    if (computerChoice === userChoice) {
      i--;
    } else {
      if (result[4] === "W") {
        userScore++;
      } else if (result[4] === "L") {
        computerScore++;
      }
    }
  }

  if (userScore > computerScore) {
    return `Congrats, you have won the game: 
    you: ${userScore}
    computer: ${computerScore}`;
  } else {
    return `Oh no, you have lost the game: 
    you: ${userScore}
    computer: ${computerScore}`;
  }
}

const final = game();
console.log(final);
