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

// Getting user chose from DOM
function getUserChoice(el) {
  if (el.classList.contains("fa-hand-back-fist")) {
    return "rock";
  } else if (el.classList.contains("fa-paper-plane")) {
    return "paper";
  } else if (el.classList.contains("fa-scissors")) {
    return "scissors";
  }
}

// Result from comparing user and computer choice
function fighting(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return `It's a tie, you both have chosen ${userChoice}`;
  } else {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return `You Win! ${userChoice} beats ${computerChoice}`;
    } else {
      return `You Lose! ${computerChoice} beats ${userChoice}`;
    }
  }
}

function resetAll() {
  btn.classList.add("hide");
  userNumber = 0;
  computerNumber = 0;
  playerScore.innerHTML = userNumber;
  computerScore.innerHTML = computerNumber;
  text.removeChild(match);
  text.innerHTML = "Are you ready to play?";
  keepWorking = true;
}

const elements = document.querySelectorAll(".element");
const text = document.querySelector(".text");
const playerScore = document.querySelector(".score__player__result");
const computerScore = document.querySelector(".score__pc__result");
const match = document.createElement("p");
match.style = "font-size: 42px";
const btn = document.querySelector(".replay");

let userNumber = 0;
let computerNumber = 0;
let keepWorking = true;

function doIContinue() {
  if (computerNumber >= 5) {
    keepWorking = false;
  }
  if (userNumber >= 5) {
    keepWorking = false;
  }
}

function afterClick(e) {
  if (keepWorking) {
    const computer = getComputerChoice();
    const user = getUserChoice(e.currentTarget);
    result = fighting(user, computer);

    text.innerHTML = result;
    if (result[4] === "W") {
      userNumber++;
    } else if (result[4] === "L") {
      computerNumber++;
    }
    playerScore.innerHTML = userNumber;
    computerScore.innerHTML = computerNumber;

    if (userNumber == 5 || computerNumber == 5) {
      userNumber == 5
        ? (match.innerText = `You have won the match!`)
        : (match.innerText = `You have lost the match!`);
      text.appendChild(match);
      btn.classList.remove("hide");
    }
    doIContinue();
  }
}

elements.forEach(function (item) {
  item.addEventListener("click", afterClick);
});

btn.addEventListener("click", resetAll);
