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
    //change player choice to all lowercase
    playerChoice = playerChoice.toLowerCase();
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
            return("You Lose! Paper beats Rock!");
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
            return("It's a draw, computer also chose Paper!");
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
            return("You Win! Scissors beats Paper!");
        } 
    }
    //returns You Lose or You Win with a description of how the choice
    //returned that result - NB - only need to return result not log it
    //player input should be case insensitive

}

for (let i = 0; i < 5; i ++) {
const player = prompt("Your move: ")
const compChoice = getComputerChoice();

const result = playRound(compChoice, player);
console.log(result);
}
//Function that plays the game over 5 rounds, each time printing out the 
//results with console.log