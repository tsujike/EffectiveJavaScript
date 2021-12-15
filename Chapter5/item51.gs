function myFunction51_00() {

  /** 大きい方の整数を返す（整数版） */
  function getMaxInt(x, y) {
    if (!Number.isInteger(x)) return;
    if (!Number.isInteger(y)) return;
    return x > y ? x : y;
  }

  console.log(getMaxInt(5, 7)); // => 7
  console.log(getMaxInt(5.1, 7)); // => undefined
  console.log(getMaxInt(5, 7.2)); // => undefined



  /** 大きい方の整数を返す（小数版） */
  function getMaxFloat(x, y) {
    if (Number.isInteger(x)) return;
    if (Number.isInteger(y)) return;
    return x > y ? x : y;
  }

  console.log(getMaxFloat(5.1, 7.2)); // => 7.2
  console.log(getMaxFloat(5.1, 7)); // => undefined
  console.log(getMaxFloat(5, 7.2)); // => undefined


  /** 大きい方の整数を返す（ジェネリックメソッド） */
  function getMaxNumber(x, y) {
    return x > y ? x : y;
  }

  console.log(getMaxNumber(5, 7)); // => 7
  console.log(getMaxNumber(5.1, 7.2)); // => 7.2
  console.log(getMaxNumber(5.1, 7)); // => 7
  console.log(getMaxNumber(5, 7.2)); // => 7.2
}



function myFunction51_01_02() {

  const printArray_ = (...args) => args.forEach(a => console.log(a));

  const scores = [98, 74, 85, 77, 93, 100, 89];
  printArray_(scores);// => [ 98, 74, 85, 77, 93, 100, 89 ]

  const names = ['Bob', 'Tom', 'Ivy'];
  printArray_(names);// => [ 'Bob', 'Tom', 'Ivy' ]

}



function myFunction51_01() {

  function printArray_() {
    [].forEach.call(arguments, (a) => console.log(a));
  }

  const scores = [98, 74, 85, 77, 93, 100, 89];
  printArray_(scores);// => [ 98, 74, 85, 77, 93, 100, 89 ]

  const names = ['Bob', 'Tom', 'Ivy'];
  printArray_(names);// => [ 'Bob', 'Tom', 'Ivy' ]

}




function myFunction51_01_02() {

  const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

  // indexOf
  let result = Array.prototype.indexOf.call(arrayLike, 'c');
  console.log(result); // => 2

  // join
  result = Array.prototype.join.call(arrayLike, ':');
  console.log(result); // => a:b:c

  // map
  result = Array.prototype.map.call(arrayLike, (value, index) => index + ":" + value);
  console.log(result); // => [ '0:a', '1:b', '2:c' ]

  // some
  result = Array.prototype.some.call(arrayLike, (value) => value === 'a');
  console.log(result); // => true

}


function myFunction51_02() {

  const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
  const result = Array.prototype.map.call(arrayLike, (s) => s.toUpperCase());

  console.log(result); // => [ 'A', 'B', 'C' ]
}



function myFunction51_03() {

  const str = 'abc';
  const result = Array.prototype.map.call(str, (s) => s.toUpperCase());

  console.log(result); // => [ 'A', 'B', 'C' ]
}


function myFunction51_04() {

  const array = [1, 2, 3];
  array.length = 1;

  console.log(array);  // => [ 1 ]

}


function myFunction51_05() {

  const array = [];
  array.length = 3;

  array.push(4);

  console.log(array.length);  // => 4

}





function myFunction51_06() {

  const namesColumnBefore_ = function () {
    return ['names'].concat(arguments);
  }

  const names = ['Bob', 'Tom', 'Ivy'];
  console.log(namesColumnBefore_(names)); // => ['names',{ '0': [ 'Bob', 'Tom', 'Ivy' ]}]

  console.log(namesColumnBefore_('Bob', 'Tom', 'Ivy')); // =>  ['names',{ '0': 'Bob', '1': 'Tom', '2': 'Ivy'}]

}






function myFunction51_07() {

  const namesColumnAfter_ = function () {
    return ['names'].concat([].slice.call(arguments));
  }

  const names = ['Bob', 'Tom', 'Ivy'];
  console.log(namesColumnAfter_(names)); // [ 'names', [ 'Bob', 'Tom', 'Ivy' ] ]

  console.log(namesColumnAfter_('Bob', 'Tom', 'Ivy')); // [ 'names', 'Bob', 'Tom', 'Ivy' ]
}

