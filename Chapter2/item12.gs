// console.log(globalThis); //{ x: undefined, myFunction12_01: [Function: myFunction12_01] }

// var x = 100;
// console.log(globalThis); //{ x: 100, myFunction12_01: [Function: myFunction12_01] }

// let y = 10;

function myFunction12_01() { }





// console.log(globalThis); //{ x: undefined, myFunction12_01: [Function: myFunction12_01] }

// var x = 100;
// console.log(globalThis); //{ x: 100, myFunction12_01: [Function: myFunction12_01] }

// let y = 10;

function myFunction12_02() {

  let num = y * 2;
  console.log(num); //20

}




function myFunction12_03() {

  console.log(first); //undefined
  first = 'Bob';
  var first;

  console.log(second); //ReferenceError: Cannot access 'y' before initialization
  second = 'Tom';
  let second;

}





function myFunction12_04() {

  console.log(getLength('abcde')); //5

  function getLength(arg) {
    return arg.length;
  }

  function getUpperCase(arg) {
    return arg.toUpperCase();
  }

  console.log(getUpperCase('abcde')); //ABCDE

}




function myFunction12_05() {

  //内部の初期値はundefined
  console.log(getLength('abcde')); //TypeError: getLength is not a function 

  var getLength = (arg) => {
    return arg.length;
  }

  //初期化されていないフラグが初期値に立っている
  console.log(getUpperCase('abcde')); //ReferenceError: Cannot access 'getUpperCase' before initialization

  const getUpperCase = (arg) => {
    return arg.toUpperCase();
  }

}




function myFunction12_06() {

  function isWinner(player, others) {

    var highest = 0;
    for (let i = 0; i < others.length; i++) {

      var player = others[i];
      if (player.score > highest) {
        highest = player.score;
      }
      console.log(player.score); //300 //100
      console.log(highest); //300 //300

    }

    console.log(player.score, highest); //100 300
    return player.score > highest; //false
  }

  var players = [
    {
      name: 'Tom',
      score: 10000
    },
    {
      name: 'Bob',
      score: 300
    },
    {
      name: 'John',
      score: 100
    }
  ];

  console.log(isWinner(players.shift(), players));
}




function myFunction12_07() {

  function isWinner(player, others) {

    let highest = 0;
    for (let i = 0; i < others.length; i++) {

      let player = others[i]; //varをletに変更
      if (player.score > highest) {
        highest = player.score;
      }
      console.log(player.score); //300 //100
      console.log(highest); //300 //300

    }

    console.log(player.score, highest); //10000 300
    return player.score > highest; //true
  }

  const players = [
    {
      name: 'Tom',
      score: 10000
    },
    {
      name: 'Bob',
      score: 300
    },
    {
      name: 'John',
      score: 100
    }
  ];

  console.log(isWinner(players.shift(), players));
}
