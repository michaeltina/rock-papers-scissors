const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button')
const resultsDiv = document.createElement('div')
const humanScoreDiv = document.createElement('div');
const compScoreDiv = document.createElement('div');

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

document.body.append(rock, paper, scissors, resultsDiv, humanScoreDiv, compScoreDiv)

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

let humanScore = 0;
let computerScore = 0; 

function disableButtons(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function playRound (humanChoice) {
    const computerChoice = getComputerChoice(1, 3)

    if (humanChoice === computerChoice){
        resultsDiv.textContent = "It's a tie! Try again"
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore += 1;
        resultsDiv.textContent = 'You Win'
    } else {
        computerScore += 1;
        resultsDiv.textContent = 'Computer Wins'
    } 

    humanScoreDiv.textContent = `Human Score: ${humanScore}`
    compScoreDiv.textContent = `Computer Score: ${computerScore}`

    console.log("SCore updated - HUman:", humanScore, "Computer", computerScore)

    if (humanScore >= 5) {
        resultsDiv.textContent = "You won the game!";
        disableButtons();
    } else if (computerScore >= 5) {
        resultsDiv.textContent = "Computer has won the game";
        disableButtons();
    }
}