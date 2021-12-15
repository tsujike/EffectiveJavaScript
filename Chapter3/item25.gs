function myFunction25_00() {

  const obj = { getHello() { return 'Hello' } };

  const helloArray = [1, 2, 3].map(obj.getHello);

  console.log(helloArray); //[ 'Hello', 'Hello', 'Hello' ]
}

function myFunction25_00_02() {

  const obj = {
    name: 'tsujike',
    getHello() { return `Hello, ${this.name}` }
  };

  //thisはobjに結合されている
  console.log(obj.getHello()); //Hello, tsujike

  const helloArray = [1, 2, 3].map(obj.getHello);

  //thisはobjに結合されていない
  console.log(helloArray); //[ 'Hello, undefined', 'Hello, undefined', 'Hello, undefined' ]

  //第2引数を使って、thisに明示的にオブジェクトを渡そう
  const helloArray2 = [1, 2, 3].map(obj.getHello, obj);
  console.log(helloArray2); //[ 'Hello, tsujike', 'Hello, tsujike', 'Hello, tsujike' ]

  //展開しても同様の結果を得る
  const helloArray3 = [1, 2, 3].map(number => obj.getHello(number));
  console.log(helloArray3); //[ 'Hello, tsujike', 'Hello, tsujike', 'Hello, tsujike' ]
}


function myFunction25_01() {

  const buffer = {};
  buffer.entries = [];
  buffer.add = function (element) { this.entries.push(element) };
  buffer.concat = function () { return this.entries.join('') };

  const title = ['2021年', 'BT大会'];

  //buffer.entriesを結合したい

  //thisが結合するグローバルオブジェクトにentriesプロパティがないのでエラーになる
  title.forEach(buffer.add);//TypeError: Cannot read property 'push' of undefined
}


function myFunction25_02() {

  const buffer = {};
  buffer.entries = [];
  buffer.add = function (s) { this.entries.push(s) };
  buffer.concat = function () { return this.entries.join('') };

  const title = ['2021年', 'BT大会'];

  //関数のレシーバとして、bufferを渡せる第2引数。thisArg 省略可callback 内でthisとして使用する値です。
  title.forEach(buffer.add, buffer);

  console.log(buffer); //	{ entries: [ '2021年', 'BT大会' ],  add: [Function],  concat: [Function] }

  //buffer.entriesを結合したい
  const combinedElement = buffer.entries.join('');
  console.log(combinedElement);//2021年BT大会

}


//すべてのコールバック関数が、第2引数を用意してくれるわけじゃない。
//自作しようぜ！

function myFunction25_03() {

  const buffer = {};
  buffer.entries = [];
  buffer.add = function (s) { this.entries.push(s) };
  buffer.concat = function () { return this.entries.join('') };

  const title = ['2021年', 'BT大会'];

  //必ずbuffer.addを呼び出すコールバック関数
  const func = element => buffer.add(element);
  title.forEach(func);

  const combinedElement = buffer.entries.join('');
  console.log(combinedElement); //	2021年BT大会

}


//ES5から、この自作ラッパーと同機能のbindメソッドが導入された
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind



function myFunction25_04() {

  const buffer = {};
  buffer.entries = [];
  buffer.add = function (s) { this.entries.push(s) };
  buffer.concat = function () { return this.entries.join('') };

  const title = ['2021年', 'BT大会'];

  title.forEach(buffer.add.bind(buffer));

  const combinedElement = buffer.entries.join('');
  console.log(combinedElement); //	2021年BT大会

}


//ES6以降ならどう書くか
function myFunction25_05() {

  const buffer = {};
  buffer.entries = [];
  buffer.add = function (s) { this.entries.push(s) };
  buffer.concat = function () { return this.entries.join('') };

  const title = ['2021年', 'BT大会'];

  //addを使いなさいって話か
  // buffer.entries = [...title];

  //map()メソッドの第2引数を使う
  title.map(buffer.add, buffer);
  console.log(buffer.entries); //	[ '2021年', 'BT大会' ]
  console.log(buffer.concat()); //2021年BT大会

  //展開する方が分かりやすいかも
  title.map(element => buffer.add(element));
  console.log(buffer.entries); //		[ '2021年', 'BT大会', '2021年', 'BT大会' ]
  console.log(buffer.concat()); //2021年BT大会2021年BT大会
}


//bind使うときあるのかな・・・
