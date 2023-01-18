function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

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
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(
            playerSelection
        )}`;
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    )
        return `You Won! ${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
        )}`;
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
