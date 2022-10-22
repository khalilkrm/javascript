import BallPhysics from './BallPhysics.js';

export default class SmokeBallPhysics extends BallPhysics {
  constructor() {
    super({
      positionX: window.innerWidth / 2,
      positionY: window.innerHeight / 2,
      angle: 0,
      speedX: () => Math.random() - 0.5,
      speedY: () => Math.random() - 0.5,
      radius: () => Math.random() * 80 + 40,
      va: () => Math.random() * 0.1 - 0.05,
      range: () => Math.random() * 5,
    });

    this.beforeMove = () => {
      this.angle += this.va;
    };

    this.moveXPosition = () => {
      return this.speedX + Math.sin(this.angle) * this.range;
    };

    this.moveYPosition = () => {
      return this.speedY + Math.cos(this.angle) * this.range;
    };
  }
}
