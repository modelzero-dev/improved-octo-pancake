const car = document.getElementById('car');
const game = document.getElementById('game');
const scoreEl = document.getElementById('score');

let score = 0;
let gameOver = false;
let obstacleInterval;
let scoreInterval;

function jump() {
    if (!car.classList.contains('jump')) {
        car.classList.add('jump');
        setTimeout(() => {
            car.classList.remove('jump');
        }, 500);
    }
}

function createPothole() {
    if (gameOver) return;
    const pothole = document.createElement('div');
    pothole.classList.add('pothole');
    game.appendChild(pothole);

    const collisionCheck = setInterval(() => {
        const carRect = car.getBoundingClientRect();
        const potholeRect = pothole.getBoundingClientRect();
        if (
            potholeRect.left < carRect.right &&
            potholeRect.right > carRect.left &&
            potholeRect.bottom > carRect.top &&
            potholeRect.top < carRect.bottom
        ) {
            endGame();
        }
    }, 10);

    pothole.addEventListener('animationend', () => {
        pothole.remove();
        clearInterval(collisionCheck);
    });
}

function startGame() {
    score = 0;
    gameOver = false;
    scoreEl.textContent = 'Score: 0';

    obstacleInterval = setInterval(createPothole, 1500);
    scoreInterval = setInterval(() => {
        if (!gameOver) {
            score++;
            scoreEl.textContent = 'Score: ' + score;
        }
    }, 100);
}

function endGame() {
    if (gameOver) return;
    gameOver = true;
    clearInterval(obstacleInterval);
    clearInterval(scoreInterval);
    document.querySelectorAll('.pothole').forEach(p => p.remove());
cy3aqe-codex/erstelle-jump-and-run-spiel-mit-auto
    alert('Autohaus Lehr - Game Over! Score: ' + score);

main
    startGame();
}

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
        jump();
    }
});

document.addEventListener('click', jump);

window.onload = startGame;
