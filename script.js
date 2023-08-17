let playerScore = 0;
let compScore = 0;
let gamesPlayed = 0;
let res = '';

function game(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        res = 'tie';
    }
    if (
        (playerChoice === "ROCK" && compChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && compChoice === "ROCK") ||
        (playerChoice === 'SCISSORS' && compChoice === 'PAPER')
    ) {
        playerScore++;
        res = 'player';
    }
    if (
        (compChoice === "ROCK" && playerChoice === 'SCISSORS') ||
        (compChoice === 'PAPER' && playerChoice === "ROCK") ||
        (compChoice === 'SCISSORS' && playerChoice === 'PAPER')
    ) {
        compScore++;
        res = 'computer';
    }
    console.log(res);
    updateMsg(res, playerChoice, compChoice)
}

let choices = ["rock", "paper", "scissors"]
function getcomputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)].toUpperCase();
};

function gameOver () {
    return playerScore === 5 || compScore === 5;
}


const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('gameMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerChoice) {
    let compChoice = getcomputerChoice();
    console.log(compChoice)
    console.log(playerChoice)
    game(playerChoice, compChoice)
    updateSigns(playerChoice, compChoice)
    updateScore()
    if (gameOver()) {
        if (playerScore === 5) {
            alert("Game over! You won!")
        }
        else {
            alert("Game over! Computer won!")
        }
        playerScore = 0;
        compScore = 0;
        resetScore()
    }
}

function updateSigns(playerChoice, compChoice) {
    switch (playerChoice) {
        case 'ROCK':
            playerSign.textContent = '✊'
            break
          case 'PAPER':
            playerSign.textContent = '✋'
            break
          case 'SCISSORS':
            playerSign.textContent = '✌'
            break
    }
    switch (compChoice) {
        case 'ROCK':
          computerSign.textContent = '✊'
          break
        case 'PAPER':
          computerSign.textContent = '✋'
          break
        case 'SCISSORS':
          computerSign.textContent = '✌'
          break
      }
}

function updateScore() {
    if (res === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    }
    else if (res === 'player') {
        scoreInfo.textContent = "You win!"
        playerScorePara.textContent = `Player score: ${playerScore}`
    }
    else if (res === 'computer') {
        scoreInfo.textContent = "You lose!"
        computerScorePara.textContent = `Computer score: ${compScore}`
    }
}

function updateMsg(result, playerChoice, compChoice) {
    if (result === 'tie') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} ties with ${compChoice.toLowerCase()}`
        return
    }
    else if (result === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} beats ${compChoice.toLowerCase()}`
        return
    }
    else if (result === 'computer'){
        scoreMessage.textContent = `${capitalizeFirstLetter(compChoice)} beats ${playerChoice.toLowerCase()}`
    }
}

function capitalizeFirstLetter(word) {
    word = word.toLowerCase();
    return (word[0].toUpperCase() + word.slice(1))
}

function resetScore() {
    computerScorePara.textContent = "Computer score: 0";
    playerScorePara.textContent = "Player score: 0"
    computerSign.textContent = "❔";
    playerSign.textContent = "❔";
    scoreMessage.textContent = "First to score 5 points wins the game";
    scoreInfo.textContent = "Choose your weapon";
}