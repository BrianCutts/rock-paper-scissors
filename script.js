//Function that returns a random choice from the computer
function getComputerChoice() {
    //make array with three values, rock paper and scissors
    const choiceArr = ["Rock", "Paper", "Scissors"];

    //choose a random number between 1 and 3 inclusive
    let rdmNo = Math.floor(Math.random() * 3) + 1;

    //use this number to choose the item in the array and return it    
    return choiceArr[(rdmNo - 1)];
}
    

//Function that takes computer choice and player choice 
function playRound(computerChoice, playerChoice) {
    
    //compares the two to see who won
    
    //player chose rock
    if (playerChoice === "rock" ) {
        //if comp is rock
        if (computerChoice === "Rock") {
            return("It's a draw! Computer also chose rock!");
        }
        //if comp is scissors
        if (computerChoice === "Scissors") {
            return("You Win! Rock beats Scissors!");
        }           
        //if comp is paper
        if (computerChoice === "Paper") {
            return("Computer chose paper. \n You Lose! Paper beats Rock!");
        } 
    }
    //player chose paper
    if (playerChoice === "paper" ) {
        //if comp is rock
        if (computerChoice === "Rock") {
            return("You Win! Paper beats Rock!");
        }
        //if comp is scissors
        if (computerChoice === "Scissors") {
            return("You Lose! Scissors beats Paper!");
        }           
        //if comp is paper
        if (computerChoice === "Paper") {
            return("Computer also chose paper. \nIt's a draw!");
        } 
    }

    if (playerChoice === "scissors" ) {
        //if comp is rock
        if (computerChoice === "Rock") {
            return("You Lose! Rock beats Scissors!");
        }
        //if comp is scissors
        if (computerChoice === "Scissors") {
            return("It's a draw, computer also chose Scissors!");
            
        }           
        //if comp is paper
        if (computerChoice === "Paper") {
            return("Computer chose paper. \n You Win! Scissors beats Paper!");
        } 
    }
    //returns You Lose or You Win with a description of how the choice
    //returned that result - NB - only need to return result not log it
    //player input should be case insensitive

}
let player;
let compChoice = getComputerChoice();
const buttons = document.querySelectorAll('button');
let result;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        player = button.id;
        let compChoice = getComputerChoice();
        result = playRound(compChoice, player);
        console.log(result);
    });
});

