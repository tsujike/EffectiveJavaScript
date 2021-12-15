//まずは用語から。コールスタック。メモリを積み上げるようにしている。だから、関数を抜けた後に現在地に戻ってこれる仕組み
//一言でいうと、今実行されている関数のチェーンのこと

//一番の目的は、コールスタックを調べること。
//現在地を知るのはconsole.log(arguments.callee); で、これは、今も現役。テキストでは、役に立たないって言ってる。


// 古いホストでは、あらゆるargumentsオブジェクトに2つのプロパティが渡される。
// ・arguments.callee（現役バリバリ）
// ・それを呼び出した関数を参照するarguments.caller

//無名関数で自分自身を再帰的に参照するという用途の他にほとんど役に立たない
function myFunction29_02() {

  const factorial = function (n) {
    return (n <= 1) ? 1 : (n * arguments.callee(n - 1));
  };

  //全ての整数の積、階乗です
  console.log(factorial(1)); //1
  console.log(factorial(2)); //2
  console.log(factorial(3)); //6
  console.log(factorial(4)); //24
  console.log(factorial(5)); //120

  const factorial2 = function (n) {
    return (n <= 1) ? 1 : (n * factorial(n - 1));
  };

  //全ての整数の積、階乗です
  console.log(factorial2(2)); //2
  console.log(factorial2(5)); //120


  //アロー関数も可(可読性が落ちる)
  const factorial3 = n => (n <= 1) ? 1 : (n * factorial(n - 1));

  console.log(factorial3(2)); //2
  console.log(factorial3(5)); //120

}




//なんかいろいろあるんだけど、
function myFunction29_03() {

  function revealCaller() {
    return revealCaller.caller;
  }

  function start() {
    return revealCaller();
  }

  console.log(start() === start); //true

}



function myFunction29_04() {

  function getCallSack() {
    const stack = [];
    for (let f = getCallSack.caller; f; f = f.caller) {
      stack.push(f);
    }
    return stack;
  }

  function f1() {
    return getCallSack();
  }

  function f2() {
    return f1();
  }

  const trace = f2();
  console.log(trace);

  /*
  [ [Function: f1],
    [Function: f2],
    [Function: myFunction29_04],
    [Function] ]
  */

}




function myFunction29_05() {

  function getCallSack() {
    const stack = [];
    for (let f = getCallSack.caller; f; f = f.caller) {
      stack.push(f);
    }
    return stack;
  }


  function f(n) {
    return n === 0 ? getCallSack() : f(n - 1);
  }

  const trace = f(1); //無限ループ

}



function myFunction29_06() {

  function f() {
    // 'use strict'
    return f.caller;
  }

  f(); //TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them

}



//結局前回のやつなのかな。
function myFunction1() {
  myFunction2();
}

function myFunction2() {
  myFunction3();
  console.log(myFunction2.caller.name); //myFunction1
  console.log(arguments.callee); //	[Function: myFunction2]
}

function myFunction3() {
  console.log(myFunction3.caller.name); //myFunction2
  console.log(arguments.callee); //	[Function: myFunction3]
}


