let playerScore = 0;
let computerScore = 0;
let round = 0;
let computerSelection;
let playerSelection;

const buttons = document.querySelectorAll('button');
const scoreBoard = document.querySelector('.scoreBoard');

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0: return computerSelection = "rock";
        break;
        case 1: return computerSelection = "paper";
        break;
        case 2: return computerSelection = "scissors";
    }
}











function playRound(playerSelection, computerSelection) {
    playerSelection = buttonID;
    return compareSelection(playerSelection, computerPlay());
}

const playerSelection = 'rock';
const computerSelection = computerPlay(
console.log(playRound(playerSelection,computerSelection)));