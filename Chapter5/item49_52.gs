function myFunction49_01() {

  const scores = [98, 74, 85, 77, 93, 100, 89];
  let total = 0;
  for (const score in scores) {
    total += score;
  }
  const mean = total / scores.length;
  console.log(mean);
}

function myFunction49_02() {

  const scores = [98, 74, 85, 77, 93, 100, 89];
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  const mean = total / scores.length;
  console.log(mean); //88
}


function myFunction49_03() {

  const scores = [98, 74, 85, 77, 93, 100, 89];
  const total = scores.reduce((acc, cur) => acc + cur, 0);
  console.log(total / scores.length); //88
}



function myFunction52_01() {

  const a = [1, 2, 3, 4, 5];
  const aLiteral = new Array(1, 2, 3, 5, 6);
  console.log(aLiteral); //[1, 2, 3, 5, 6]

  const boolArray = a.map((element, index) => element === aLiteral[index]);
  console.log(boolArray); //	[ true, true, true, false, false ]

}




function myFunction52_02() {

  console.log(Array); //[Function: Array]
  console.log(String); //[Function: String]

  class Test { }
  console.log(Test); //[Function: Test]

  //コンストラクタを変更する関数
  function f(Array) {
    return new Array(1, 2, 3, 4, 5);
  }

  //引数に別のコンストラクタを渡す
  console.log(f(String)); //{ '0': '1' }

  //Stringオブジェクトのコンストラクタはオブジェクトを生成します
  console.log(new String(1)); //{ '0': '1' }

  console.log(new String(1).valueOf()); //1
  console.log(new String(1).toString()); //1

  //番外編コンストラクタをもっていない
  console.log(JSON); //{}
  console.log(SpreadsheetApp); //{}
}




function myFunction52_03() {

  //コンストラクタはかんたんに書き換えることができる
  Array = String;

  console.log(new Array(1, 2, 3, 4, 5)); //{ '0': '1' }

  console.log(new Array(1, 2, 3, 4, 5).valueOf()); //1
  console.log(new Array(1, 2, 3, 4, 5).toString()); //1

}



function myFunction52_04() {

  //Arrayコンストラクタはnullを要素にもつ配列を生成する
  const array = new Array(3);
  console.log(array.length); //3

  //fill()メソッドで埋めると使いやすい
  const array2 = new Array(3).fill('');
  console.log(array2); //[ '', '', '' ]

  //map()と組み合わせるとさらに強力に
  const array3 = new Array(3).fill().map((_, index) => index + 1);
  console.log(array3); //[ 1, 2, 3 ]

}


function myFunction52_05() {

  //この5つはFunctionオブジェクトからコンストラクタを継承してるんじゃないかな
  console.log(Object); //[Function: Object]
  console.log(Object.prototype.toString.call({})); //[object Object]
  console.log(Object.prototype.toString.call(Object)); //[object Function]
  console.log(Object.prototype); //{}
  console.log(Object.__proto__); //[Function]
  console.log();

  console.log(Date); //[Function: Date]
  console.log(Object.prototype.toString.call(new Date())); //[object Date]
  console.log(Object.prototype.toString.call(Date)); //[object Function]
  console.log(Date.prototype); //{}
  console.log(Date.__proto__); //[Function]
  console.log();

  console.log(String); //[Function: String]
  console.log(Object.prototype.toString.call('a')); //[object String]
  console.log(Object.prototype.toString.call(String)); //[object Function]
  console.log(String.prototype); //{}
  console.log(String.__proto__); //[Function]
  console.log();

  console.log(RegExp); //[Function: RegExp]
  console.log(Object.prototype.toString.call(/.*/)); //[object RegExp]
  console.log(Object.prototype.toString.call(RegExp)); //[object Function]
  console.log(RegExp.prototype); //{}
  console.log(RegExp.__proto__); //[Function]
  console.log();

  //Functionオブジェクトのコンストラクタだけど、プロトタイプがなんで配列リテラルなんだろ？
  console.log(Array); //[Function: Array]
  console.log(Object.prototype.toString.call([])); //[object Array]
  console.log(Object.prototype.toString.call(Array)); //[object Function]
  console.log(Array.prototype); /** [] ←Functionオブジェクトのはずなんだけどな。。。*/
  console.log(Array.__proto__); //[Function]
  console.log(Array.__proto__ === Function.prototype); //true
  console.log();

  //コンストラクタそのもの
  console.log(Function); //[Function: Function]
  console.log(Object.prototype.toString.call(function () { })); //[object Function]
  console.log(Object.prototype.toString.call(Function)); //[object Function]
  console.log(Function.prototype); //[Function]
  console.log(Function.__proto__); //[Function]
  console.log(Function.prototype === Function.__proto__); //true
  console.log();

  //コンストラクタが無いんじゃないかな
  console.log(JSON); //{}
  console.log(JSON.prototype); //undefined
  console.log(Object.prototype.toString.call(JSON)); /** [object JSON]  */
  console.log();

  console.log(SpreadsheetApp); //{}
  console.log(SpreadsheetApp.prototype); //undefined
  console.log(Object.prototype.toString.call(SpreadsheetApp)); /** [object Object] */
  console.log();

  //自作コンストラクタ→自作クラスのコンストラクタは、Functionオブジェクトから継承している（デバッガがループする）
  class Test { }
  console.log(Test); //[Function: Test]
  console.log(Object.prototype.toString.call(new Test())); //[object Object]
  console.log(Object.prototype.toString.call(Test)); //[object Function]
  console.log(Test.prototype); //{}　Functionオブジェクトじゃないかな　なぜなら
  console.log(Test.__proto__); //[Function] だから
  console.log(Test.prototype.__proto__); //{}　Objectオブジェクト　Functionオブジェクトの継承元
  console.log(Test.prototype.__proto__.__proto__); //null　Object.prototype.__proto__と同じ意味
  console.log();


}