function myFunction1_4_01() {

  //シンボルプリミティブ値を生成するSymbol()関数
  console.log(typeof Symbol()); //symbol

  //生成と代入
  const sym1 = Symbol();
  const sym2 = Symbol();

  //シンボルの比較
  console.log(sym1 === sym1); //true
  console.log(sym1 === sym2); //false

  //シンボルは唯一無二である
  console.log(Symbol() === Symbol()); //false

}

function myFunction1_4_02() {

  //オブジェクトにプロパティを定義する
  const obj = {};
  const prop = 'name';
  obj[prop] = 'Tsujike';
  console.log(obj.name); //'Tsujike'

  //プロパティを書き換える
  obj['name'] = 'etau';
  console.log(obj.name); //'etau'


  //オブジェクトにメソッドを定義する
  obj.getYourName = function () { return this.name };
  console.log(obj.getYourName());//etau

  //メソッドを書き換える
  obj.getYourName = function () { return `${this.name}様` };
  console.log(obj.getYourName());//etau様


  //組み込みオブジェクトStringに、オリジナルメソッドgetFirstIndex()を定義する
  String.prototype.getFirstIndex = function () { return this[0] };
  console.log('ABC'.getFirstIndex());//A

}

//Symbol()関数に引数で文字列を渡すと、シンボルに名前をつけられる。
// const sym2 = Symbol('つじけ');


function myFunction1_4_03() {

  const obj = {};
  let x, y, n, m;

  //プロパティに文字列
  x = 'name';
  obj[x] = 'Noriko';
  console.log(obj[x]); //'Noriko'

  //プロパティ名が重複すると上書きする
  y = 'name';
  obj[y] = 'Noriaki';
  console.log(obj[x]); //'Noriaki'

  //プロパティ名にシンボルを使う
  n = Symbol();
  obj[n] = 'Norisuke';
  console.log(obj[n]); //'Norisuke'

  //重複せず、上書きされない
  m = Symbol();
  obj[m] = 'Masanori';
  console.log(obj[n]); //'Norisuke'

}


//シンボルがドット記法で呼び出せない理由
//https://jsprimer.net/basic/object/

function myFunction1_4_04() {

  //組み込みオブジェクトStringに、オリジナルメソッドgetFirstIndex()を定義する
  String.prototype.getFirstIndex = function () { return this[0] };
  console.log('ABCD'.getFirstIndex());//A

  //突然誰かが、組み込みオブジェクトStringに、同名のオリジナルメソッドgetFirstIndex()を定義すると、上書きされる
  const functionName1 = 'getFirstIndex';
  String.prototype[functionName1] = function () { return this[1] };
  console.log('ABCD'.getFirstIndex());　//B


  //なので、文字列型の名前ではなく、シンボルでメソッドを追加定義する
  const functionName2 = Symbol();
  String.prototype[functionName2] = function () { return this[2] };
  console.log('ABCD'[functionName2]());　//C

  //Symbolは唯一無二なので、メソッドは上書きされない
  const functionName3 = Symbol();
  String.prototype[functionName3] = function () { return this[3] };
  console.log('ABCD'[functionName2]());　//C

  console.log('ABCD'[functionName3]());　//D

}


function myFunction1_4_05() {

  //文字列型をStringオブジェクトに変換するラッパーオブジェクト
  let name = 'kenzo';
  console.log(name.length); //5
  console.log(name[1]); //e

  //型の確認と明示的なStringオブジェクトの生成
  console.log(typeof name); //String

  name = new String('kenzo');
  console.log(name); //	{ '0': 'k', '1': 'e', '2': 'n', '3': 'z', '4': 'o' }
  console.log(name.valueOf(), typeof name); //kenzo, object

  //オブジェクト同士の比較
  console.log('kenzo' === 'kenzo'); //true
  console.log(new String('kenzo') === new String('kenzo')); //false
  console.log(new String('kenzo') == new String('kenzo')); //false

}


function myFunction1_4_05() {

  //Stringオブジェクトのメソッド
  const name = 'kenzo';
  console.log(name.length); //5
  console.log(name.toUpperCase()); //KENZO
  console.log(name.replace('ken', 'ben')); //benzo

  //正式なオブジェクトは、プロパティが残る
  const obj = {};
  obj.someProperty = 17;
  console.log(obj['someProperty']); //17

  //呼び出しのさい、最初の'hello'.someProperty = 17は破棄されている
  'hello'.someProperty = 17;
  console.log('hello'['someProperty']); //undefined

}



