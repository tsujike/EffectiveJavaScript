//augumentsオブジェクトはアロー関数では使えない
function myFunction23_00() {

  /**
   * 引数を操作する関数
  */
  const getArgument = parameter => {
    console.log(arguments); //{}
  };

  getArgument(100);

}

function myFunction23_00_02() {

  /**
   * 引数を操作する関数
  */
  const getArgument = function (...parameter) {
    console.log(parameter); //[ 100, 0 ] ]
    console.log(arguments); //{ '0': 100, '1': 0 }
  };

  getArgument(100, 0);

}

function myFunction23_00_03() {
  'use strict'

  /**
   * 引数を操作する関数
  */
  const getArgument = function (...parameter) {
    console.log(parameter); //[ 100, 0 ] ]
    console.log(arguments); //{ '0': 100, '1': 0 }
  };

  getArgument(100, 0);

}






function myFunction23_01() {

  /**
   * 引数を操作する関数
  */
  const getArgument = function (parameter) {
    console.log(arguments); //{ '0': 100 }
    console.log(parameter);　//100

    console.log(arguments[0] === parameter); //true
    console.log(arguments['0'] === parameter); //true

    //console.log(arguments.shift()); //TypeError: arguments.shift is not a function
  };

  getArgument(100);

}


function myFunction23_02() {
  // 'use strict'

  let arguments; //SyntaxError: Unexpected eval or arguments in strict mode

}

function myFunction23_03() {
  'use strict'

  /**
   * 引数を操作する関数
  */
  const getArgument = function (parameter) {
    parameter = 200;

    console.log(arguments); //{ '0': 100 }
    console.log(parameter);　//200

    console.log(arguments[0] === parameter); //false
    console.log(arguments['0'] === parameter); //false
  };

  getArgument(100);

}


function myFunction23_04() {

  /**
   * 引数を操作する関数
  */
  const getArgument = function (parameter) {
    parameter = 200;

    console.log(arguments); //{ '0': 200 }
    console.log(parameter);　//200

    console.log(arguments[0] === parameter); //true
    console.log(arguments['0'] === parameter); //true
  };

  getArgument(100);

}


function myFunction23_05() {

  /**
   * 引数を操作する関数
  */
  const getArgument = (...parameter) => {
    // 'use strict'
    // SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list 行: 112 ファイル: 03_23.gs
  };

  getArgument(100, 0);

}



function myFunction23_06() {

  /**
   * 引数を操作する関数
  */
  const getArgument = function (...parameter) {
    parameter = 200;

    console.log(arguments); //{ '0': 100, '1': 0 }
    console.log(parameter);　//200

    console.log(arguments[0] === parameter); //false
    console.log(arguments['0'] === parameter); //false
  };

  getArgument(100,0);

}




