/**
 * 引数があるか、もしくはfalsyでないかチェックするPointクラス
 * 
 */
class Point {
  constructor(x, y) {
    this.x = x || 0
    this.y = y || 0
  }

  isOrigin() {
    return this.x === 0 && this.y === 0
  }

}

function myFunction6_01() {

  const p = new Point(null, null);

  console.log(p.isOrigin()); //true

}


function myFunction6_02() {


  const square = x => {
    var n = +x
    return n * n
  }

  const area = r => { r = +r; return Math.PI * r * r }
  const add1 = x => { return x + 1 }

  const x = 10;
  const r = 10;

  console.log(square(x)); //100
  console.log(area(r)); //314.1592653589793
  console.log(add1(x)); //10

  // const area2 = r => { r = +r return Math.PI * r * r } //保存すらできない

}


function myFunction6_03() {

  let a = 10;
  const b = () => { return '私はb関数の戻り値です' };
  const f = () => { return '私はf関数の戻り値です' };

  //正しく解析される（セミコロンは挿入されない）
  a = b
    (f());

  console.log(a); //私はb関数の戻り値です

  //以下と等しい
  a = b(f());
  console.log(a); //私はb関数の戻り値です

  //2つのステートメントとして解釈される
  a = b
  f();
  console.log(a); //[Function: b]
  console.log(f()); //私はf関数の戻り値です

}

function myFunction6_04() {

  //正しく解析される
  let a, b;
  ['a', 'b', 'c'].forEach(element => console.log(element)); //a,b,c

  //保存はできるが、エラーが発生する
  // a = b
  // ['a', 'b', 'c'].forEach(element => console.log(element)); //TypeError: Cannot read property 'forEach' of undefined


  //正しく解析される
  const fail = () => console.log('右辺のfailをtryします');

  let str = 'Hokkaido';
  /love/i.test(str) && fail(); //ログなし
  /ai/i.test(str) && fail(); // //右辺のfailをtryします

  //除算する（オートフォーマットするとわかる）
  const ai = 100;
  const i = /tsujike/;
  a = b
    / ai / i.test(str) && fail();

  console.log(a); //NaN

}

function myFunction6_05() {

  //セミコロンだけは省略できない1
  for (; ;) {
    console.log('無限ループ');
    break; //阻止
  }

  //セミコロンは省略できない2

  //保存すらできない
  // const infinityLoop = () => {while(true)}; //構文エラー: SyntaxError: Unexpected token '}'
  const infinityLoop = () => { while (true); };

}

function myFunction6_06() {

  //制御構文や関数宣言の末尾
  for (const value of []) { }
  while (true) { break }
  //関数リテラルは式の中で宣言された関数なのでセミコロン必要です。
  const func = () => { };

  //要素の改行
  const array = [
    'a',
    'b',
    'c'
  ]

  const obj = {
    x: 10,
    y: 20,
    z: 30

  }

  const msg = `お疲れ様です。
退社します。
今までお世話になりました。

「そっちの退社かい！」`;

  //チェーン記法
  const value = '東京オリンピック'
    .replace('東京', '北京')
    .replace('オリン', 'パラリン');

  console.log(value); //北京パラリンピック

}


function myFunction6_07() {

  //ワンライナーを意識しすぎるのはダメ
  const area = r => { r = +r; return Math.PI * r * r }

  //改行した読みやすいコードこそイケメンです
  const area2 = r => {
    r = +r;
    return Math.PI * r * r;
  };

}







