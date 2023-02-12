
let playerChoice;
let roundVictor;
let playerScore;
let computerScore;
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
    }
        
}
    //returns You Lose or You Win with a description of how the choice
    //returned that result - NB - only need to return result not log it
    //player input should be case insensitive



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        let compChoice = getComputerChoice();
        result = playRound(compChoice, playerChoice);
    });
});

