const menuDisplay = document.querySelector("div.menu"),
    moves = document.querySelectorAll("button.move"),
    playAgainButton = document.getElementById("play-again-btn"),
    resultDisplay = document.querySelector("div.result"),
    scoreDisplay = document.getElementById("score");

let score = 0;

moves.forEach((move) => {
    move.onclick = (e) => {
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice();
        toggleDisplay();
        const result = playRound(playerSelection, computerSelection);
        displayResult(result, playerSelection, computerSelection);
        updateScore(result);
    };
});

playAgainButton.addEventListener("click", toggleDisplay);

function updateScore(message) {
    if (message === "YOU WIN") {
        score++;
        scoreDisplay.textContent = score;
    }
}

function displayResult(message, playerSelection, computerSelection) {
    resultDisplay.querySelector("h5").textContent = message;
    resultDisplay
        .querySelector(".player-choice > div")
        .setAttribute("class", `display-move choice m-${playerSelection}`);
    resultDisplay
        .querySelector(".computer-choice > div")
        .setAttribute("class", `display-move choice m-${computerSelection}`);
    resultDisplay
        .querySelector(".player-choice img")
        .setAttribute("src", getMoveImage(playerSelection));
    resultDisplay
        .querySelector(".computer-choice img")
        .setAttribute("src", getMoveImage(computerSelection));
}

function toggleDisplay() {
    menuDisplay.classList.toggle("hide");
    resultDisplay.classList.toggle("hide");
}

function getMoveImage(move) {
    if (move === "rock") {
        return "images/icon-rock.svg";
    }
    if (move === "paper") {
        return "images/icon-paper.svg";
    }
    if (move === "scissors") {
        return "images/icon-scissors.svg";
    }
}

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const choice = Math.round(Math.random() * 2);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    )
        return "YOU LOSE";
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    )
        return "YOU WIN";
    else return "IT'S A TIE";
}
