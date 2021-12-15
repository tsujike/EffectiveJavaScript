function myFunction1_3_01() {

  //実行する際はコメントインアウトしながら
  // console.log("hello"(1)); //TypeError: "hello" is not a function
  // console.log(null.x); //TypeError: Cannot read property 'x' of null

}


function myFunction1_3_02() {

  console.log(3 + true); //4

  //文字列を優先する強制（coerce）
  console.log('2' + 3); //'23'
  console.log(2 + '3'); //'23'

}


function myFunction1_3_03() {

  //複数の型が混在する演算
  console.log(1 + 2 + '3'); //'33'
  console.log(1 + '2' + 3); //'123'

  //左結合を行っているようである
  console.log((1 + 2) + '3'); //'33'
  console.log((1 + '2') + 3); //'123'

  //乗算は数値型を優先？
  console.log('17' * 3); //51

}

function myFunction1_3_04() {

  //論理和
  console.log('8' & 1); //0

  //論理積
  console.log('8' | '1'); //9

}

function myFunction1_3_05() {

  //nullはエラーが起きるはずだが、0に変換されてしまう
  const n = null;
  console.log(n + 1); //1

  //undefinedはエラーが起きるはずだが、NaNに変換されてしまう
  const u = undefined;
  console.log(u + 1); //NaN

  //NaNはnumber型である
  console.log(typeof NaN); //number

}

function myFunction1_3_06() {

  //NaNがNaNであるかを判定できない
  const x = NaN;
  console.log(x === NaN); //false
  console.log(x == NaN); //false

  //isNaN()メソッドで判定できる
  console.log(isNaN(NaN)); //true

}

function myFunction1_3_07() {

  //NaN以外の引数は、isNaN()メソッドでは判定できない
  console.log(isNaN('foo')); //true
  console.log(isNaN(undefined)); //true 
  console.log(isNaN({})); //true
  console.log(isNaN({ valueOf: 'foo' })); //true

  //仕様を逆手に取った判定
  const a = NaN;
  console.log(a !== a); //true

  const b = 'foo';
  console.log(b !== b); //false

  const c = undefined;
  console.log(c !== c); //false

  const d = {};
  console.log(d !== d); //false

  const e = { valueOf: 'foo' };
  console.log(e !== e); //false

  /**
   * NaNかどうかを判定する関数
  */
  const isReallyNaN = x => x !== x;

  console.log(isReallyNaN(NaN)); //true
  console.log(isReallyNaN(undefined)); //false

}

function myFunction1_3_08() {

  //リテラルでオブジェクトを生成する2つのトップレベルオブジェクト
  console.log(JSON, typeof JSON); //{}, object
  console.log(Math, typeof Math); //{}, object

  //オブジェクトはtoString()メソッドをぶつけると、文字列型に変換されたときの値を確認できる
  console.log(Math.toString()); //[object Math]
  console.log(JSON.toString()); //[object Math]

  //オブジェクトから文字列への強制型変換
  console.log('わたしは' + JSON + 'です'); //わたしは[object JSON]です
  console.log('わたしは' + Math + 'です'); //わたしは[object Math]です

}


function myFunction1_3_09() {

  //valueOf()メソッドはオブジェクトのthis.valueを返す
  const x = (123).valueOf();
  console.log(x, typeof x); //123 'number'

  //数値型から文字列への強制（おさらい）
  console.log(2 + '3'); //'23'

  //valueOf()メソッドを使った型(値)制御
  console.log(2 + { valueOf: function () { return 3; } }); //5

  //オブジェクトの型変換強制では、valueOf()メソッドが優先的に呼び出される
  const obj = {

    toString() {
      return 'hoge';
    },

    valueOf() {
      return 17;
    }

  };

  console.log('object:' + obj); //object:17
}


function myFunction1_3_00() {
  return
  console.log(Number, typeof Number); //[Function: Number] 'function'

  console.log('the Math object' + Math); //the Math object[object Math]
  console.log('the JSON object' + JSON); //the JSON object[object JSON]

  console.log(Number.toString()); //function Number() { [native code] }




  return

  console.log(String);　//[Function: String]
  console.log(Number);　//[Function: Number]
  console.log(Boolean);　//[Function: Boolean]
  console.log(Object);　//[Function: Object]
  console.log(Date);　//[Function: Date]
  console.log(Array);　//[Function: Array]
  console.log(RegExp);　//[Function: Array]
  console.log(Function);　//[Function: Function]
  console.log(Map);　//[Function: Map]
  console.log(Set);　//[Function: Set]
  console.log(Symbol);　//[Function: Symbol]
  console.log(parseFloat);　//[Function: parseFloat]
  console.log(parseInt);　//[Function: parseInt]

  console.log(Infinity);　//Infinity
  console.log(NaN);　//NaN

  console.log(console);　//	{ error: [Function],  info: [Function],  log: [Function],  warn: [Function] }

  console.log(Error);　//{ [Function: Error] stackTraceLimit: 10 }


  console.log(SpreadsheetApp);　//Logging output too large. Truncating output. { AutoFillSeries: 
  //  { toString: [Function: toString],
  //    name: [Function: toString],
  //    toJSON: [Function: toString],
  //    ordinal: [Function: ordinal

}


function myFunction1_3_10() {

  //暗黙の型変換でfalseを返す値
  if (false || 0 || -0 || '' || NaN || null || undefined) {
    console.log(true);
  } else {
    console.log('すべてfalseです');
  }

  //'すべてfalseです'

}

function myFunction1_3_11() {

  /**
   * 引数が0かfalsyを判定する関数
   */
  const point = (x = 320, y = 240) => {

    return { x: x, y: y };

  }

  console.log(point(0, 0)); //{ x: 0, y: 0 }
  console.log(point()); //{ x: 320, y: 240 }
  console.log(point(undefined, undefined)); //{ x: 320, y: 240 }

}



function myFunction1_3_12() {

  const values = [[], [''], [0]];

  //暗黙の型変換では判定できない
  for (const value of values) {
    if (value) console.log(`${value}をtrueと判定しました`);
  }
  //をtrueと判定しました, をtrueと判定しました, 0をtrueと判定しました


  //厳密な型判定でも判定できない
  for (const value of values) {

    if (value === [''] || value === [] || value === '') {
    } else {
      console.log(`${value}をfalseと判定しました`);
    }

  }
  //をfalseと判定しました, をfalseと判定しました, 0をfalseと判定しました


  //falseだと要素に0があると判定できない
  for (const value of values) {
    if (value == false) console.log(`${value}は空白です`);
  }
  //は空白です, は空白です, 0は空白です


  //直感的正しく空判定する
  for (const value of values) {
    if (value == '') console.log(`${value}は空白です`);
  }
  //は空白です, は空白です

}



//https://algassert.com/visualization/2014/03/27/Better-JS-Equality-Table.html