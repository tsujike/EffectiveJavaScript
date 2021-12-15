// "use strict";



// function myFunction1_1_01() {

//   { num = 10 };
//   console.log(num); //10

// }

// function myFunction1_1_02() {

//   { let num = 10 };
//   console.log(num); //ReferenceError: num is not defined

// }


// "use strict";

// function myFunction1_1_03() {

//   { num = 10 };
//   console.log(num); //ReferenceError: num is not defined

// }




// function myFunction1_1_04(value, value) {

//   return value + value;

// }

// console.log(myFunction1_1_04(1,30)); //20


// "use strict";
// function myFunction1_1_05(value, value) {

//   return value + value;

// }

// console.log(myFunction1_1_05(1,20)); //構文エラー: SyntaxError: Duplicate parameter name not allowed in this context


//関数リテラルでは、引数名の重複を認めていない
// function myFunction1_1_06 () {

//   const getValue = (value, value) => value + value; 
//   //構文エラー: SyntaxError: Duplicate parameter name not allowed in this context

// }
