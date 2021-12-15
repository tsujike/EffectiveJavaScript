function myFunction59_01() {

  const square = x => x * x;
  console.log(square('3')); //9

}


function myFunction59_02() {


  /** クラスBitVector */
  class BitVector {

    constructor() {
      this.bit = [];
    }

    /** bitを格納するメソッド */
    enable(x) {

      if (typeof x === 'number') { //常に真
        this.enableBit(x);
      } else {
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
  bits.enable('3'); //数値型？配列？配列のようなもの？

  console.log(bits.bitAt(3)); // => 0
  console.log(bits.bit); // => ['3']

}




function myFunction59_03() {


  /** クラスBitVector */
  class BitVector {

    constructor() {
      this.bit = [];
    }

    /** bitを格納するメソッド */
    enable(x) {

      if (typeof x === 'number') {
        this.enableBit(x);
      } else if (typeof x === 'object' && x) {
        for (let i = 0; i < x.length; i++) {
          this.enableBit(x[i]);
        }
      } else {
        throw new TypeError('expected number or array-like');
        //数値または配列のようなオブジェクトを期待している
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
  bits.enable('3'); //TypeError: expected number or array-like

}





function myFunction59_04() {


  class GuardObjectUtility {

    constructor() {

    }

    //引数の型が数値型かどうか判定するメソッド
    guard(x) {
      if (!this.test(x)) {
        throw new TypeError('expected' + this);
      }
    }

    //引数の型をテストするメソッド
    test(x) {
      return typeof x === 'number' && x === (x >>> 0);
    }

    toString() {
      return 'unit32';
    }

    or(other){
      const self = this;
      
    }

  }

  /** クラスBitVector */
  class BitVector {

    constructor() {
      const unit32 = new GuardObjectUtility();
      unit32.or(arrayLike).guard(x);
      this.bit = [];
    }

    /** bitを格納するメソッド */
    enable(x) {

      if (typeof x === 'number') {
        this.enableBit(x);
      } else if (typeof x === 'object' && x) {
        for (let i = 0; i < x.length; i++) {
          this.enableBit(x[i]);
        }
      } else {
        throw new TypeError('expected number or array-like');
        //数値または配列のようなオブジェクトを期待している
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
  bits.enable('3'); //TypeError: expected number or array-like



}