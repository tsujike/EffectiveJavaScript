function myFunction58_01() {

  /** クラスBitVector */
  class BitVector {

    constructor() {
      this.bit = [];
    }

    /** bitを判定するメソッド */
    enable(x) {
      if (typeof x === 'number') this.enableBit(x);
    }

    /** bitを判定するメソッド */
    enable(x) {
      for (let i = 0; i < x.length; i++) {
        this.enableBit(x[i]);
      }
    }

    /** bitをプロパティに格納するメソッド */
    enableBit(x) {
      this.bit.push(x);
    }

    /** ビット配列に引数があるか返すメソッド */
    bitAt(x) {
      return this.bit.includes(x) ? 1 : 0;
    }
  }

  const bits = new BitVector();

  bits.enable(4);
  bits.enable([1, 3, 8, 17]);

  console.log(bits.bitAt(4)); // => 0
  console.log(bits.bitAt(8)); // => 1
  console.log(bits.bitAt(9)); // => 0

}






function myFunction58_02() {

  /** クラスBitVector */
  class BitVector {

    constructor() {
      this.bit = [];
    }

    /** bitを格納するメソッド */
    enable(x) {

      if (typeof x === 'number') {
        this.enableBit(x);
      } else { //xが配列のようなものと仮定する
        for (let i = 0; i < x.length; i++) {
          this.enableBit(x[i]);
        }
      }

    }

    /** ビットを格納するメソッド */
    enableBit(x) {
      this.bit.push(x);
    }

    /** ビット配列に引数があるか返すメソッド */
    bitAt(x) {
      return this.bit.includes(x) ? 1 : 0;
    }


  }

  const bits = new BitVector();

  bits.enable(4);
  bits.enable([1, 3, 8, 17]);

  console.log(bits.bitAt(4)); // => 1
  console.log(bits.bitAt(8)); // => 1
  console.log(bits.bitAt(9)); // => 0

}





function myFunction58_03() {

  /** クラスStringSet */
  class StringSet {

    constructor() {
      this.string = '';
    }

    /** 引数を判定するメソッド */
    add(x) {
      if (typeof x === 'string') {
        this.addString(x);
      } else if (Array.isArray(x)) { //本当の配列かテスト
        x.forEach(s => this.addString(s), this);
      } else {
        for (const key in x) this.addString(key);
      }
    }

    /** プロパティに文字列があるか判定するメソッド */
    contains(word) {
      return this.string.includes(word);
    }

    /** プロパティにstringを追加するメソッド */
    addString(x) {
      this.string += x;
    }

  }

  const set = new StringSet();

  //複数の引数を受け取ることができる=メソッドが多重定義されている
  set.add('Hamlet');
  set.add(['Rosencrants', 'Guildenstern']);
  set.add({ 'Ophelia': 1, 'Polonius': 1, 'Horatio': 1 });

  console.log(set.contains('Polonius')); // => true 
  console.log(set.contains('Guildenstern')); // => true 
  console.log(set.contains('Falstaff')); // => false 

}









function myFunction58_04() {

  const string = 'Tom';
  console.log(typeof string === 'string'); //true

  const bool = false;
  console.log(typeof bool === 'boolean'); //true

  const number = 10;
  console.log(Number.isInteger(number)); //true

  const array = [];
  console.log(Array.isArray(array)); //true

  const date = new Date();
  console.log(date instanceof Date); //true

  //Objectの判定はinstanceof演算子では行わない
  const object = [];
  console.log(object instanceof Object); //true

}


function myFunction58_05() {

  console.log(Object.prototype.toString.call({})); // => [object Object]
  console.log(Object.prototype.toString.call(new Date())); // => [object Date]
  console.log(Object.prototype.toString.call('a')); // => [object String]
  console.log(Object.prototype.toString.call(/.*/)); // => [object RegExp]
  console.log(Object.prototype.toString.call([])); // => [object Array]
  console.log(Object.prototype.toString.call(function () { })); // => [object Function]
  console.log(Object.prototype.toString.call(JSON)); // =>  [object JSON] 
  console.log(Object.prototype.toString.call(SpreadsheetApp)); // => [object Object]

  class Test { }
  console.log(Object.prototype.toString.call(new Test())); // => [object Object]

}


function myFunction58_06() {

  /**
   * Personクラス
   */
  class Person {
    constructor() {
      this.name = 'Tom';
      this.age = 30;
    }

    /**
      * 年齢を倍にして返すメソッド
      * @return {number} 倍の年齢
      */
    getDoubleTomsAge() { return this.age * 2; }

  }

  const p = new Person();
  console.log(p, p.getDoubleTomsAge()); //	{ name: 'Tom', age: 30 } , 60

}




function myFunction58_07() {

  /**
   * Personクラス
   */
  class Person {
    constructor() {
      this.name = 'Tom';
      this.age = 30;
    }

    /**
      * 年齢を倍にして返すメソッド
      * @return {number} 倍の年齢
      */
    getDoubleTomsAge() { return this.age * 2; }

  }

  const p = new Person();

  //in演算子による型判定
  console.log('getDoubleTomsAge' in p); //true

}







function myFunction58_99() {

  /** クラスBitVector */
  class BitVector {

    constructor() {
      this.bit = [];
    }

    /** bitを格納するメソッド */
    enable(x) {

      if (typeof x === 'number') {
        this.enableBit(x);
      } else { //xが配列のようなものと仮定する
        for (let i = 0; i < x.length; i++) {
          this.enableBit(x[i]);
        }
      }

    }

    /** ビットを格納するメソッド */
    enableBit(x) {
      this.bit.push(x);
    }

    /** ビット配列に引数があるか返すメソッド */
    bitAt(x) {
      return this.bit.includes(x) ? 1 : 0;
    }


  }

  const bits = new BitVector();

  bits.enable(4);
  bits.enable([1, 3, 8, 17]);

  console.log(bits.bitAt(4)); // => 1
  console.log(bits.bitAt(8)); // => 1
  console.log(bits.bitAt(9)); // => 0

}