let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const playerPickScreen = document.querySelector('.player-pick-screen');
const computerPickScreen = document.querySelector('.computer-pick-screen');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const roundResult = document.querySelector('.round-result');
const scoreContainer = document.querySelector('.score');
const playAgainButton = document.querySelector('#play-again-button');
const matchResult = document.querySelector('.match-result');
playAgainButton.style.display = 'none';
playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;



const getComputerChoice = () => {
    const rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1) {
        return 'Rock';
    } else if (rand === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

const playRound = (playerSelection, computerSelection) => {
    const playerSelectionLC = playerSelection.toLowerCase();

    if (playerSelectionLC === 'rock') {
        if (computerSelection === 'Rock') {
            return 'It\'s a draw! Rock beats each other'
        } else if (computerSelection === 'Paper') {
            computerScore++;
            return 'You lose this round! Rock is beaten by paper'
        } else {
            playerScore++;
            return 'You win this round! Rock beats scissors'
        }


    } else if (playerSelectionLC === 'paper') {
        if (computerSelection === 'Rock') {
            playerScore++;
            return 'You win this round! Paper beats rock'
        } else if (computerSelection === 'Paper') {
            return 'It\'s a draw! Paper beats each other'
        } else {
            computerScore++;
            return 'You lose this round! Paper is beaten by scissors'
        }
    } else if (playerSelectionLC === 'scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            return 'You lose this round! Scissors is beaten by rock'
        } else if (computerSelection === 'Paper') {
            playerScore++;
            return 'You win this round! Scissors beats paper'
        } else {
            return 'It\'s a draw! Scissors beats each other'
        }
    } else {
        return 'Invalid input!'
    }
}

const game = (e) => {

    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    playerPickScreen.textContent = playerSelection;
    computerPickScreen.textContent = computerSelection;

    roundResult.textContent = playRound(playerSelection.toLowerCase(), computerSelection);

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        playAgainButton.style.display = 'inline-block';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        if (playerScore > computerScore) {
            matchResult.textContent = 'You Won!';
        } else {
            matchResult.textContent = 'You Lost!';
        }
        
        scoreContainer.appendChild(playAgainButton);

    }
}

const reset = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    playAgainButton.style.display = 'none';
    matchResult.textContent = '';
    roundResult.textContent = '';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    playerPickScreen.textContent = '';
    computerPickScreen.textContent = '';
}

// Rock Button
rockButton.addEventListener('click', game);

// Paper Button
paperButton.addEventListener('click', game);

// Scissors Button
scissorsButton.addEventListener('click', game);

// Play Again Button
playAgainButton.addEventListener('click', reset);


// console.log(game())