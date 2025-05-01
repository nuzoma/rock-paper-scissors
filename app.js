const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');
const scoreEl = document.getElementById('score-el');
const playAgainEl = document.getElementById('play-again');
const userPickEl = document.getElementById('user-pick');
const housePickEl = document.getElementById('house-pick');
const resultText = document.getElementById('result-text');
const rulesBtnEl = document.getElementById('rules-btn');
const closeBtnEl = document.getElementById('close-btn');
const modalEl = document.getElementById('modal-container');
const battleScreen = document.querySelector('.battle-screen');
const gameScreen = document.querySelector('.game-screen');
const newGameEl = document.getElementById('new-game');

let score = 0;
scoreEl.textContent = score;

function handleButtonClick(userChoice) {
    userPickEl.innerHTML = `<img src="./images/icon-${userChoice}.svg" alt="${userChoice}" class="rock">`

    gameScreen.classList.add('hidden');

    battleScreen.classList.remove('hidden');

    setTimeout(() => {
        const computerChoice = getComputerChoice();
        housePickEl.textContent = '?'
        housePickEl.innerHTML = `<img src="./images/icon-${computerChoice}.svg" alt="${computerChoice}" class="rock">`

        updateScore(userChoice, computerChoice)
    }, 1000);

    housePickEl.textContent = '?'
    resultText.textContent = ''
};

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const housePick = Math.floor(Math.random() * choices.length);
    return  choices[housePick];
};

function updateScore(user, computer) {
    if (user === computer) {
        resultText.textContent = 'YOU DRAW 🤝'
        return;
    }
    
    const userWins = 
    (user === 'rock' && computer === 'scissors') || 
    (user === 'paper' && computer === 'rock') || 
    (user === 'scissors' && computer === 'paper');

    if (userWins) {
        score++;
        resultText.textContent = 'YOU WIN 🎉';
    } else {
        score--;
        resultText.textContent = 'YOU LOSE 🙆';
    }

    scoreEl.textContent = score;
};

rockEl.addEventListener('click', () => handleButtonClick('rock'));
paperEl.addEventListener('click', () => handleButtonClick('paper'));
scissorsEl.addEventListener('click', () => handleButtonClick('scissors'));

rulesBtnEl.addEventListener('click', function() {
    modalEl.style.display = 'block';
});

closeBtnEl.addEventListener('click', function() {
    modalEl.style.display = 'none';
});

playAgainEl.addEventListener('click', () => {
    gameScreen.classList.remove('hidden');
    battleScreen.classList.add('hidden');
});

newGameEl.addEventListener('click', () => {
    gameScreen.classList.remove('hidden');
    battleScreen.classList.add('hidden');
    scoreEl.textContent = 0 
    score = 0
});