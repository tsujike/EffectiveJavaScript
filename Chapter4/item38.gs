
function myFunction38_01() {

  /** クラスScene */
  class Scene {

    constructor(context, width, height, images) {
      this.context = context;
      this.width = width;
      this.height = height;
      this.images = images;
      this.actors = [];
    }

    register(actor) {
      this.actors.push(actor);
    }

    unregister(actor) {
      const i = this.actors.indexOf(actor);
      if (i >= 0) this.actors.splice(i, 1);
    }

    draw() {
      // this.context.clearRect(0, 0, this.width, this.height);
      for (const a of this.actors) a.draw();
    }
  }





  /** クラスActor  */
  class Actor {

    constructor(scene, x, y) {
      this.scene = scene;
      this.x = x;
      this.y = y;
      scene.register(this);
    }

    moveTo(x, y) {
      this.x = x;
      this.y = y;
      this.scene.draw();
    }

    exit() {
      this.scene.unregister(this);
      this.scene.draw();
    }

    draw() {
      const image = this.scene.images[this.type];
      console.log(`背景: ${image}とx: ${this.x}、y: ${this.y}にこのアクターをdrawしました`);
      //this.scene.context.drawImage(image, this.x, this.y);

    }

    width() {
      return this.scene.images[this.type].width;
    }

    height() {
      return this.scene.images[this.type].height;
    }

  }

  /** 
    * クラスSpaceShip
    * @extends Actor
    */
  class SpaceShip extends Actor {

    constructor(scene, x, y) {
      super(scene, x, y);
      this.points = 0;
      this.type = 'spaceShip';
    }

    scorePoint() {
      this.point++;
    }

    left() {
      this.moveTo(Math.max(this.x - 10, 0), this.y);
    }

    right() {
      const maxWidth = this.width - this.width();
      this.moveTo(Math.min(this.x + 10, maxWidth), this.y);
    }

  }

  const scene = new Scene('context', 1920, 1000, { spaceShip: 'image1' });
  const spaceShip = new SpaceShip(scene, 200, 100);
  
  scene.draw(); //背景: image1とx: 200、y: 100にこのアクターをdrawしました
  spaceShip.moveTo(10, 20); //背景: image1とx: 10、y: 20にこのアクターをdrawしました


}



