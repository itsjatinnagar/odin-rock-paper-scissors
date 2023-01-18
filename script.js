function getComputerChoice() {
    const moves = ["Rock", "Paper", "Scissors"];
    const choice = Math.round(Math.random() * 2);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    )
        return `You Lose! ${
            computerSelection.charAt(0).toUpperCase() +
            computerSelection.slice(1)
        } beats ${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        }`;
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    )
        return `You Won! ${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        } beats ${
            computerSelection.charAt(0).toUpperCase() +
            computerSelection.slice(1)
        }`;
    else return "It's a tie!";
}

function game() {
    let playerScore = 0,
        computerScore = 0;
    for (let index = 0; index < 5; index++) {
        const playerSelection = prompt(
            "Choose any one: (Rock, Paper, Scissors)"
        );
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result.includes("Won")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log("Congrats! You won the game.");
    } else {
        console.log("Oops! You lose.");
    }
}
