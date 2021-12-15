function myFunction31_01() {

  const test = {}; //オブジェクトにはプロトタイププロパティは存在する
  console.log('__proto__' in test); //true

  console.log(Object.getPrototypeOf(test)); //{}

  const empty = Object.create(null); //プロトタイプがないオブジェクト
  console.log('__proto__' in empty); //false（これがtrueになる環境がある）

}


function myFunction31_02() {

  const objectLiteral = {};

  const getMyPrototypeOf = (obj) => {
    if (typeof Object.getPrototypeOf === 'undefined') {
      Object.getPrototypeOf = function (obj) {
        let t = typeof obj;
        if (!obj || (t !== 'object' && t !== 'function')) {
          throw new TypeError('これはオブジェクトではありません');
        }
        return obj.__proto__;
      };
    }
  }

  getMyPrototypeOf(objectLiteral);
  console.log('__proto__' in objectLiteral); //true

}


// もしかして、新IDEで、__proto__が廃止されてるわ。