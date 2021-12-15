
//ソースコードを文字列で表現する？
function myFunction28_01() {

  const func = function (x) { return x + 1; }.toString();
  console.log(func); //function (x) { return x + 1; }

  //アロー関数では使えない
  // const func =  x　=> x + 1;.toString();
}



//bind関数を呼び出してみる
function myFunction28_02() {

  const reciever = {};
  const func = (function (x) { return x + 1; }).bind(reciever);
  console.log(func); //	[Function: bound ]

  console.log(func.toString()); //function () { [native code] }


}


//クロージャを表現できない
function myFunction28_03() {

  const func2 = (y) => { return x + y };

  //xに42を結合する即時関数
  const func = (function (x) { return func2 })(42).toString();
  console.log(func); //	(y) => { return x + y }

}




