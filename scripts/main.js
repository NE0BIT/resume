// Generador de laberinto en el canvas
const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawMaze() {
    const cols = Math.floor(canvas.width / 40);
    const rows = Math.floor(canvas.height / 40);

    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#1f1f1f";

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (Math.random() > 0.7) {
                ctx.strokeRect(i * 40, j * 40, 40, 40);
            }
        }
    }
}

drawMaze();

// Efecto de parallax
window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    document.querySelectorAll('.parallax').forEach((section, index) => {
        let speed = 0.3 + index * 0.1;
        section.style.transform = `translateY(${scrollTop * speed}px)`;
    });
});
