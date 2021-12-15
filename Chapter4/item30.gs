//まずはクラス構文以前のクラスについて

function myFunction30_01() {

  /**
   * コンストラクタ 
   * @param {string} name 名前
   * @param {string} passwordHash ハッシュ
  */
  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }

  //**自作メソッド（上書き） */
  User.prototype.toString = function () {
    return `[User ${this.name}]`;
  }


  //**パスワードをチェックするメソッド */
  User.prototype.checkPassword = function (password) {
    return hash(password) === this.passwordHash;
  }

  const u = new User('Tom', 'abcde');
  console.log(u);
  console.log(u.toString());
  console.log(u.checkPassword('abcde')); //ReferenceError: hash is not defined

}



function myFunction30_02() {

  /**
   * コンストラクタ 
   * @param {string} name 名前
   * @param {string} passwordHash ハッシュ
  */
  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }

  //**自作メソッド（上書き） */
  User.prototype.toString = function () {
    return `[User ${this.name}]`;
  }

  //**パスワードをチェックするメソッド */
  User.prototype.checkPassword = function (password) {
    return hash(password) === this.passwordHash;
  }

  const u = new User('Tom', 'abcde');

  //オブジェクトのプロトタイプオブジェクトを取り出すためのメソッド
  //インスタンスが参照してるプロトタイプチェーンと、クラスのデフォルトのプロトタイププロパティを比べる
  console.log(Object.getPrototypeOf(u) === User.prototype); //true

}


function myFunction30_03() {

  /**
   * コンストラクタ 
   * @param {string} name 名前
   * @param {string} passwordHash ハッシュ
  */
  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }

  //**自作メソッド（上書き） */
  User.prototype.toString = function () {
    return `[User ${this.name}]`;
  }

  //**パスワードをチェックするメソッド */
  User.prototype.checkPassword = function (password) {
    return hash(password) === this.passwordHash;
  }

  const u = new User('Tom', 'abcde');
  //プロパティのルックアップは、まずは、own propertyから探し始めることが特徴らしいよ。

  //非標準。オブジェクトのプロトタイプを取り出すための機構。(プロパティ) 
  console.log(u.__proto__ === User.prototype); //true

}

//クラスの新しい定義きたぞ
//クラスとはコンストラクト関数を持つもの。メソッドを共有するためのプロトタイプオブジェクト（User.prototype）を組み合わせたもの。これをプロパティと呼ばずにオブジェクトと呼ぶのは混乱必須。


