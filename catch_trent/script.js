document.addEventListener("DOMContentLoaded", () => {
  const ambient = document.getElementById("ambientAudio");

  
  ambient.play().catch(() => {
    
    const prompt = document.createElement("div");
    prompt.textContent = "Click anywhere to enable sound";
    prompt.style = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.85);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4em;
      z-index: 10000;
      text-align: center;
      cursor: pointer;
    `;
    document.body.appendChild(prompt);

    prompt.addEventListener("click", () => {
      ambient.play().then(() => {
        document.body.removeChild(prompt);
      }).catch(err => {
        prompt.textContent = "Autoplay failed. Please refresh and allow audio.";
      });
    });
  });
});

const trent = document.getElementById('trent');
const scoreboard = document.getElementById('scoreboard');
const winMessage = document.getElementById('win-message');

let score = 0;
const speed = 600; 

function moveTrent() {
  const maxX = window.innerWidth - trent.clientWidth;
  const maxY = window.innerHeight - trent.clientHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  trent.style.left = `${x}px`;
  trent.style.top = `${y}px`;
}

setInterval(moveTrent, speed);

trent.addEventListener('click', () => {
  score++;
  
  scoreboard.textContent = `Score: ${score}/10`;
  if (score >= 10) {
    winMessage.style.display = 'block';
    trent.style.display = 'none';
    setTimeout(() => {
        window.location.href = '../index.html?score=' + score;
    }, 5000);
  }
});
