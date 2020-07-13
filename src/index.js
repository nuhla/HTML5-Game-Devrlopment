///------------------------------------- PADDEL CLASS -----------------------------------------------------//
class Paddel {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 20;
    this.postion = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  //------------------------------ Draw Method for Draw Our Puddel ------------------------------------------//
  draw(ctx) {
    ctx.fillStyle = '#0ff';
    ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
  }
}

//-----------------------------------------------------------------------------------------------------------//

let cav = document.getElementById('gameScreen');

let conxtext = cav.getContext('2d');
conxtext.clearRect(0, 0, 800, 600);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
var puddel = new Paddel(GAME_WIDTH, GAME_HEIGHT);
console.log(puddel);
puddel.draw(conxtext);

// conxtext.fillStyle = '#f00';
// conxtext.fillRect(50, 50, 100, 100);
// conxtext.fillStyle = '#00f';
// conxtext.fillRect(500, 100, 250, 100);
// conxtext.fillStyle = '#f00';
// conxtext.fillRect(200, 200, 50, 50);
