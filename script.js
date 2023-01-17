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
