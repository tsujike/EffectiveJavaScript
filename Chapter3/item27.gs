//ホントに一瞬だけevalについて
// eval(string)と書いて、stringをコードとして評価するもの
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval
//eval MDN

function myFunction27_00() {

  //暗黙の型変換をしない
  console.log(eval('2 + 2')); //4

  //コンパイルした気分
  console.log(eval('function myFunction(){return "my name is eval"};myFunction()')); //my name is eval

  //FizzBuzz
  console.log(eval('function fizzBuzzOneLiner1(){for(let i=1; i<=100; i++){console.log((i%3 ? "":"fizz")+(i%5 ? "":"buzz")||i);}};fizzBuzzOneLiner1();'));

}



//後で再利用するために、コードを文字列にしておくのか、関数にしておくのかという話

function myFunction27_01() {

  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      eval(action);
    }
  }

}



// なぜなら、文字列はクロージャじゃないから
//クロージャmake関数を思い出しましょう

function myFunction2_11_04() {

  function makeSandwich() {

    let vegetable = 'レタス';
    function make(topping = 'なし') {
      return vegetable + 'and' + topping;
    }

    return make;
  }

  const sw = makeSandwich(); //戻り値に関数makeを格納している
  console.log(sw); //[Function: make]

  console.log(sw()); //レタスandなし
  // console.log(sw('トマト')); //レタスandトマト

}


//evalは文字列の中で参照を見つけたら、グローバルを見にいくらしいけど、
//どうかんがえても、文字列もクロージャだと思うんだけどなぁ。。。。。（グローバル変数を見にいくとは限らない）

function myFunction27_02() {

  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      let SALES = 0;
      eval(action);
    }
  }

  const textFunction = `
  function myFunction(){
    const latestSaleReport = SALES + "億ドル";
    console.log(latestSaleReport)};
    myFunction()`;

  repeat(3, textFunction); //0億ドル 0億ドル 0億ドル

}


//まぁいいや、グローバル変数に置けばみんなが使えて便利でしょ。

function myFunction27_03() {

  let SALES = 100;
  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      eval(action);
    }
  }

  const textFunction = `
  function myFunction(){
    const latestSaleReport = SALES + "億ドル";
    console.log(latestSaleReport)};
    myFunction()`;

  repeat(3, textFunction);


}

//だけど、関数の中に入れてしまったら誰も書き換えられなくなる（100億ドルで固定）でしょ

function myFunction27_03() {

  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      eval(action);
    }
  }

  const textFunction = `
  function myFunction(){
  let SALES = 100;
    const latestSaleReport = SALES + "億ドル";
    console.log(latestSaleReport)};
    myFunction()`;

  repeat(3, textFunction); //100億ドル 100億ドル 100億ドル

}




//だから、文字列として渡さないんだ。evalなんか使わないで、関数として渡すんだ。
//関数はクロージャだから、「適切なスコープチェーンを参照する」
function myFunction27_04() {

  let SALES = 100;

  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      console.log(action());
    }
  }

  const getLatestReport = () => {
    const latestSaleReport = SALES + "億ドル";
    return latestSaleReport;
  }

  repeat(3, getLatestReport);　//100億ドル 100億ドル 100億ドル

}


