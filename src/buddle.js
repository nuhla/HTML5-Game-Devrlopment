export default class Paddel {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;
    this.postion = {
      x: gameHeight / 2 - this.height / 2,
      y: gameHeight - this.height - 10,
    };
  }

  draw(ctx) {
    ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
  }
}
