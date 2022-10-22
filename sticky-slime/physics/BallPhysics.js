/**
 * @param { {
 *  positionX : number,
 *  positionY : number,
 *  directionX: number,
 *  directionY: number
 *  speedX: number,
 *  speedY: number,
 *  radius: number,
 *  range: number,
 *  va: number,
 *  angle: number,
 * } } properties
 */

export default class BallPhysics {
  constructor(properties) {
    this.positionX = properties.positionX;
    this.positionY = properties.positionY;
    this.radius = properties.radius();
    this.speedX = properties.speedX();
    this.speedY = properties.speedY();
    this.range = properties.range();
    this.va = properties.va();
    this.gravity =
      typeof properties.gravity === 'function' ? properties.gravity() : 0;
    this.angle = properties.angle;
    this.vy = properties.vy;
    this.directionX = 1;
    this.directionY = 1;

    this.beforeMove = () => {};
    this.afterMove = () => {};
    this.moveXPosition = () => {};
    this.moveYPosition = () => {};

    this.bounceX = () => {
      this.directionX *= -1;
    };

    this.bounceY = () => {
      this.directionY *= -1;
    };

    this.onHitTop = () => {
      this.bounceY();
    };

    this.onHitBottom = () => {
      this.bounceY();
    };

    this.onHitLeft = () => {
      this.bounceX();
    };

    this.onHitRight = () => {
      this.bounceX();
    };

    this.move = () => {
      this.beforeMove();
      this.positionX += this.moveXPosition() * this.directionX;
      this.positionY += this.moveYPosition() * this.directionY;
      this.afterMove();
    };
  }
}
