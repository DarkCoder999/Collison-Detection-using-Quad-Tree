const simulationLink = document.getElementById("simulation-link");
const gameLink = document.getElementById("game-link");

const numStars = 800;
const container = document.body;
const width = container.offsetWidth;
const height = container.offsetHeight;
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * height}px`;
    star.style.left = `${Math.random() * width}px`;
    star.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(star);
}

simulationLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "simulation.html";
});

gameLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "game.html";
});