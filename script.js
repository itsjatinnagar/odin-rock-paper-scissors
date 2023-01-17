function getComputerChoice() {
    const moves = ["Rock", "Paper", "Scissors"];
    const choice = Math.round(Math.random() * 2);
    return moves[choice];
}
