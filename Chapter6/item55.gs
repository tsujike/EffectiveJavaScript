function myFunction55_99() {

  const callFunc_ = (age, favorite, name) => {
    return `${name}は${age}歳で${favorite}好き。`;
  };

  const name = "kenzo", age = 39, favorite = "coffee";
  console.log(callFunc_(name, age, favorite)); // => coffeeはkenzo歳で39好き。


  //分割代入で名前付き引数 キーワード引数
  const callFunc2_ = ({ age2, favorite2, name2 }) => {
    return `${name2}は${age2}歳で${favorite2}好き。`;
  };

  const person = { name2: "kenzo", age2: 39, favorite2: "coffee" };
  console.log(callFunc2_(person)); // => kenzoは39歳でcoffee好き。

}




function myFunction55_01() {

  const data = {
    'name': 'Bob Smith',
    'age': 35,
    'pets': ['fido', 'fluffy']
  };

  const options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(data)
  };

  //引数optionsのことをOptions Objectと呼ぶ
  UrlFetchApp.fetch('https://httpbin.org/post', options);

}


function myFunction55_02() {

  // const alert = new Alert(100,75,300,200,'Error','message','blue','white','black','error',true);

  const alert = new Alert({
    x: 100, y: 75,
    width: 300, height: 200,
    title: 'Error', message: 'message',
    titleColor: 'blue', bgColor: 'white', textColor: 'black',
    icon: 'error', modal: true
  });

}


function myFunction55_02_02() {

  const alert = new Alert(app, message, {
    width: 150, height: 100,
    title: 'Error',
    titleColor: 'blue', bgColor: 'white', textColor: 'black',
    icon: 'error', modal: true
  });

}


function myFunction55_03() {

  /** クラスAlert */
  class Alert {

    /** コンストラクタ
      * @constructor
      */
    constructor(parent, message, opts = {}) {
      this.width = opts.width === undefined ? 320 : opts.width;
      this.height = opts.height === undefined ? 240 : opts.height;
      this.x = opts.x === undefined ? (parent.width / 2) - (this.width / 2) : opts.x;
      this.y = opts.y === undefined ? (parent.height / 2) - (this.height / 2) : opts.y;
      this.title = opts.title || 'Alert';
      this.titleColor = opts.titleColor || 'gray';
      this.bgColor = opts.bgColor || 'white';
      this.textColor = opts.textColor || 'black';
      this.icon = opts.icon || 'info';
      this.modal = !!opts.modal;
      this.message = message;
    }

  }

  const parent = { width: 200, height: 500 };
  const message = 'test';
  const opts = {
    x: 100, y: 75,
    width: 150, height: 100,
    title: 'Error',
    titleColor: 'blue', bgColor: 'white', textColor: 'black',
    icon: 'error', modal: true
  };

  const a1 = new Alert(parent, message, opts);
  console.log(a1);
  /*　=>
  { width: 150,
    height: 100,
    x: 100,
    y: 75,
    title: 'Error',
    titleColor: 'blue',
    bgColor: 'white',
    textColor: 'black',
    icon: 'error',
    modal: true,
    message: 'test' }
  */
}



function myFunction55_04() {

  const extend = (target, source) => {

    if (source) {
      for (const [key, val] of Object.entries(source)) {
        if (typeof val !== undefined) target[key] = val;
      }
    }
    return target;

  };

  const target = { x: 100, y: '', width: 150, height: 100 };
  const source = { x: 50 };
  console.log(extend(target, source)); // => { x: 50, y: '', width: 150, height: 100 }

}



function myFunction55_05() {

  /** クラスAlert */
  class Alert {

    /** コンストラクタ
      * @constructor
      */
    constructor(parent, message, opts = {}) {

      opts = this.extend({ width: 320, height: 240 }, opts);

      opts = this.extend({
        x: (parent.width / 2) - (this.width / 2),
        y: (parent.height / 2) - (this.height / 2),
        title: 'Alert',
        titleColor: 'gray',
        bgColor: 'white',
        textColor: 'black',
        icon: 'info',
        modal: false
      }, opts)

      this.extend(this, opts);
    }

    /** 仮引数の値をチェックするメソッド */
    extend(target, source) {
      if (source) {
        for (const [key, val] of Object.entries(source)) {
          if (typeof val !== undefined) target[key] = val;
        }
      }
      return target;
    }

  }


  const parent = { width: 200, height: 500 };
  const message = 'test';
  const opts = {
    x: 100, y: 75,
    width: 150, height: 100,
    title: 'Error',
    titleColor: 'blue', bgColor: 'white', textColor: 'black',
    icon: 'error', modal: true
  };

  const a2 = new Alert(parent, message, opts);

  console.log(a2);

  /* =>
    { x: 100,
    y: 75,
    title: 'Error',
    titleColor: 'blue',
    bgColor: 'white',
    textColor: 'black',
    icon: 'error',
    modal: true,
    width: 150,
    height: 100 }
  */

}



//このコードは動きません
function myFunction55_99() {

  const user1 = {
    name: '太郎',
    area: 'tokyo'
  }

  const user2 = {
    name: '花子',
    age: 28
  }

  //jQueryライブラリのextend()メソッド
  const result = $.extend(user1, user2);
  console.log(result);　// => { name: "花子", area: "tokyo", age: 28 }

}
