
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

scisBtn.addEventListener('click', () => gameStart('Scissors'))
rockBtn.addEventListener('click', () => gameStart('Rock'))
paperBtn.addEventListener('click', () => gameStart('Paper'))

function gameStart(playersChoice) {
    console.log(playersChoice);
        const computerChoice = getComputerChoice();
        playerChoice = playersChoice;
        playRound(computerChoice, playersChoice);
        roundScoring(computerChoice);

}

function roundScoring(computerChoice) {
    if (roundVictor === 'player') {
        resultMsg.textContent = `Round Won! ${playerChoice} beats ${computerChoice}.`;
        playScorecard.textContent = `You: ${playerScore}`;
    }
    else if (roundVictor === 'computer') {
        resultMsg.textContent = "Round Lost!";
        compScorecard.textContent = `Computer: ${computerScore}`;

    }else if (roundVictor === 'tie')
        resultMsg.textContent = "Tied the round"
}
    





