import BallPlayground from './BallPlayground.js';
import BallPhysics from '../physics/BallPhysics.js';

const props = new WeakMap();

/**
 * @param { BallPlayground } playground
 * @param { BallPhysics } physics
 */
export default class Ball {
  constructor(playground, physics) {
    props.set(this, {});

    /** Properties */

    props.get(this).playground = playground;
    props.get(this).physics = physics;

    /** Functions */

    props.get(this).isBallHitsTop = function () {
      return this.physics.positionY < this.physics.radius;
    };

    props.get(this).isBallHitsBottom = function () {
      return (
        this.physics.positionY > this.playground.height - this.physics.radius
      );
    };

    props.get(this).isBallHitsLeft = function () {
      return this.physics.positionX < this.physics.radius;
    };

    props.get(this).isBallHitsRight = function () {
      return (
        this.physics.positionX > this.playground.width - this.physics.radius
      );
    };
  }

  update() {
    if (props.get(this).isBallHitsLeft()) {
      props.get(this).physics.onHitLeft();
    }

    if (props.get(this).isBallHitsRight()) {
      props.get(this).physics.onHitRight();
    }

    if (props.get(this).isBallHitsBottom()) {
      props.get(this).physics.onHitBottom();
    }

    if (props.get(this).isBallHitsTop()) {
      props.get(this).physics.onHitTop();
    }

    props.get(this).physics.move();
  }

  draw(context) {
    context.beginPath();
    context.arc(
      props.get(this).physics.positionX,
      props.get(this).physics.positionY,
      props.get(this).physics.radius,
      0,
      Math.PI * 2,
    );
    context.fill();
  }
}
