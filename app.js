const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');
const scoreEl = document.getElementById('score-el');
const playAgainEl = document.getElementById('play-again');
const userPickEl = document.getElementById('user-pick');
const rulesBtnEl = document.getElementById('rules-btn');
const closeBtnEl = document.getElementById('close-btn');
const modalEl = document.getElementById('modal-container');

const gameOptions = ['Rock', 'Paper', 'Scissors'];
let score = 0;
scoreEl.textContent = score;


rockEl.addEventListener('click', function() {
    userPickEl.innerHTML = `
    <img src="./images/icon-rock.svg" alt="" class="rock">
    `

    const housePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(housePick);
    if (housePick === 'Scissors') {
        console.log('You Win.')
        score += 1;
        scoreEl.textContent = score
    } else if (housePick === 'Rock') {
        console.log('Draw.')
        score = score
        scoreEl.textContent = score
    } else {
        console.log('You Lose.')
        score = score - 1;
        scoreEl.textContent = score
    }
})

paperEl.addEventListener('click', function() {
    const housePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(housePick);
    if (housePick === 'Scissors') {
        console.log('You Lose.')
        score -= 1;
        scoreEl.textContent = score
    } else if (housePick === 'Rock') {
        console.log('You Win.')
        score += 1;
        scoreEl.textContent = score
    } else {
        console.log('Draw.')
        score = score;
        scoreEl.textContent = score
    }
})

scissorsEl.addEventListener('click', function() {
    const housePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(housePick);
    if (housePick === 'Scissors') {
        console.log('Draw.')
        score = score;
        scoreEl.textContent = score
    } else if (housePick === 'Rock') {
        console.log('You Lose.')
        score -= 1;
        scoreEl.textContent = score
    } else {
        console.log('You Win.')
        score += 1;
        scoreEl.textContent = score
    }
})

rulesBtnEl.addEventListener('click', function() {
    modalEl.style.display = 'block';
})

closeBtnEl.addEventListener('click', function() {
    modalEl.style.display = 'none';
})


