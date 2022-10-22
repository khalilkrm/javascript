import BallPhysics from './BallPhysics.js';

export default class StickyBallPhysics extends BallPhysics {
  constructor() {
    super({
      positionX: window.innerWidth / 2,
      positionY: window.innerHeight / 2,
      angle: 0,
      speedX: () => Math.random() - 0.5,
      speedY: () => Math.random() - 0.5,
      radius: () => Math.random() * 80 + 20,
      va: () => Math.random() * 0.1 - 0.05,
      range: () => Math.random() * 30,
    });

    this.moveXPosition = () => {
      return this.speedX;
    };
    this.moveYPosition = () => {
      return this.speedY;
    };
  }
}
