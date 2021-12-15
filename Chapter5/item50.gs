// for (let i = 0; i <= x.length; i++) { } //一回余計に繰り返す
// for (let i = 1; i < x.length; i++) { } //最初の回が抜けている
// for (let i = x; i >= 0; i--) { } //最初の回を繰り返す
// for (let i = x - 1; i > 0; i--) { } //最初の回が抜けている



function myFunction50_01() {

  const players = [{ name: 'Tom', score: 100 }, { name: 'Bob', score: 200 }, { name: 'Ivy', score: 300 }];

  for (let i = 0; i < players.length; i++) {

    players[i].score++;

    //同コード
    // players[i].score = players[i].score + 1;

  }

  console.log(players);　//[{ name:'Tom',score:101}, {name:'Bob',score:201}, {name:'Ivy',score:301}]

}



function myFunction50_02() {

  const players = [{ name: 'Tom', score: 100 }, { name: 'Bob', score: 200 }, { name: 'Ivy', score: 300 }];

  // players.forEach(function (p){
  //   p.score++;
  // });

  //アロー関数で書きましょう
  players.forEach(player => player.score++);

  console.log(players);//[{ name:'Tom',score:101}, {name:'Bob',score:201}, {name:'Ivy',score:301}]

}



function myFunction50_03() {

  const input = [' Tom ', ' Bob     ', '   John'];
  const trimmed = [];

  for (let i = 0; i < input.length; i++) {

    trimmed.push(input[i].trim());

  }
  console.log(trimmed); //[ 'Tom', 'Bob', 'John' ]
}


function myFunction50_04() {

  const input = [' Tom ', ' Bob     ', '   John'];
  const trimmed = [];

  input.forEach(name => trimmed.push(name.trim()));

  console.log(trimmed); //[ 'Tom', 'Bob', 'John' ]
}


function myFunction50_05() {

  const input = [' Tom ', ' Bob     ', '   John'];

  const trimmed = input.map(name => name.trim());

  console.log(trimmed);//[ 'Tom', 'Bob', 'John' ]

}


function myFunction50_06() {

  const listings = [{ price: 1 }, { price: 2 }, { price: 4 }];

  const min = 3;
  const max = 5;
  const result = listings.filter(listing => listing.price >= min && listing.price <= max);

  console.log(result); //	[ { price: 4 } ]

}


function myFunction50_07() {

  /**
   * 配列の要素が10未満の、最長配列を返す関数
   * @param {Array} 整数の1次元配列
   * @param {Function} 引数で渡された整数が条件に合えばbool値をreturnする関数
   * @return  {Array}　結果の2次元配列 
  */
  function takeWhile(a, pred) {

    const result = [];
    for (let i = 0; i < a.length; i++) {

      if (!pred(a[i])) break;

      result[i] = a[i];

    }
    return result;
  }

  const prefix = takeWhile([1, 2, 4, 8, 16, 32], function (n) { return n < 10; });

  console.log(prefix); //[ 1, 2, 4, 8 ]
  return prefix;

}


function myFunction50_08() {

  Array.prototype.takeWhile = function (pred) {

    const result = [];
    for (let i = 0; i < this.length; i++) {

      if (!pred(this[i])) break;

      result[i] = this[i];

    }
    return result;
  };


  const prefix = [1, 2, 4, 8, 16, 32].takeWhile(function (n) { return n < 10; });

  console.log(prefix); //[ 1, 2, 4, 8 ]
}


function myFunction50_09() {

  function takeWhile(a, pred) {

    const result = [];
    a.forEach((element, index) => {

      if (!pred(element)) { /* ?終了命令はどうする? */ return }

      result[index] = element;

    });

    return result;
  }

  const prefix = takeWhile([1, 2, 11, 4, 8, 16, 32], function (n) { return n < 10; });

  console.log(prefix); //	[ 1, 2, , 4, 8 ]
  return prefix;

}


function myFunction50_10() {

  const some = [1, 10, 100].some(element => element > 5); //true
  console.log(some);

  const every = [1, 10, 100].every(element => element > 5); //false
  console.log(every);

}


function myFunction50_11() {

  function takeWhile(a, pred) {

    const result = [];
    a.every((element, index) => {

      if (!pred(element)) return false; //breakと同じ意味

      result[index] = element;
      return true; //continueと同じ意味

    });

    return result;
  }

  const prefix = takeWhile([1, 2, 4, 8, 16, 32], function (n) { return n < 10; });

  console.log(prefix); //	[ 1, 2, 4, 8 ]
  return prefix;

}
