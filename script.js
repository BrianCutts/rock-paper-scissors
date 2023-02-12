
let playerChoice = '';
let roundVictor = '';
let playerScore = 0;
let computerScore = 0;
let resultString;




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
const playScorecard = document.getElementById('playerScore');
const compScorecard = document.getElementById('compScore');
const resultMsg = document.getElementById('game-message');
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scisBtn = document.getElementById("Scissors");

scisBtn.addEventListener('click', () => gameStart('Scissors'))
rockBtn.addEventListener('click', () => gameStart('Paper'))
paperBtn.addEventListener('click', () => gameStart('Rock'))

function gameStart(playersChoice) {
        const computerChoice = getComputerChoice();
        playRound(computerChoice, playersChoice);
        roundScoring();
}

function roundScoring() {
    if (roundVictor === 'player') {
        resultMsg.textContent = "You Won!";
        playScorecard.textContent = `You: ${playerScore}`;

    }
    else if (roundVictor === 'computer') {
        resultMsg.textContent = "You Lost!";
        compScorecard.textContent = `Computer: ${computerScore}`;

    }else if (roundVictor === 'tie')
        resultMsg.textContent = "Tie!"
}
    //returns You Lose or You Win
    //player input should be case insensitive



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        
    });
});

