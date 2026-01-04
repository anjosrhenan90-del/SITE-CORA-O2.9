const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#ff4d6d";
ctx.lineWidth = 3;

let t = 0;

function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  for (let i = 0; i < t; i += 0.02) {
    const x = 16 * Math.pow(Math.sin(i), 3);
    const y = -(13 * Math.cos(i)
      - 5 * Math.cos(2 * i)
      - 2 * Math.cos(3 * i)
      - Math.cos(4 * i));

    ctx.lineTo(
      canvas.width / 2 + x * 10,
      canvas.height / 2 + y * 10
    );
  }

  ctx.stroke();
  t += 0.05;

  if (t <= Math.PI * 2) {
    requestAnimationFrame(drawHeart);
  }
}

drawHeart();
