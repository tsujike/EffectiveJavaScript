function myFunction34_01() {

  /**
   * コンストラクタ 
   * @param {string} name 名前
   * @param {string} passwordHash ハッシュ
  */
  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }


  /** パスワードをチェックするメソッド */
  User.prototype.checkPassword = function (password) {
    return hash(password) === this.passwordHash;
  }

  const u = new User('Tom', 'abcde');
  console.log(u); //{ name: 'Tom', passwordHash: 'abcde' }
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


function myFunction34_02() {

  /**
   * コンストラクタ 
   * @param {string} name 名前
   * @param {string} passwordHash ハッシュ
  */
  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
    this.checkPassword = function (password) {
      return hash(password) === this.passwordHash;
    };

  }

  const u1 = new User('Tom', 'abcde');
  const u2 = new User('Bob', 'fghij');
  const u3 = new User('Ivy', 'klmno');

  console.log(u1); //{ name: 'Tom', passwordHash: 'abcde', checkPassword: [Function] }
  console.log(u2); //{ name: 'Bob', passwordHash: 'fghij', checkPassword: [Function] }
  console.log(u3); //{ name: 'Ivy', passwordHash: 'klmno', checkPassword: [Function] }

}

/**
 * パスワードを返す関数
 * @param {string} password
 * @return  {string} password
*/
function hash(password) {
  return password;
}