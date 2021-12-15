function myFunction11_05() {

  function makeSandwich(vegetable) {
    return function (topping) {
      return vegetable + 'and' + topping;
    };
  }

  const lettuceAnd = makeSandwich('レタス');
  console.log(lettuceAnd('トマト')); //レタスandトマト

}

function myFunction35_01() {

  /**
   * コンストラクタ 
   * @param {string} name 名前
   * @param {string} passwordHash ハッシュ
  */
  function User(name, passwordHash) {

    this.toString = function () {
      return `[User ${name}]`;
    };

    this.checkPassword = function (password) {
      return hash(password) === passwordHash;
    };

  }

  const u = new User('Tom', 'abcde');

  console.log(u); //{ toString: [Function], checkPassword: [Function] }
  console.log(u.toString()); //[User Tom]
  console.log(u.checkPassword('abcde')); //true

}

/**
 * パスワードを返す関数
 * @param {string} password
 * @return  {string} password
*/
function hash(password) {
  return password;
}


function myFunction35_02() {

  class User {

    /**
      * コンストラクタ 
      * @param {string} name 名前
      * @param {string} passwordHash ハッシュ
      */
    constructor(name, password) {
      this.name = name;
      this.password = password;
    }

    /** 文字列で名前を返すメソッド */
    toString() { return `[User ${name}]`; }

    /** パスワードをチェックするメソッド */
    checkPassword(password) { return hash(password) === passwordHash; }

  }

}


function myFunction35_03() {

  class ES6Person {
    constructor(name) {
      this.name = name;
    }
  }

  let RhinoPerson = function (name) {
    this.name = name;
  }

  function myFunction() {

    const ep = new ES6Person('takahashi')
    console.log(`私は${ep.name}です`); //私はtakahashiです


    //RhinoPerson関数はいともかんたんに書き換えられる
    RhinoPerson = function (name) {
      this.name = name + '様';
    }

    const rp = new RhinoPerson('takahashi')
    console.log(`私は${rp.name}です`); //	私はtakahashi様です

  }

  myFunction();

}
