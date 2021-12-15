
function myFunction33_01() {

  /**
    * コンストラクタ 
    * @param {string} name 名前
    * @param {string} passwordHash ハッシュ
   */
  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }

  const u = new User('tsujike', 'hogehoge');
  console.log(u); //{ name: 'tsujike', passwordHash: 'hogehoge' }
  console.log(u.name); //tsujike

}

function myFunction33_02() {

  /**
    * コンストラクタ 
    * @param {string} name 名前
    * @param {string} passwordHash ハッシュ
   */
  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }

  const u = User('tsujike', 'hogehoge');
  console.log(u); //undefined
  console.log(this.name); //tsujike

}

function myFunction33_03() {

  'use strict'

  /**
    * コンストラクタ 
    * @param {string} name 名前
    * @param {string} passwordHash ハッシュ
   */
  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }

  const u = User('tsujike', 'hogehoge');
  //TypeError: Cannot set property 'name' of undefined

}


function myFunction33_04() {

  /**
    * コンストラクタ 
    * @param {string} name 名前
    * @param {string} passwordHash ハッシュ
   */
  function User(name, passwordHash) {

    if (!(this instanceof User)) {
      return new User(name, passwordHash);
    }

    this.name = name;
    this.passwordHash = passwordHash;

  }

  const u = User('tsujike', 'hogehoge');
  console.log(u); //undefined
  console.log(this.name); //undefined
  console.log(u.name); //tsujike

}



function myFunction33_05() {

  /**
    * コンストラクタ 
    * @param {string} name 名前
    * @param {string} passwordHash ハッシュ
   */
  function User(name, passwordHash) {

    if (!(this instanceof User)) {
      return new User(name, passwordHash);
    }

    this.name = name;
    this.passwordHash = passwordHash;

  }

  const funcU = User('tsujike', 'hogehoge');
  const constructorU = new User('tsujike', 'hogehoge');

  console.log(funcU instanceof User); //true
  console.log(constructorU instanceof User); //true

}


function myFunction33_06() {

  /**
    * コンストラクタ 
    * @param {string} name 名前
    * @param {string} passwordHash ハッシュ
   */
  function User(name, passwordHash) {

    const self = this instanceof User
      ? this
      : Object.create(User.prototype);

    self.name = name;
    self.passwordHash = passwordHash;
    return self;
  }

  const funcU = User('tsujike', 'hogehoge');
  const constructorU = new User('tsujike', 'hogehoge');

  console.log(funcU); //{ name: 'tsujike', passwordHash: 'hogehoge' }
  console.log(constructorU); //{ name: 'tsujike', passwordHash: 'hogehoge' }

}