function myFunction1_01() {

  const PI = 3.141592653589793;
  PI = 'modified!'; // TypeError: Assignment to constant variable.
  console.log(PI);

}


function myFunction1_02() {
  "use strict";

  { num = 10 }; // グローバル変数への結合を禁止する
  console.log(num); // => ReferenceError: num is not defined

}


function myFunction1_03(x) {
  // "use strict";

  const arguments = []; // argumentsオブジェクトの再定義は禁止。保存すらできない

}


function myFunction1_04() {
  // "use strict";

  const func = function (value, value) { // 重複する引数名は禁止。保存すらできない
    return value + value;
  }

}


function myFunction1_05() {

  // const getValue = (value, value) => value + value; // アロー関数では、引数名の重複を認めていない。保存すらできない

}
