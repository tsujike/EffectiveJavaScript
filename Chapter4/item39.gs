//インクリメント演算子の後置
function myFunction39_00() {

  let a, b;

  //後置の場合、b=aをまず評価し、aに１を加える。
  a = 8;
  b;
  b = a++;
  console.log(a, b); //9,8

  a = 8;
  b;
  b = a;
  a = a + 1;
  console.log(a, b); //9,8

  //前置の場合、対象の変数を１だけ増加させて、b=aを評価する。
  a = 8;
  b;
  b = ++a;
  console.log(a, b); //9,9

  a = 8;
  b;
  a = a + 1;
  b = a;
  console.log(a, b); //9,9

}





function myFunction39_01() {


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


  }


  /** クラスActor  */
  class Actor {

    constructor(scene, x, y) {
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.id = ++Actor.nextID;
      scene.register(this);
    }

  }
  Actor.nextID = 0;


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

  }

  const scene = new Scene('context', 1920, 1000, { spaceShip: 'image1' });

  const spaceShip1 = new SpaceShip(scene, 200, 100);
  console.log(spaceShip1.id); //1

  const spaceShip2 = new SpaceShip(scene, 200, 100);
  console.log(spaceShip2.id); //2

  /** 
    * クラスAlien
    * @extends Actor
    */
  class Alien extends Actor {

    constructor(scene, x, y, direction, speed, strength) {
      super(scene, x, y);
      this.direction = direction;
      this.speed = speed;
      this.strength = strength;
      this.damage = 0;
      this.id = ++Alien.nextID;
    }

  }

  Alien.nextID = 0;

  const alien1 = new Alien(scene, 200, 100);
  console.log(alien1.id); //1

}









function myFunction39_02() {

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

  }


  /** クラスActor  */
  class Actor {

    constructor(scene, x, y) {
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.actorId = ++Actor.nextID;
      scene.register(this);
    }

  }
  Actor.nextID = 0;


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

  }

  /** 
    * クラスAlien
    * @extends Actor
    */
  class Alien extends Actor {

    constructor(scene, x, y, direction, speed, strength) {
      super(scene, x, y);
      this.direction = direction;
      this.speed = speed;
      this.strength = strength;
      this.damage = 0;
      this.alienId = ++Alien.nextID;
    }

  }

  Alien.nextID = 0;


  const scene = new Scene('context', 1920, 1000, { spaceShip: 'image1' });

  const spaceShip1 = new SpaceShip(scene, 200, 100);
  console.log(spaceShip1.actorId); //1

  const spaceShip2 = new SpaceShip(scene, 200, 100);
  console.log(spaceShip2.actorId); //2


  const alien1 = new Alien(scene, 200, 100);
  console.log(alien1.alienId); //1

}

