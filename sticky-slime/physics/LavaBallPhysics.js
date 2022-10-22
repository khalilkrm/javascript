import BallPhysics from './BallPhysics.js';

const props = new WeakMap();

const RESET_PROPERTIES_VALUES = {
  radius: () => Math.random() * 80 + 40,
  positionX: (radius, playground) =>
    radius * 2 + (Math.random() * playground.width - radius * 2.5),
  positionY: (radius) => -radius,
  vy: 0,
  speedY: () => Math.random() - 0.5 * 0.2,
};

export default class SmokeBallPhysics extends BallPhysics {
  constructor(playground) {
    super({
      positionY: window.innerHeight / 2,
      angle: 0,
      speedX: () => Math.random() * 0.2 - 0.1,
      speedY: RESET_PROPERTIES_VALUES.speedY,
      radius: RESET_PROPERTIES_VALUES.radius,
      va: () => Math.random() * 0.1 - 0.05,
      range: () => Math.random() * 5,
      gravity: () => Math.random() * 0.005,
      angle: 0,
      vy: RESET_PROPERTIES_VALUES.vy,
    });

    this.positionX = RESET_PROPERTIES_VALUES.positionX(this.radius, playground);
    this.positionY = RESET_PROPERTIES_VALUES.positionY(this.radius);

    this.onHitTop = () => {};
    this.onHitBottom = () => {};

    this.playground = playground;

    props.set(this, {});
    props.get(this).isBallHiddenAtBottom = () =>
      this.positionY > this.playground.height + this.radius;
    props.get(this).bringBallToTop = () => {
      this.radius = RESET_PROPERTIES_VALUES.radius();
      this.positionY = RESET_PROPERTIES_VALUES.positionY(this.radius);
      this.vy = RESET_PROPERTIES_VALUES.vy;
      this.speedY = RESET_PROPERTIES_VALUES.speedY();
      this.positionX = RESET_PROPERTIES_VALUES.positionX(
        this.radius,
        this.playground,
      );
    };

    this.beforeMove = () => {
      if (props.get(this).isBallHiddenAtBottom()) {
        props.get(this).bringBallToTop();
      }
      if (this.positionY > this.radius * 2) {
        this.vy = this.gravity;
        this.speedY += this.vy;
      }
    };

    this.moveXPosition = () => {
      return this.speedX;
    };

    this.moveYPosition = () => {
      return this.speedY;
    };
  }
}
