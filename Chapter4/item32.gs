
function myFunction32_01() {

  let obj = '';
  // console.log('__proto__' in obj); //TypeError: Cannot use 'in' operator to search for '__proto__' in 

  obj = { name: 'Bob' };
  console.log('__proto__' in obj); //true
  console.log(Object.getPrototypeOf(obj)); //{}→objの内部プロパティ [[Prototype]] の値

}

// obj.greet = () => {return 'ボブだよ!'};


function myFunction32_02() {

  const rabbit = { name: 'Peter', walk() { return 'ウサギ飛び！' } };

  const animal = { walk() { return '4足歩行' } };

  //rabbitオブジェクトのプロトタイプを、animalに変更する
  rabbit.__proto__ = animal;

  //own propertyが勝つ
  console.log(rabbit.walk()); //'ウサギ飛び！' 

}




function myFunction32_03() {

  //メソッドを3つ用意しておく
  const robot = { walk() { return '自動歩行' } };
  const human = { sayHello() { return 'Hello' } };
  const android = { isHuman() { return '私は人造人間です' } };

  //オブジェクトを2つ用意
  const yokozuna = {};
  const osumosan = {};

  //オブジェクトのプロトタイププロパティを上書きする
  //横綱をロボットにする
  yokozuna.__proto__ = robot;
  console.log(yokozuna.walk()); //自動歩行

  //お相撲さんのプロトタイププロパティを横綱に上書きする（継承行為）
  osumosan.__proto__ = yokozuna;
  console.log(osumosan.walk()); //自動歩行

  //横綱のプロトタイププロパティを人造人間に上書きする
  yokozuna.__proto__ = android;
  console.log(yokozuna.isHuman()); //私は人造人間です

  //osumosanにも影響を与えてしまう
  osumosan.walk(); //TypeError: osumosan.walk is not a function


}



function myFunction32_04() {

  const robot = { walk() { return '自動歩行' } };

  const yokozuna = {};

  Object.setPrototypeOf(yokozuna, robot);
  console.log(yokozuna.walk()); //自動歩行

}



function myFunction32_05() {

  const robot = { walk() { return '自動歩行' } };

  const yokozuna = {};

  const newYokozuna = Object.create(robot);
  console.log(newYokozuna.walk()); //自動歩行

}



function myFunction32_06() {

  function Osumosan() {
  }
  Osumosan.prototype.traning = function () { return '四股踏んじゃった' };

  function Yokozuna() {
    Osumosan.call(this);
  }

  Yokozuna.prototype = Object.create(Osumosan.prototype);
  Yokozuna.prototype.constructor = Yokozuna;

  const y = new Yokozuna();
  console.log(y.traning()); //四股踏んじゃった

}


function myFunction32_07() {

  class Osumosan {
    traning() { return '四股踏んじゃった' }
  }

  class Yokozuna extends Osumosan {
  }

  const y = new Yokozuna();
  console.log(y.traning()); //四股踏んじゃった

}
