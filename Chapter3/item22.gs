function myFunction22_01() {

  /**
   * argumentsを返す関数
   * ※アロー関数ではargumentオブジェクトは使えない
  */
  const returnArguments = function () {
    console.log(arguments.length); //3
    console.log(arguments); //{ '0': 'Tom', '1': 'Bob', '2': 'Ivy' }
  }

  returnArguments('Tom', 'Bob', 'Ivy');


  /**
   * インデックスの要素を返す関数
  */
  const getTypeElement = function () {
    for (let i = 0; i < arguments.length; i++) {
      console.log(typeof arguments[i]); //string, boolean, number
    }

  }

  getTypeElement('Tom', true, 100);


  /**
    * argumentsに組み込みオブジェクトArrayメソッドをぶつけてみる関数
    * ※argumentオブジェクトは配列ではない
   */
  const createArray = function () {
    console.log(arguments.shift()); //TypeError: arguments.shift is not a function
  }

  createArray('Tom', 'Bob', 'Ivy');

}



function myFunction22_02() {

  const array1 = [1, 2, 3];
  const array2 = [4, 5];

  const newArray1 = [array1, array2];
  console.log(newArray1); //[ [ 1, 2, 3 ], [ 4, 5 ] ]

  const newArray2 = [...array1, ...array2];
  console.log(newArray2); //	[ 1, 2, 3, 4, 5 ]

  //配列のコピーを作成する
  const array3 = [...array1];
  console.log(array3); //[ 1, 2, 3 ]
  console.log(array1 === array3); //false

}





function myFunction22_03() {

  /**
    * 引数を返す関数
   */
  const returnElements = args => {
    console.log(args); //['Tom', 'Bob', 'Ivy']
  }

  const persons = ['Tom', 'Bob', 'Ivy'];
  returnElements(persons)


  /**
    * 引数を返す関数
   */
  const returnElements2 = args => {
    console.log(args); //Tom
  }

  const persons2 = ['Tom', 'Bob', 'Ivy'];
  returnElements2(...persons2)

}



function myFunction22_04() {

  const array1 = [1, 2, 3, 4, 5];

  const [x, y, ...z] = array1;

  console.log(x); //1
  console.log(y); //2
  console.log(z); //[3, 4, 5]

  //これだとスプレッド構文と表現したくなる
  const [...arr] = array1;
  console.log(arr);  //[ 1, 2, 3, 4, 5 ]

  //スプレッドシートからvaluesを取得
  // const sheet = SpreadsheetApp.getActiveSheet();
  // const [headers, ...values] = sheet.getDataRange().getValues();
}



function myFunction22_05() {

  /**
   * 平均を返す関数
   */
  const avarage = (...arg) => {
    const sum = arg.reduce((previousValue, currentValue) => previousValue + currentValue);
    const avarage = sum / arg.length;
    return avarage;
  };

  console.log(avarage(1, 2, 3)); //2

}



function myFunction22_06() {

  /**
   * 平均を返す関数
   */
  const avarage = (...arg) => {
    const sum = arg.reduce((previousValue, currentValue) => previousValue + currentValue);
    const avarage = sum / arg.length;
    return avarage;
  };

  console.log(avarage([1, 2, 3])); //NaN

}





function myFunction22_07() {

  /**
   * 平均を返す関数
   */
  const avarage = (...arg) => {
    const sum = arg.reduce((previousValue, currentValue) => previousValue + currentValue);
    const avarage = sum / arg.length;
    return avarage;
  };

  console.log(avarage.apply(null, [1, 2, 3])); //2
}




function myFunction22_08() {

  /**
   * 平均を返す関数
   */
  const avarage = (...arg) => {
    const sum = arg.reduce((previousValue, currentValue) => previousValue + currentValue);
    const avarage = sum / arg.length;
    return avarage;
  };

  //固定アリティに対応
  const numbers = [1, 2, 3];
  console.log(avarage(...numbers)); //2

  //可変長引数に対応
  console.log(avarage(100, 0)); //50

}