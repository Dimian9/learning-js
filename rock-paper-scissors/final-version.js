let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}; // default operator in case first part is falsy

updateScoreElement();

/*
if (!score) {
    score = {
    wins: 0,
    losses: 0,
    ties: 0
    }
} 
*/

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    })

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    })

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
    playGame('scissors');
})

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  }

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper')
    } else if (event.key === 's') {
        playGame('scissors')
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        showResetConfirmation();
    }
})


document.querySelector('.js-reset-score-button')
    .addEventListener('click', () => {
        showResetConfirmation();
    })


function showResetConfirmation() {
    document.querySelector('.js-reset-confirmation')
        .innerHTML = `Are you sure you want to reset the score? 
            <button class="js-reset-confirm-yes reset-confirm-button">
              Yes
            </button>
            <button class="js-reset-confirm-no reset-confirm-button">
              No
            </button>
        `
    document.querySelector('.js-reset-confirm-yes')
        .addEventListener('click', () => {
            resetScore();
            hideResetConfirmation();
        })

    document.querySelector('.js-reset-confirm-no')
        .addEventListener('click', () => {
            hideResetConfirmation();
        })
}


function hideResetConfirmation() {
    document.querySelector('.js-reset-confirmation')
        .innerHTML = '';

}



document.querySelector('.auto-play-button')
    .addEventListener('click', () => {
        autoPlay();
    })


function playGame(playerMove) {
    
    const computerMove = pickComputerMove(); //global variable, must be outside the function's scope/curly braces for onclick to access

    let result = '';

    if (playerMove === 'scissors') {
        
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.' ;
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
        result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
        
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
        result = 'Tie.'
        } else if (computerMove === 'paper') {
            result = 'You lose.' 
        } else if (computerMove === 'scissors') {
            result = 'You win.'
        }
        
    } 

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses +=1;
    } else if (result === 'Tie.') {
        score.ties += 1; 
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement() {
document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNum = Math.floor(Math.random()*3);

    let computerMove = '';

    if (randomNum === 0) {
        computerMove = 'rock';
    } else if (randomNum === 1) {
        computerMove = 'paper'; 
    } else if (randomNum === 2) {
        computerMove = 'scissors';
    }

    return computerMove;   //return function gets a value/var/calculation or anything out of function
    
}

