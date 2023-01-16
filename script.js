//Function that returns a random choice from the computer
function computerChoice() {
    //make array with three values, rock paper and scissors
    const choiceArr = ["Rock", "Paper", "Scissors"];

    //choose a random number between 1 and 3 inclusive
    let rdmNo = Math.floor(Math.random() * 3) + 1;

    //use this number to choose the item in the array and return it    
    return choiceArr[(rdmNo - 1)];


}
    

//Function that takes computer choice and player choice

    //compares the two to see who won
    //returns You Lose or You Win with a description of how the choice
    //returned that result - NB - only need to return result not log it
    //player input should be case insensitive
//Function that plays the game over 5 rounds, each time printing out the 
//results with console.log