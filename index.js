let humanScore = 0;
let computerScore = 0;

function getComputerChoice (min, max) {
    let choice = Math.floor(Math.random() * (max - min + 1) + min); 

    if (choice === 1) {
        return "rock"
    }

    else if (choice === 2) {
        return 'paper'
    }

    else {
        return 'scissors'
    }
    
}

getComputerChoice(1, 3)



function getHumanChoice () {
    return prompt('Choose between rock, paper and scissors! ');
}



function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("It's a tie! Try again")
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log('You Win')
    } else {
        console.log('Computer Wins')
    } 
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


playRound(humanChoice, computerChoice);

console.log("Human chose:", humanChoice, "Type:", typeof humanChoice);
console.log("Computer chose:", computerChoice, "Type:", typeof computerChoice);