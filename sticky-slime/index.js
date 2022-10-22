import BallPlayground from './model/BallPlayground.js';
import StickyBallPhysics from './physics/StickyBallPhysics.js';
import SmokeBallPhysics from './physics/SmokeBallPhysics.js';
import LavaBallPhysics from './physics/LavaBallPhysics.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.fillStyle = 'white';

const playground = new BallPlayground({
  width: canvas.width,
  height: canvas.height,
});

const physics = [LavaBallPhysics, StickyBallPhysics, SmokeBallPhysics];

playground.init(50, physics[1]);

function animate() {
  context.clearRect(0, 0, playground.width, playground.height);
  playground.update();
  playground.draw(context);
  requestAnimationFrame(animate);
}

animate();
