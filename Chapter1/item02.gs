function myFunction2_00() {

  console.log(0b1100); //12

  console.log(typeof 17); //number
  console.log(typeof -2.1); //number
  console.log(typeof 0b1100); //number


  console.log(0.1 * 1.9); //0.19
  console.log(2.5 / 5); //0.5
  console.log(21 % 8); //5

  //ビット演算 = 暗黙の32ビット整数変換
  console.log(8 | 1); //9

  console.log((8).toString(2)); //1000
  console.log(100.0.toString()); //100

  //バイナリリテラル
  console.log(0b00000000000000000000000000001001); //9
  console.log(0b1001); //9

  //parseInt
  console.log(parseInt('00000000000000000000000000001001',2)); //9
  console.log(parseInt('1001',2)); //9

  //循環小数
  console.log(10/3); //3.3333333333333335
  console.log((3.3333333333333335).toString(2)); //11.010101010101010101010101010101010101010101010101011 //2+1+51

  //オクタリテラルhttps://www.webcyou.com/?p=6711
  console.log(010); //8
  console.log(017); //15
  console.log(018); //18
  console.log(020); //16


  console.log((100).toString(2)); //'1010'
  console.log((-0xff).toString(2)) // '-11111111'

  console.log(parseInt("10歳")); //10
  console.log(parseInt("10歳",10)); //10
  console.log(parseInt("1010歳",2)); //10
  console.log(parseInt(1010,2)); //10


  //小数点を2進数で表すと、桁がいくらあっても足りない。
  //例えば、4桁の2進数で表すと、重みである、0.5 0.25 0.125 0.0625の4つの組合わせでないと表現できない
  console.log((0).toString(2));      //'0.0000'
  console.log((0.0625).toString(2)); //'0.0001'
  console.log((0.125).toString(2));  //'0.0010'
  console.log((0.1875).toString(2)); //'0.0011'
  console.log((0.25).toString(2));   //'0.0100'
  console.log((0.5).toString(2));    //'0.1000'

  //10進数の0.625と0.125の間の0.1を2進数に変換すると、小数点以下の桁数が何百あっても足りない。
  console.log((0.1).toString(2)); //0.0001100110011001100110011001100110011001100110011001101（丸め）

  //循環小数と呼ばれるこれと同じ
  console.log(10 / 3); //3.3333333333333335

  //なので、有名なこのような現象になる
  console.log(0.1 + 0.2); //0.30000000000000004
  console.log(0.1 + 0.2 === 0.3); //false

  //こうやってもダメ
  console.log(((0.1 * 10) + (0.2 * 10)) * 0.1); //0.30000000000000004
  console.log(((0.1 + 0.2) * 10)); //0.30000000000000004

  //テキストではこう言ってる
  console.log(1 + 2); //0.30000000000000004
  console.log(1 + 2 === 3); //false

}


function myFunction2_01() {

  const THOUSANDS = 10 ** 3;
  const HUNDREDS = 10 ** 2;
  const TENTH = 10 ** 1;
  const FIRST = 10 ** 0;

  const t = 2 * THOUSANDS;
  const h = 5 * HUNDREDS;
  const te = 0 * TENTH;
  const f = 3 * FIRST;

  console.log(t + h + te + f); //2503

}


function myFunction2_02() {

  const FORTH = 2 ** 3;
  const THIRD = 2 ** 2;
  const SECOND = 2 ** 1;
  const FIRST = 2 ** 0;

  const a = 1 * FORTH;
  const b = 1 * THIRD;
  const c = 0 * SECOND;
  const d = 0 * FIRST;

  console.log(a + b + c + d); //12

}


function myFunction2_03() {

  console.log((12).toString(2)); //'1100'

}


function myFunction2_04() {

  console.log(Number.parseInt(1100, 2)); //12
  console.log(parseInt(1100, 2)); //12

}


function myFunction2_05() {

  console.log((8).toString(2).padStart(32, 0)); //00000000000000000000000000001000
  console.log((1).toString(2).padStart(32, 0)); //00000000000000000000000000000001

}


function myFunction2_06() {

  console.log((8).toString(2).padStart(32, 0)); //00000000000000000000000000001000
  console.log((1).toString(2).padStart(32, 0)); //00000000000000000000000000000001

  //&は論理積
  const bitwiseAnd = 8 & 1;
  console.log(typeof bitwiseAnd); //number

  console.log(bitwiseAnd); //2進数0000が論理積の解
  console.log(parseInt(0000, 2)); //0000とは0である
  console.log(8 & 1); //0

  //|は論理和
  const bitwiseOr = 8 | 1;
  console.log(typeof bitwiseOr); //number

  console.log(bitwiseOr); //2進数1001が論理積の解
  console.log(parseInt(1001, 2)); //1001とは9である
  console.log(8 | 1); //9

}

