// This function randomly generates a computer selection of rock, paper, or scissors
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// This function plays a single round of rock, paper, scissors and returns the result as a string
function playRound(playerSelection) {
    let computerSelection = computerPlay();

    // find outcompe of game
    if (playerSelection === computerSelection) {
        return `Tie! ${playerSelection} ties with ${computerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

let div = document.getElementById("resultdiv");
let resultText = document.createElement("p");
let playerScoreText = document.getElementById("playerscore");
let pcScoreText = document.getElementById("pcscore");

let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScissors = document.getElementById("scissors");

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

btnRock.addEventListener("click", () => {
    message = playRound("rock");
    resultText.innerHTML = "";
    resultText.append(message);
    div.append(resultText);

    if (message.includes("win")) {
        playerWinCount++;
    } else if (message.includes("lose")) {
        computerWinCount++;
    } else {
        tieCount++;
    }
    playerScoreText.innerHTML = `Player: ${playerWinCount}`;
    pcScoreText.innerHTML = ` PC: ${computerWinCount}`;
    if (playerWinCount === 5) {
        resultText.innerHTML = "<span id='wintext'>Player Wins!</span>";
        setTimeout(() => {
            location.reload();
          }, 1000);
    }
    if (computerWinCount === 5) {
        resultText.innerHTML = "<span id='wintext'>PC Wins!</span>";
        setTimeout(() => {
            location.reload();
          }, 1000);
    }
});
btnPaper.addEventListener("click", () => {
    message = playRound("paper");
    resultText.innerHTML = "";
    resultText.append(message);
    div.append(resultText);

    if (message.includes("win")) {
        playerWinCount++;
    } else if (message.includes("lose")) {
        computerWinCount++;
    } else {
        tieCount++;
    }
    playerScoreText.innerHTML = `Player: ${playerWinCount}`;
    pcScoreText.innerHTML = ` PC: ${computerWinCount}`;
    if (playerWinCount === 5) {
        resultText.innerHTML = "<span id='wintext'>Player Wins!</span>";
        setTimeout(() => {
            location.reload();
          }, 1000);
    }
    if (computerWinCount === 5) {
        resultText.innerHTML = "<span id='wintext'>PC Wins!</span>";
        setTimeout(() => {
            location.reload();
          }, 1000);
    }
});
btnScissors.addEventListener("click", () => {
    message = playRound("scissors");
    resultText.innerHTML = "";
    resultText.append(message);
    div.append(resultText);

    if (message.includes("win")) {
        playerWinCount++;
    } else if (message.includes("lose")) {
        computerWinCount++;
    } else {
        tieCount++;
    }
    playerScoreText.innerHTML = `Player: ${playerWinCount}`;
    pcScoreText.innerHTML = ` PC: ${computerWinCount}`;
    if (playerWinCount === 5) {
        resultText.innerHTML = "<span id='wintext'>Player Wins!</span>";
        setTimeout(() => {
            location.reload();
          }, 1000);
    }
    if (computerWinCount === 5) {
        resultText.innerHTML = "<span id='wintext'>PC Wins!</span>";
        setTimeout(() => {
            location.reload();
          }, 1000);
    }
});
