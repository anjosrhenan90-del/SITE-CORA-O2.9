const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;
let scale = 18;
let pulse = 0;

function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pulse = 1 + Math.sin(Date.now() * 0.004) * 0.08;

  ctx.beginPath();
  for (let i = 0; i < t; i += 0.02) {
    const x = 16 * Math.pow(Math.sin(i), 3);
    const y = -(13 * Math.cos(i)
      - 5 * Math.cos(2 * i)
      - 2 * Math.cos(3 * i)
      - Math.cos(4 * i));

    ctx.lineTo(
      canvas.width / 2 + x * scale * pulse,
      canvas.height / 2 + y * scale * pulse
    );
  }

  ctx.strokeStyle = "#ff2d55";
  ctx.lineWidth = 4;
  ctx.shadowColor = "#ff2d55";
  ctx.shadowBlur = 15;
  ctx.stroke();

  if (t < Math.PI * 2) {
    t += 0.05;
  }

  requestAnimationFrame(drawHeart);
}

drawHeart();
