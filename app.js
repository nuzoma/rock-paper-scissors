const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');
const playAgainEl = document.getElementById('play-again');

const gameOptions = ['Rock', 'Paper', 'Scissors'];
let score = 0;

rockEl.addEventListener('click', function() {
    const housePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(housePick);
    if (housePick === 'Scissors') {
        console.log('You Win.')
        score += 1;
        console.log(score)
    } else if (housePick === 'Rock') {
        console.log('Draw.')
        score = score
        console.log(score)
    } else {
        console.log('You Lose.')
        score = score - 1;
        console.log(score)
    }
})

paperEl.addEventListener('click', function() {
    const housePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(housePick);
    if (housePick === 'Scissors') {
        console.log('You Lose.')
        score -= 1;
        console.log(score)
    } else if (housePick === 'Rock') {
        console.log('You Win.')
        score += 1;
        console.log(score)
    } else {
        console.log('Draw.')
        score = score;
        console.log(score)
    }
})

scissorsEl.addEventListener('click', function() {
    const housePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(housePick);
    if (housePick === 'Scissors') {
        console.log('Draw.')
        score = score;
        console.log(score)
    } else if (housePick === 'Rock') {
        console.log('You Lose.')
        score -= 1;
        console.log(score)
    } else {
        console.log('You Win.')
        score += 1;
        console.log(score)
    }
})
