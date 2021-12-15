function myFunction18_01() {

  function hello(userName) {
    return `hello, ${userName}`;

  }

  console.log(hello('Tom'));

}


//JavaScriptのメソッドは、関数であるオブジェクトのプロパティに過ぎない
function myFunction18_02() {

  const obj = {

    userName: 'Bob',

    hello: function () {
      return `hello, ${this.userName}`;
    },

    greeting() {
      return `How are you, ${this.userName}`;
    }
  }

  console.log(obj);
  // { userName: 'Bob',
  //  hello: [Function: hello],
  //  greeting: [Function: greeting] }

}



function myFunction18_03() {

  const obj = {

    hello() {
      return `hello, ${this.userName}`;
    },
    userName: 'Bob'

  };


  const obj2 = {
    hello: obj.hello,
    userName: 'Tom'
  }

  console.log(obj2.hello()); //	hello, Tom

}



function myFunction18_04() {

  const obj = {

    hello() {
      return `hello, ${this.userName}`;
    },
    userName: 'Bob'

  };


  const obj2 = {
    hello: obj.hello,
    // userName: 'Tom'
  }

  console.log(obj2.hello()); //	hello, undefined

}






function myFunction18_05() {

  function hello() {
    return `hello, ${this.userName}`;
  }


  const obj1 = {
    hello: hello,
    userName: 'Bob'
  }

  const obj2 = {
    hello: hello,
    userName: 'Tom'
  }

  console.log(obj1.hello()); //	hello, Bob
  console.log(obj2.hello()); //	hello, Tom

  console.log(hello()); //hello, undefined

}





function myFunction18_06() {

  //宣言をしないことで、グローバルオブジェクトのプロパティに格納しています
  userName = 'John';

  function hello() {
    return `hello, ${this.userName}`;
  }

  console.log(hello()); //hello, John

}


function myFunction18_07() {

  'use strict'

  //宣言をしないことで、グローバルオブジェクトのプロパティに格納しています
  userName = 'John';

  function hello() {
    return `hello, ${this.userName}`;
  }

  console.log(hello()); //ReferenceError: userName is not defined

}




function myFunction18_08() {

  function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }

  const name = 'Ivy';
  const passwordHash = '0e0101';

  const u = new User(name, passwordHash);
  console.log(u); //{ name: 'Ivy', passwordHash: '0e0101' }

}
