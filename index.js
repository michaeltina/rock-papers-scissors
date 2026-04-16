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
    return prompt('Choose between rock, paper and scissors! ').toLowerCase();
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

/* for (let round = 1; round ; round++){
    console.log(`You are now playing round ${round}`)

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(1, 3); 

    console.log("The computer chose:", computerChoice)
    console.log("You chose:", humanChoice)



    playRound(humanChoice, computerChoice); 

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore); 
} */
console.log('Game Over');

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button')

rock.textContent = 'rock';
rock.style.padding = '10px 20px'
rock.style.marginRight = '15px'

paper.textContent = 'paper';
paper.style.padding = '10px 20px'
paper.style.marginRight = '15px'

scissors.textContent = 'scissors';
scissors.style.padding = '10px 20px'
scissors.style.marginRight = '15px'


rock.addEventListener('click', () => {
    playRound('rock');
})

paper.addEventListener('click', () => {
    playRound('paper');
})

scissors.addEventListener('click', () => {
    playRound('scissors');
})

const results = document.createElement('div')

results.textContent = 'You win';

document.body.append(rock, paper, scissors, results)
