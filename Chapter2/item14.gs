function myFunction14_01() {

  binding();

  function binding() {
    console.log('結合先を探します');
  }

  binding();

}



function myFunction14_02() {

  //関数宣言
  function double(x) { return x * 2; }

  //関数式
  const f = function double(x) { return x * 2; };

  //関数リテラル
  const func = function (x) { return x * 2; };

  //関数リテラル（アロー関数）
  const getDouble = x => { return x * 2; };

  double();

  f();
  func();
  getDouble();

}



function myFunction14_03() {

  const f = function double(x) {
    return double.name;
  };


  const getDouble = function (x) {
    return this.name;
  };

  console.log(f); //[Function: double]

  console.log(getDouble); //[Function: getDouble]

}


function myFunction14_04() {

  const sum = function getSum(n) {

    if (n <= 0) { return n; }

    return n + getSum(n - 1);

  }

  const n = 10;
  const total = sum(n);
  console.log(`1から${n}まで加算すると${total}です`); //1から10まで加算すると55です

}


function myFunction14_04() {


  const sum = function getSum(n) {

    if (n <= 0) { return n; }

    return n + getSum(n - 1);

  }

  const n = 10;
  const total = sum(n);
  console.log(`1から${n}まで加算すると${total}です`); //1から10まで加算すると55です

}



function myFunction14_05() {


  const sum = n => {

    if (n <= 0) { return n; }

    return n + sum(n - 1);

  }

  const n = 10;
  const total = sum(n);
  console.log(`1から${n}まで加算すると${total}です`); //1から10まで加算すると55です

}

