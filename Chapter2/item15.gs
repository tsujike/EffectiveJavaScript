function myFunction15_03() {

  function f() { return '一番外側の関数スコープです'; }

  function test(x) {

    function f() { return '内側の関数スコープ'; }

    const result = [];
    if (x) {
      result.push(f());
    }

    result.push(f());
    return result;
  }

  console.log(test(true)); //	[ '内側の関数スコープ', '内側の関数スコープ' ]
  console.log(test(false)); //[ '内側の関数スコープ' ]

}



function myFunction15_04() {

  function f() { return '一番外側の関数スコープです'; }

  function test(x) {

    //   function f() { return '内側の関数スコープ'; }

    const result = [];
    if (x) {
      result.push(f());
    }

    result.push(f());
    return result;
  }

  console.log(test(true)); //	[ '一番外側の関数スコープです' ]
  console.log(test(false)); //[ '一番外側の関数スコープです' ]

}



function myFunction15_05() {

  function f() { return '一番外側の関数スコープです'; }

  function test(x) {

    const result = [];
    if (x) {
      function f() { return '内側の関数スコープ'; }
      result.push(f());
    }

    result.push(f());
    return result;
  }

  console.log(test(true)); //	[ '内側の関数スコープ', '内側の関数スコープ' ]
  console.log(test(false)); //TypeError: f is not a function

}






function myFunction15_01() {

  if (false) {
    function f() { return 'local'; }
  }

  console.log(f()); //TypeError: f is not a function

}



function myFunction15_02() {
  'use strict'

  if (true) {
    function f() { return 'local'; }
  }

  console.log(f()); //TypeError: f is not a function

}