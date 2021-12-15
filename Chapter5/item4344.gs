
function myFunction43_00() {

  /* オブジェクトとは */

  /** キーと値がセットになったレコードである。 */
  const persons = {
    person1: { name: 'Tsujike', age: 40, hometown: 'Hokkaido' },
    person2: { name: 'Sawada', age: 32, hometown: 'Kumamoto' },
    person3: { name: 'Kohata', age: 28, hometown: 'Fukushima' }
  }

  /** メソッドを継承するオブジェクト指向のデータ抽象である */
  const Person = function (name) {
    this.name = name;
  }
  Person.prototype.getName = function () {
    return this.name;
  }

  const p1 = new Person('Yamaguchi');
  console.log(p1.getName(), typeof p1);

  /** 配列の要素である */
  const array = [
    { id: 001, name: 'Tsujike', age: 40 },
    { id: 002, name: 'Sawada', age: 32 },
    { id: 001, name: 'Kohata', age: 28 }
  ];

  /** ハッシュ（連想配列）である */
  const dictionary = { "a": 100, "b": 200, "c": 300 }

}



function myFunction43_00_02() {

  //オブジェクトの生成
  const obj = { name: 'Tom' };

  //Objectオブジェクトから、Object.prototypeを継承している
  console.log(obj.__proto__ === Object.prototype); //true

  //Object.prototypeには、valueOf()や、hasOwnProperty()など、6つのインスタンスメソッドがある。（非推奨は除く）
  //objはObject.prototypeから、インスタンスメソッド（プロパティ）を継承している
  console.log(obj.__proto__.valueOf); //[Function: toString]
  console.log(obj.__proto__.hasOwnProperty); //[Function: hasOwnProperty]

  //obj自身には、プロパティは存在していません
  // console.log(obj.prototype.valueOf); //TypeError: Cannot read property 'valueOf' of undefined
  // console.log(obj.prototype.hasOwnProperty); //TypeError: Cannot read property 'hasOwnProperty' of undefined

  //自身のプロパティに存在しない場合は、ひとつ上の階層のprototypeをルックアップするのが、プロトタイプチェーン
  console.log(obj.valueOf()); //{ name: 'Tom' }
  console.log(obj.hasOwnProperty('name')); //true

  //プロパティは、自身に定義できる
  obj.age = 40;

  //インスタンスメソッドと同じ名前のプロパティも定義できる
  obj.valueOf = function () { return '改造します' };

  //自身のプロパティに存在するので、プロトタイプチェーンは遡らない。
  console.log(obj.valueOf()); //'改造します'

  //for in文は、まず、自身のプロパティの中で、列挙可能なプロパティを取り出します。
  for (const key in obj) {
    console.log(key); //name age valueOf
  }

  //プロトタイプチェーン（Object.prototypeとイコール）に、独自のプロパティを定義する
  obj.__proto__.tsujike = function () { return '独自プロパティ1' };

  //objはプロトタイプチェーンを遡って、tsujikeを呼び出せる
  console.log(obj.tsujike()); //'独自プロパティ1'

  //for in文は、この独自プロパティも取り出してしまう（これを列挙させないよう定義するのがObject.defineProperty()）
  for (const key in obj) {
    console.log(key); //name age valueOf tsujike
  }

  //もちろん、イコールなので、Object.prototypeに定義した、独自プロパティでも同じことが起きる
  Object.prototype.kenzo = function () { return '独自プロパティ2' };

  console.log(obj.kenzo()); //'独自プロパティ2'

  for (const key in obj) {
    console.log(key); //name age valueOf tsujike kenzo
  }

  //hasOwnProperty()は、あくまで、自身のプロパティをチェックしている
  console.log(obj.hasOwnProperty('valueOf')); //true
  console.log(obj.hasOwnProperty('kenzo')); //false

}



function myFunction43_01() {

  const dict = { alice: 34, bob: 24, chris: 62 };
  const people = [];

  for (const name in dict) {
    people.push(`${name}:${dict[name]} `);
  }

  console.log(people); //	[ 'alice:34 ', 'bob:24 ', 'chris:62 ' ]

}



function myFunction43_02() {

  function NaiveDict() { }

  NaiveDict.prototype.count = function () {
    let i = 0;
    for (const name in this) {
      i++;
    }
    return i;
  };

  NaiveDict.prototype.toString = function () {
    return "[object NaiveDict]";
  };

  const dict = new NaiveDict();

  dict.alice = 34;
  dict.bob = 24;
  dict.chris = 62;

  console.log(dict.count()); //5

}


function myFunction43_03() {

  const dict = new Array();

  dict.alice = 34;
  dict.bob = 24;
  dict.chris = 62;

  console.log(dict.bob); //24


  const dict2 = new String();

  dict2.alice = 34;
  dict2.bob = 24;
  dict2.chris = 62;

  console.log(dict2.bob); //24

  Array.prototype.first = function () {
    return this[0];
  }

  Array.prototype.last = function () {
    return this[this.length - 1];
  }

  const names = [];

  for (const name in dict) {
    names.push(name);
  }

  console.log(names); //	[ 'alice', 'bob', 'chris', 'first', 'last' ]
}



function myFunction43_04() {

  const dict = {};

  dict.alice = 34;
  dict.bob = 24;
  dict.chris = 62;


  const names = [];

  for (const name in dict) {
    names.push(name);
  }

  console.log(names); //[ 'alice', 'bob', 'chris' ]
}







function myFunction44_01() {

  function C() { }
  C.prototype = null;

  const c = new C();
  console.log(Object.getPrototypeOf(c) === null); //false
  console.log(Object.getPrototypeOf(c) === Object.prototype); //true

}



function myFunction44_02() {

  const x = Object.create(null);
  console.log(Object.getPrototypeOf(x) === null); //true

  const y = { __proto__: null };
  console.log(y instanceof Object); //false

}




