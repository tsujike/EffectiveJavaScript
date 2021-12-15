function myFunction13_01() {

  function wrapElements(a) {

    var result = [], i;
    for (i = 0; i < a.length; i++) {
      result[i] = function () { return a[i]; }
    }



    return result;
  }

  const wrapped = wrapElements([10, 20, 30, 40, 50]);
  const f = wrapped[0]; //配列のインデックスをマジックナンバーで指定

  console.log(f()); //undefined

}


function myFunction13_02() {

  function wrapElements(a) {

    const result = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = () => a[i];
    }

    return result;
  }

  const wrapped = wrapElements([10, 20, 30, 40, 50]);
  const f = wrapped[0]; //配列のインデックスをマジックナンバーで指定
  console.log(f(0));
  console.log(wrapped[0](0));
  console.log(f()); //10

}



function myFunction13_03() {

  var teacher = 'Kyle';

  (function anotherTeacher() {
    var teacher = 'Suzy';
    console.log(teacher); //Suzy
  })();

  console.log(teacher); //Kyle

}



(function (global) {
  var msg = 'Hello!';
  var Person = function (name, age) {
    this.name = name;
    this.age = age;
  };

  Person.prototype.greet = function () {
    Logger.log("%s I'm %s!", msg, this.name);
  };

  global.Person = Person;
})(this);


function myFunction13_04() {
  var p1 = new Person('Bob', 25);
  p1.greet(); //Hello! I'm Bob!
}


function myFunction13_05() {

  function wrapElements_(a) {
    
    var result = [], i, n; //nは宣言のみで未使用

    i = 0;
    result[i] = function () { return a[i]; };//0番目のi
    // return result;

    i++; //i=1
    result[i] = function () { return a[i]; };//1番目のi
    // return result;

    i++; //i=2
    result[i] = function () { return a[i]; };//2番目のi
    // return result;

    i++; //i=3
    result[i] = function () { return a[i]; };//3番目のi
    // return result;

    i++; //i=4
    result[i] = function () { return a[i]; };//4番目のi

    i++; //i=5。ここでループを抜ける
    return result;

  }
}