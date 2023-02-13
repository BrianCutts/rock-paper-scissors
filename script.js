
let roundVictor = '';
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choiceArr = ["Rock", "Paper", "Scissors"];
    let rdmNo = Math.floor(Math.random() * 3) + 1;  
    return choiceArr[(rdmNo - 1)];
}

function playRound(computerChoice, playerChoice) {
  
    if(playerChoice === computerChoice)
        roundVictor = 'tie';
    
    if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
        roundVictor = 'player';
        playerScore++;
    }

    if ((computerChoice === "Rock" && playerChoice === "Scissors") || (computerChoice === "Paper" && playerChoice === "Rock") || (computerChoice === "Scissors" && playerChoice === "Paper")) {
        roundVictor = 'computer';
        computerScore++;
    }        
}

function gameEndCheck() {
    return playerScore === 5 || computerScore === 5
}

const playScorecard = document.getElementById('playerScore');
const compScorecard = document.getElementById('compScore');
const resultMsg = document.getElementById('game-message');
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scisBtn = document.getElementById("Scissors");
const gameOverMsg = document.getElementById('gameOverDisp');
const retryBtn = document.getElementById('retryButton');
const endingModal = document.getElementById('restartModal');

scisBtn.addEventListener('click', () => gameStart('Scissors'))
rockBtn.addEventListener('click', () => gameStart('Rock'))
paperBtn.addEventListener('click', () => gameStart('Paper'))
retryBtn.addEventListener('click', () => restartGame());

function gameStart(playersChoice) {
    console.log(playersChoice);
        const computerChoice = getComputerChoice();
        playerChoice = playersChoice;
        playRound(computerChoice, playersChoice);
        roundScoring(computerChoice);

        if (gameEndCheck()){
            displayGameOver();
            gameOverMessage();
        }

}

function roundScoring(computerChoice) {
    if (roundVictor === 'player') {
        resultMsg.textContent = `Round Won! ${playerChoice} beats ${computerChoice}.`;
        playScorecard.textContent = `You: ${playerScore}`;
    }
    else if (roundVictor === 'computer') {
        resultMsg.textContent = `Round Lost! ${computerChoice} beats ${playerChoice}`;
        compScorecard.textContent = `Computer: ${computerScore}`;

    }else if (roundVictor === 'tie')
        resultMsg.textContent = "Tied the round"
}

function displayGameOver() {
    endingModal.style.visibility = 'visible';
}


function gameOverMessage () {
return playerScore > computerScore ? (gameOverMsg.textContent = "You Won!") : (gameOverMsg.textContent = "Oh no! You Lost.");
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playScorecard.textContent = "Player: 0";
    compScorecard.textContent = "Computer: 0";
    endingModal.style.visibility = 'hidden';
    resultMsg.textContent = "First to five wins!";
}
    





