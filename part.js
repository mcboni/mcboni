const colors = ["#ffff", "#4D1112", "#ffff", "#4D1112", "#ffff"];

const numBalls = 3;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  let iDiv = document.getElementsByClassName("top-section");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `8vw`;
  ball.style.top = `7vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = '2em';
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: 0,
    y: 5
  };

  let anim = el.animate(
    [
      { transform: "translate(22em, 25em)" },
      { transform: `translate(9em,15em)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
