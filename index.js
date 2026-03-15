function getComputerChoice (min=1, max=3) {
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


function getHumanChoice () {
    let choice = prompt('Choose between rock, paper and scissors! ');
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0; 

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return "It's a tie! Try again"
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore += 1;
        return 'You Win'
    } else {
        computerScore += 1;
        return 'Computer Wins'
    } 
}

for (let round = 1; round <= 5; round++){
    console.log(`You are now playing round ${round}`)

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(1, 3); 

    console.log("The computer chose:", computerChoice)
    console.log("You chose:", humanChoice)



    playRound(humanChoice, computerChoice); 

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}

console.log('Game Over');