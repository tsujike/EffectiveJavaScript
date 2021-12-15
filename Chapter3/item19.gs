
function myFunction19_01() {

  const name = "Tsujike";
  const greeting = "Hi, I'm ";
  console.log(`${greeting}${name}`); //Hi, I'm Tsujike

}


function myFunction19_02() {

  function greet(name) {
    const greeting = "Hi, I'm ";
    return `${greeting}${name}`;
  }

  console.log(greet("Tsujike")); //Hi, I'm Tsujike

}



function myFunction19_03() {

  const name = "Tsujike";

  function greet() {
    const greeting = "Hi, I'm ";
    console.log(`${greeting}${name}`);//Hi, I'm Tsujike
  }

  greet("Tsujike");

}




function myFunction19_04() {

  function makeAdjecttifier(adjective) {
    return function (string) {
      return `${adjective} ${string} `;
    }
  }

  const greetingifier = makeAdjecttifier("Hi, I'm ");

  console.log(greetingifier("Tsujike")); //Hi, I'm  Tsujike 

}


//継承ではないのでクラスではない
function myFunction19_05() {

  const makeAdjecttifier = adjective => string => `${adjective} ${string} `;

  const greetingifier = makeAdjecttifier("Hi, I'm ");

  console.log(greetingifier("Tsujike")); //Hi, I'm  Tsujike 

}


function myFunction19_06() {

  const array = [1, 2, 3, 4, 5];

  const double = array.map(element => element * 2);
  console.log(double); //[ 2, 4, 6, 8, 10 ]

  const doublerFunc = function (element) { return element * 2 };
  const double2 = array.map(doublerFunc);
  console.log(double2); //[ 2, 4, 6, 8, 10 ]

}


function myFunction19_07() {

  const rooms = ['H1', 'H2', 'H3'];

  rooms[2] = 'H4';

  console.log(rooms); //[ 'H1', 'H2', 'H4' ]

}


//データをイミュータブルなもの（決して変わらないもの）にする
function myFunction19_08() {

  //ミューテーションがなくても間違った内容の配列があったとき、これをその場で変更する代わりに、mapを使って新しいrooms配列を作成する

  const rooms = ['H1', 'H2', 'H3'];

  const newRooms = rooms.map(room => {
    if (room === 'H3') return 'H4';
    else return room;
  });

  console.log(rooms); //[ 'H1', 'H2', 'H3' ]
  console.log(newRooms); //[ 'H1', 'H2', 'H4' ]

}


//配列はコピーがどんどん増えていくのではないか
//永続データ構造（Persistent data structure）を使う
function myFunction19_99() {

  //Tree構造？
}



function myFunction19_09() {

  const names = ['Tom', 'Bob', 'Ivy'];
  const upperNames = [];

  for (let i = 0; i < names.length; i++) {
    upperNames.push(names[i].toUpperCase());
  }

  console.log(upperNames); //[ 'TOM', 'BOB', 'IVY' ]

}


function myFunction19_10() {

  const names = ['Tom', 'Bob', 'Ivy'];

  const upperNames = names.map(name => name.toUpperCase());

  console.log(upperNames); //[ 'TOM', 'BOB', 'IVY' ]

}


function myFunction19_11() {

  const aIndex = 'a'.charCodeAt(0); //コードユニット97

  //コードユニット97からはじまるアルファベット26文字
  let alphabet = '';
  for (let i = 0; i < 26; i++) {
    alphabet += String.fromCharCode(aIndex + i);
  }
  console.log(alphabet); //abcdefghijklmnopqrstuvwxyz

  //10桁の数値を返す処理
  let digits = '';
  for (let i = 0; i < 10; i++) {
    digits += i;
  }
  console.log(digits); //0123456789

  //ランダムな文字列を作成する処理
  let ramdom = '';
  for (let i = 0; i < 8; i++) {
    ramdom += String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
  }
  console.log(ramdom); //phzvbowg

}


function myFunction19_12() {

  const buildString = ((n, callBack) => {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += callBack(i);
    }

    return result;
  });

}



function myFunction19_13() {

  const buildString = ((n, callBack) => {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += callBack(i);
    }

    return result;
  });


  const aIndex = 'a'.charCodeAt(0); //コードユニット97

  const getAlphabet = i => String.fromCharCode(aIndex + i);
  const alphabet = buildString(26, getAlphabet);

  console.log(alphabet); //abcdefghijklmnopqrstuvwxyz

  const getDigits = (i) => i;
  const digits = buildString(10, getDigits);
  console.log(digits); //0123456789


  const getRandom = () => String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
  const random = buildString(8, getRandom);
  console.log(random); //phzvbowg

}
