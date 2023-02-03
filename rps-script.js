let playerScore = 0;
let computerScore = 0;

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

const game = () => {
    const validInputs = ['rock', 'paper', 'scissors'];
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`)
        let p = prompt();

        if (!p) return 'You quit the game.';
    
        while (!validInputs.includes(p.trim().toLowerCase())) {
            console.log('Input invalid. Try again with these values (rock, paper, scissors).')
            p = prompt();
            if (!p) return 'You quit the game.';
            continue;
        }

        const c = getComputerChoice();
        console.log(playRound(p.trim(),c));
        console.log(`Player score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
        console.log('==============================')
    }

    if (playerScore > computerScore) return 'You Won!!!'
    else if (playerScore === computerScore) return 'Draw!!!'
    else return 'You Lost!!!'
}

console.log(game())