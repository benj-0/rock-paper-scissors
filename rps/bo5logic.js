
// This function plays a best of five match of rock, paper, scissors
function bestOfFive() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tieCount = 0;

    // Loop through five rounds of the game
    for (let i = 0; i < 5; i++) {
        // Prompt the user for input and validate it
        let playerSelection = prompt("Choose rock, paper, or scissors.");
        while (!["rock", "paper", "scissors"].includes(playerSelection?.toLowerCase())) {
            playerSelection = prompt("Invalid input. Please choose rock, paper, or scissors.");
        }

        // Generate the computer's selection and play a round
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update the win/loss/tie counts based on the round result
        if (result.includes("win")) {
            playerWinCount++;
        } else if (result.includes("lose")) {
            computerWinCount++;
        } else {
            tieCount++;
        }
    }
    
    // Print the final results of the game
    console.log(`You won ${playerWinCount} times, the computer won ${computerWinCount} times, there were ${tieCount} ties.`);
    if (playerWinCount > computerWinCount) {
        console.log(`You won the best of five match!`);
    } else if (playerWinCount === 0 && computerWinCount === 0 && tieCount === 5) {
        console.log(`You had five ties! (a 0.41% probability!)`);
    } else if (computerWinCount > playerWinCount) {
        console.log(`You lost the best of five match.`);
    } else {
        console.log(`No one won the best of five match.`);
    }
}

// This function calls the bestOfFive function to start the game
bestOfFive();