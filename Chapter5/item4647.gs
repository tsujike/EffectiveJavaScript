
function myFunction46_01() {


  function repeat(highScores) {
    let result = '';
    let i = 1;
    for (const name in highScores) {
      const score = JSON.stringify(highScores[name]);
      result += `${i}.${name}:${score}\n`;
      i++;

    }

    return result;
  }

  const array = [
    { name: 'Tom', points: 100 },
    { name: 'Bob', points: 200 },
    { name: 'John', points: 300 }
  ];

  console.log(repeat(array));
  /*
  1.0: { "name": "Tom", "points": 100 }
  2.1: { "name": "Bob", "points": 200 }
  3.2: { "name": "John", "points": 300 }
  */

}




function myFunction46_02() {


  function repeat(highScores) {
    let result = '';

    for (let i = 0; i < highScores.length; i++) {
      const score = highScores[i];
      result += `${i + 1}.${score.name}:${score.points}\n`;
    }

    return result;
  }

  const array = [
    { name: 'Tom', points: 100 },
    { name: 'Bob', points: 200 },
    { name: 'John', points: 300 }
  ];

  console.log(repeat(array));

}



function myFunction46_03() {

  const ratings = {
    'Goodwill Hunting': 0.8,
    'Mystic River': 0.7,
    '21': 0.6,
    'Doubt': 0.9
  };

  let total = 0, count = 0;

  for (const key in ratings) {

    console.log(key); //21, Goodwill Hunting, Mystic River, Doubt

    total += ratings[key];
    count++;
  }
  total /= count;
  console.log(total); //(0.6 + 0.8 + 0.7 + 0.9) / 4 = 0.7499999999999999

}


function myFunction46_04() {

  const ratings = {
    'Goodwill Hunting': 0.8,
    'Mystic River': 0.7,
    '21': 0.6,
    'Doubt': 0.9
  };

  let total = 0, count = 0;

  for (const key in ratings) {

    total += ratings[key] * 10;
    count++;
  }
  total = total / count / 10;
  console.log(total); //(6 + 8 + 7 + 9) / 4 / 10 = 0.75

}




function myFunction47_01() {

  const ratings = {
    'Goodwill Hunting': 0.8,
    'Mystic River': 0.7,
  };

  Object.prototype.allKeys = function () {
    const result = [];

    for (const key in this) {
      result.push(key);
    }
    return result;

  }

  console.log(ratings.allKeys().length); //3

  console.log(ratings.allKeys()); //[ 'Goodwill Hunting', 'Mystic River' ]
}

function myFunction47_01_00() {

  const ratings = { 'Goodwill Hunting': 0.8, 'Mystic River': 0.7 };

  Object.prototype.Rocky = function () { return 0.4 }

  for (const key in ratings) {
    console.log(key); //Goodwill Hunting, Mystic River, Rocky
  }

  // for (const property of ratings) {
  // console.log(property); //TypeError: ratings is not iterable
  // }

  for (const [key, value] of Object.entries(ratings)) {
    console.log(`${key}:${value}`); //Goodwill Hunting:0.8, Mystic River:0.7
  }

}

function myFunction47_01_02() {

  class Ratings {

    constructor() {
      this.Goodwill_Hunting = 0.8;
      this.Mystic_River = 0.7;
    }

    allKeys() {
      const result = [];

      for (const key in this) {
        result.push(key);
      }
      return result;
    }

  }

  const ratings = new Ratings();
  console.log(ratings); //	{ Goodwill_Hunting: 0.8, Mystic_River: 0.7 }


  Object.prototype.Ghost = function () { return 1.0 };

  for (const key in ratings) {
    console.log(key); //Goodwill_Hunting, Mystic_River, Ghost
  }

  console.log();

  Object.defineProperty(ratings, 'Frozen2', {
    enumerable: false, //列挙するかどうか
    configurable: false,
    writable: false,
    value: 0.4
  });


  for (const key in ratings) {
    console.log(key); //Goodwill_Hunting, Mystic_River, Ghost
  }

  console.log(ratings);//	{ Goodwill_Hunting: 0.8, Mystic_River: 0.7}
  console.log(ratings.Frozen2); //0.4

}