function myFunction2_07() {

  //1011（いちぜろいちいち）
  const FORTH = 2 ** 3;
  const THIRD = 2 ** 2;
  const SECOND = 2 ** 1;
  const FIRST = 2 ** 0;

  const a = 1 * FORTH;
  const b = 0 * THIRD;
  const c = 1 * SECOND;
  const d = 1 * FIRST;

  const int = a + b + c + d;　//11（じゅういち）

  //.0011（.ぜろぜろいちいち）
  const U_FIRST = 2 ** -1;
  const U_SECOND = 2 ** -2;
  const U_THIRD = 2 ** -3;
  const U_FORTH = 2 ** -4;

  const e = 0 * U_FIRST;
  const f = 0 * U_SECOND;
  const g = 1 * U_THIRD;
  const h = 1 * U_FORTH;

  const float = e + f + g + h; //.1875（てんいちはちななご）

  console.log(int + float); //11.1875（じゅういってんいちはちななご）

  console.log((11.1875).toString(2)); //1011.0011（いちぜろいちいち.ぜろぜろいちいち）

}


function myFunction2_08() {

  const U_FIRST = 2 ** -1;
  const U_SECOND = 2 ** -2;
  const U_THIRD = 2 ** -3;
  const U_FORTH = 2 ** -4;

  console.log(U_FIRST); //0.5
  console.log(U_SECOND); //0.25
  console.log(U_THIRD); //0.125
  console.log(U_FORTH); //0.0625

}


function myFunction2_09() {

  //10進数の0.625と0.125の間の0.1を2進数に変換すると、小数点以下の桁数が何百あっても足りない。
  console.log((0.1).toString(2)); //0.0001100110011001100110011001100110011001100110011001101（丸め）

  //循環小数
  console.log(10 / 3); //3.3333333333333335

  //有名な、コンピュータが計算を間違う例
  console.log(0.1 + 0.2); //0.30000000000000004
  console.log(0.1 + 0.2 === 0.3); //false

  //後述するtoFixed()メソッドによる裏取り
  const x = Number((0.1).toFixed(20)); //0.10000000000000000555
  const y = Number((0.2).toFixed(20)); //0.20000000000000001110
  console.log(0.1 + 0.2 === x + y); //true 0.30000000000000004

}



function myFunction2_10() {

  //ゼロの省略
  console.log(.123); //0.123
  console.log(123.); //123

  //組み込みNumberメソッドにぶつける数値リテラル
  console.log(123.5.toFixed()); //124
  console.log(123..toFixed()); //123
  console.log((123).toFixed()); //123

  console.log(10.0.toString(2)); //1010
  console.log(10..toString(2)); //1010
  console.log((10).toString(2)); //1010

  //バイナリリテラル
  console.log(0b00000000000000000000000000001001); //9
  console.log(0b1001); //9

}


function myFunction2_11() {
  //小数点以下を○○して整数を返す

  //四捨五入する
  console.log(Math.round(12.4)); // 12
  console.log(Math.round(12.5)); // 13

  //切り捨てる
  console.log(Math.floor(12.4)); // 12
  console.log(Math.floor(12.555)); // 12

  //切り上げる
  console.log(Math.ceil(12.4)); // 13
  console.log(Math.ceil(12.53)); // 13

}

function myFunction2_12() {

  //小数点第一位を基準とする（四捨五入・切り捨て・切り上げ）
  console.log(Math.round(123.456 * 10) / 10); //123.5
  console.log(Math.floor(123.456 * 10) / 10); //123.4
  console.log(Math.ceil(123.456 * 10) / 10); //123.5

  //十の位を基準とする（四捨五入・切り捨て・切り上げ）
  console.log(Math.round(125.456 / 10) * 10); //130
  console.log(Math.floor(123.456 / 10) * 10); //120
  console.log(Math.ceil(125.456 / 10) * 10); //130

}

function myFunction2_13() {

  const x = Math.floor(0.10123 * 10) / 10; //0.1
  const y = Math.floor(0.20123 * 10) / 10; //0.2

  console.log(x + y === 0.3); //false

}

function myFunction2_14() {

  //5.015を倍精度小数点で16桁確認する
  console.log((5.015).toFixed(16)); //5.0149999999999997

  //小数点以下2桁で表示する（3桁目を四捨五入で丸める）
  console.log((5.015).toFixed(2)); //5.01


  //5.025を倍精度小数点で17桁確認する
  console.log((5.025).toFixed(17)); //5.02500000000000036

  //小数点以下2桁で表示する（3桁目を四捨五入で丸める）
  console.log((5.025).toFixed(2)); //5.03

  //型の確認
  console.log(typeof (0.1).toFixed(1)); //string
}

function myFunction2_15() {

  /**
   * 小数点以下3桁を四捨五入で丸め、2桁の文字列で返す関数
  */
  const financial = x => {
    return Number.parseFloat(x).toFixed(2);
  };

  console.log(financial(123)); //'123.00'
  console.log(financial(123.456)); //'123.46'
  console.log(financial('123456.02円')); //'123456.02'

}



