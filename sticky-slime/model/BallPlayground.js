import Ball from './Ball.js';
import BallPhysics from '../physics/BallPhysics.js';
import { getHighOrderPrototype } from '../function.js';

const props = new WeakMap();

export default class BallPlayground {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    props.set(this, {});
    props.get(this).balls = [];
  }

  /**
   * @param {number} ballsCount
   * @param {class} physics
   */
  init(ballsCount, physics) {
    if (getHighOrderPrototype(physics).name !== BallPhysics.name)
      throw Error(`physics must be extends ${BallPhysics.name}`);
    for (let i = 0; i < ballsCount; i++) {
      props.get(this).balls.push(new Ball(this, new physics(this))); // Carefull
    }
  }

  update() {
    props.get(this).balls.forEach((ball) => ball.update());
  }

  draw(context) {
    props.get(this).balls.forEach((ball) => ball.draw(context));
  }
}
