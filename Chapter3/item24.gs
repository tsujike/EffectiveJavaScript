function myFunction24_01() {

  /**
   * 引数を順番に返す関数
  */
  const values = function () {
    let i = 0, n = arguments.length;

    const obj = {

      hasNext: function () {
        return i < n;
      },

      next: function () {
        if (i >= n) {
          throw new Error('イテレーションの終わりです');
        }
        return arguments[i++];
      }

    };

    return obj;

  }

  const it = values(1, 4, 1);
  console.log(it.next()); //undefined
  console.log(it.next()); //undefined

}


function myFunction24_02() {

  /**
   * 引数を順番に返す関数
  */
  const values = function () {
    let i = 0, n = arguments.length, a = arguments;

    const obj = {

      hasNext: function () {
        return i < n;
      },

      next: function () {
        if (i >= n) {
          throw new Error('イテレーションの終わりです');
        }
        return a[i++];
      }

    };

    return obj;

  }

  const it = values(1, 4, 1);
  console.log(it.next()); //1
  console.log(it.next()); //4
  console.log(it.next()); //1
  console.log(it.next()); //Error: イテレーションの終わりです

}




function myFunction24_03() {

  const number = 100;
  const array = [1, 2, 3];
  const string = 'Tom';
}



function myFunction24_04() {

  const name = 'Tom';
  const array = [1, 2, 3];
  const number = 100;

  const iterableName = 'Tom'[Symbol.iterator]();

  for (const letter of iterableName) {
    console.log(letter);
  }

}





function myFunction24_05() {

  const name = 'Tom';

  for (const letter of name) {
    console.log(letter); //T, o, m
  }

}



function myFunction24_06() {

  const folder = DriveApp.getFolderById('1FuOPUwHKzEC1JC1edndiUHV7hLe9affx');
  const files = folder.getFiles();

  Logger.log(files); //FileIterator
  console.log(files.length); //undefined

  //TypeError: files is not iterable
  // for (const file of files) {
  //   console.log(file.getName());
  // }

  //実装できない
  // const iterableFiles = files[Symbol.iterator](); //TypeError: files[Symbol.iterator] is not a function

  //この処理をクラス化するしかないのかな？
  while (files.hasNext()) {
    const file = files.next();
    console.log(file.getName());
  }

}


