function myFunction21_01() {
  'use strict'

  /**
   * 平均を返す関数
   */
  const avarage = function () { //アロー関数は使えません

    console.log(arguments); //{ '0': 10, '1': 0 }

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum / arguments.length;

  };

  console.log(avarage(10, 0)); //5
}





function myFunction21_02() {
  'use strict'

  /**
   * 平均を返す関数
   */
  const avarage = function () { //アロー関数は使えません

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum / arguments.length;

  };

  console.log(avarage([10, 0])); //NaN

}


function myFunction21_03() {
  'use strict'

  /**
   * 平均を返す関数
   */
  const avarage = function () { //アロー関数は使えません

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum / arguments.length;

  };

  console.log(avarage.apply(this, [10, 0])); //5
  console.log(avarage.apply(null, [10, 0])); //5

}




function myFunction21_04() {
  'use strict'

  /**
   * 平均を返す関数
   */
  const avarage = array => {
    const infinityArray = array.flat(Infinity);
    const sum = infinityArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    const avarage = sum / infinityArray.length;
    return avarage;
  };

  console.log(avarage([10, 0])); //5
  console.log(avarage([[10, 0]])); //5
}




function myFunction21_05() {
  'use strict'

  /**
   * 平均を返す関数
   */
  const avarage = function () { //アロー関数は使えません

    const array = Array.from(arguments);
    const sum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
    const avarage = sum / arguments.length;
    return avarage;

  };

  console.log(avarage.apply(this, [10, 0])); //5
  console.log(avarage.apply(null, [10, 0])); //5

}




function myFunction21_06() {
  'use strict'

  const buffer = {

    state: [],

    append() {
      for (let i = 0; i < arguments.length; i++) {
        this.state.push(arguments[i]);
      }
    }

  };

  buffer.append('Tsuji', ' ', 'Kenzo', '!!!');
  console.log(buffer.state); //	['Tsuji', ' ', 'Kenzo', '!!!' ]

}




function myFunction21_07() {
  'use strict'

  const buffer = {

    state: [],

    append() {
      for (let i = 0; i < arguments.length; i++) {
        this.state.push(arguments[i]);
      }
    }

  };

  /**
   * 文字列を含む配列を返す関数
   */
  const getInputStrings = () => {
    return ['Sep-2021', '20 Mon'];
  };

  buffer.append('Tsuji', ' ', 'Kenzo', '!!!');

  //配列がそのままappendされてしまう
  buffer.append(getInputStrings());
  console.log(buffer.state); //[ 'Tsuji', ' ', 'Kenzo', '!!!', [ 'Sep-2021', '20 Mon' ] ]

}



function myFunction21_08() {
  'use strict'

  const buffer = {

    state: [],

    append() {
      for (let i = 0; i < arguments.length; i++) {
        this.state.push(arguments[i]);
      }
    }

  };

  /**
   * 文字列を含む配列を返す関数
   */
  const getInputStrings = () => {
    return ['Sep-2021', '20 Mon'];
  };

  const birthDay = {
    state: ['つじけさんの誕生日は']
  }

  buffer.append('Tsuji', ' ', 'Kenzo', '!!!');

  buffer.append.apply(birthDay, getInputStrings());
  console.log(birthDay.state); //	[ 'つじけさんの誕生日は', 'Sep-2021', '20 Mon' ]

  buffer.append.apply(buffer, getInputStrings());
  console.log(buffer.state); //[ 'Tsuji', ' ', 'Kenzo', '!!!', 'Sep-2021', '20 Mon' ]

  // buffer.append.apply(null, getInputStrings()); //TypeError: Cannot read property 'state' of null
}