function myFunction47_02() {

  function allKeys(obj) {
    const result = [];
    for (const key in obj) {
      result.push(key);
    }
    return result;
  }

  const ratings = {
    'Goodwill Hunting': 0.8,
    'Mystic River': 0.7,
    '21': 0.6,
    'Doubt': 0.9
  };

  console.log(allKeys(ratings).length); //4

}



// function myFunction47_03() {

//   Object.prototype.allKeys = function () {
//     return 'hoge';
//   }

//   const ratings = {
//     'Goodwill Hunting': 0.8,
//     'Mystic River': 0.7,
//     '21': 0.6,
//     'Doubt': 0.9
//   };

//   for (const key in ratings) {
//     console.log(key); //21, Goodwill Hunting, Mystic River, 21, Doubt,allKeys
//   }

// }



function myFunction47_03() {

  Object.defineProperty(Object.prototype, 'allKeys', {
    value: function () {
      const result = [];
      for (const key in this)  result.push(key);
      return result;
    },
    enumerable: false,
  });

  const ratings = { 'Goodwill Hunting': 0.8,'Mystic River': 0.7 };

  for (const key in ratings) {
    console.log(key); //Goodwill Hunting, Mystic River
  }

}




function myFunction47_04() {

  const object1 = {};

  Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
  });


  //use strictモードでは、例外が発生する
  object1.property1 = 77;

  console.log(object1.property1);
  // expected output: 42

}


//オブジェクトのプロパティ汚染を禁止する3つのやりかた
//プロパティには、プロトタイプと、目に見えるプロパティと、2種類ある


function myFunction47_05() {

  /** モンキーパッチの復習 */

  //リテラルでオブジェクトを生成する
  const obj = { name: 'Tom' };

  //生成されたオブジェクトの、継承元＝Objectオブジェクトの、prototype.toStringにアクセスしてみる
  console.log(obj.__proto__.toString); //	[Function: toString]

  //それを、書き換える。
  obj.__proto__.toString = function () { return 'モンキーパッチです' };

  //継承元のprototypeを書き換える、モンキーパッチ（悪手）
  console.log(obj.name); //Tom
  console.log(obj.toString()); //'モンキーパッチです'


  /** プロトタイプを汚染させない */

  //Object.create(null)でオブジェクトを生成する
  const obj2 = Object.create(null, { name: { value: 'Tom' } });

  //nameプロパティはobj2自身に定義されていない
  console.log(obj2);//{}

  //プロトタイプチェーンを遡ると発見
  console.log(obj2.name); //Tom

  //レシーバがnullなので、プロトタイプは変更させない
  // console.log(obj2.__proto__.toString);//TypeError: Cannot read property 'toString' of undefined



  /** 自身のルックアッププロパティを汚染させない */

  //定義の時点で、列挙不可にする
  const obj3 = {};
  Object.defineProperty(obj3, 'name', {
    enumerable: false, //列挙するかどうか
    configurable: false,
    writable: false,
    value: 'Tom'
  });

  //enumerableがfalse
  console.log(obj3); //{}

  //プロトタイプチェーンを遡ると発見
  console.log(obj3.name); //Tom

  //writable: falseで、自身のルックアッププロパティを変更させない
  obj3.name = 'Bob';
  console.log(obj3.name); //'Tom'

  //継承元＝Objectオブジェクトの、prototype.toString、書き換えると
  obj3.__proto__.toString = function () { return 'obj3です' };

  //プロトタイプは汚染される（Object.definePropertyとは無関係）
  console.log(obj3.toString()); //obj3です



  /** 自身のルックアッププロパティを汚染させない2 */

  //Object.freezeで凍結する
  const obj4 = { name: 'Tom' };
  Object.freeze(obj4);

  //自身のルックアッププロパティは変更できない
  obj4.name = 'Bob';
  console.log(obj4); //{ name: 'Tom' }

  //プロトタイプは変更される
  obj4.__proto__.toString = function () { return 'obj4です' };
  console.log(obj4.toString()); //obj4です

  //大元は汚染されている
  console.log({}.toString()); //obj4です

}

