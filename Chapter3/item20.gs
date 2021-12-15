function myFunction20_01() {

  "use strict";
  const person = {
    fullName: "Bob",
    sayName: function () {
      return this.fullName;
    }
  };

  console.log(person.sayName()); //Bob

  // person.sayNameをsay変数に代入する
  const say = person.sayName;
  console.log(say); //[Function: sayName]

  say(); //TypeError: Cannot read property fullName of undefined

}



function myFunction20_02() {

  "use strict";
  const say = message => {
    return `${message} ${this.fullName}！`;
  }

  const person = {
    fullName: "Bob"
  };


  //say関数をそのまま呼び出すとthisはundefinedとなる
  say("こんにちは"); //TypeError: Cannot read property fullName of undefined

  //Callメソッドは第1引数でthisを指定する
  console.log(say.call(person, "こんにちは")); //こんにちは Bob

}


function myFunction20_03() {

  "use strict";
  const person = {
    fullName: "Bob",

    say(message) {
      return `${message} ${this.fullName}！`;
    }

  };

  console.log(person.say("こんにちは")); //こんにちは Bob！

}



function myFunction20_04() {

  const dict = {};
  dict.foo = 1;
  delete dict.hasOwnProperty;

  const hasOwn = {}.hasOwnProperty; //Object.prototype.hasOwnPropertyの糖衣構文

  console.log(hasOwn.call(dict, 'foo')); //true
  console.log(hasOwn.call(dict, 'hasOwnProperty')); //false

}




function myFunction20_05() {

  const person = {
    name: "Tom",
    age: 34,
    favorite: 'coffee'
  };

  const properties = ["name", "favorite"];

  const mapped = properties.map(function (value) {
    return this[value];
  }, person);

  console.log(mapped); //[ 'Tom', 'coffee' ]
}


function myFunction20_06() {

  const person = {
    name: "Tom",
    age: 34,
    favorite: 'coffee'
  };

  const properties = ["name", "favorite"];

  const mappedArrow = properties.map(value => {
    return this[value];
  }, person);

  console.log(mappedArrow); //[ undefined, undefined ]

}



function myFunction20_99() {

  const table = {

    entries: [],

    addEntry(key, value) {
      this.entries.push({ key: key, value: value });

    },

    forEach(f, thisArg) {
      let entries = this.entries;
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        f.call(thisArg, entry.key, entry.value, i);
      }
    }

  };

  console.log(table);
  console.log(table.entries);

  table.addEntry('name', 'Tom');
  table.addEntry('name', 'John');

  console.log(table.entries);

  const table1 = {...table};
  console.log(table.forEach(table1.addEntry, table1));
}









// function myFunction20_99() {

//   const obj = {};
//   const f = () => { };

//   obj.temporary = f;
//   let arg1, arg2, arg3;

//   const result = obj.temporary(arg1, arg2, arg3);
//   console.log(obj); //{ temporary: [Function: f] }

//   delete obj.temporary;
//   console.log(obj); //{}

// }
