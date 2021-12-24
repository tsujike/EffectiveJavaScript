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

  const guard = {

    guard(x) {
      if (!this.test(x)) {
        throw new TypeError('excepted' + this);
      }
    },

    or(other) {
      const result = Object.create(guard);
      const self = this;
      result.test = function (x) {
        return self.test(x) || other.test(x);
      };
      const destriction = this + ' or ' + other;
      result.toString = function () {
        return destriction;
      };
      return result;
    }

  };

  /** Unit32クラス */
  class Uint32 {

    test(x) {
      return typeof x === 'number' && x === (x >>> 0);
    }

    toString() {
      return 'uint32';
    }

  }

  //mix-in処理
  Object.assign(Uint32.prototype, guard);

  const uint32 = new Uint32();

  /** ArrayLikeクラス */
  class ArrayLike {

    test(x) {
      return typeof x === 'object' && x && uint32.test(x.length);
    }

    toString() {
      return 'array-like Object';
    }
  }

  //mix-in処理
  Object.assign(ArrayLike.prototype, guard);

  const arrayLike = new ArrayLike();


  /** BitVectorクラス */
  class BitVector {

    constructor() {
      this.bit = [];
    }

    /** bitを格納するメソッド */
    enable(x) {
      uint32.or(arrayLike).guard(x);
      if (uint32.test(x)) {
        this.enableBit(x);
      } else if (arrayLike.test(x)) {
        for (const n of x) {
          this.enableBit(n);
        }
      }
    }

    /** ビットを格納するメソッド */
    enableBit(x) {
      this.bit.push(x);
    }

    /** ビット配列に引数があるか返すメソッド */
    bitAt(x) {
      const result = this.bitAt.includes(x);
      return result ? true : false;
    }
  }


  const bits = new BitVector();


  bits.enable([4, 3]);
  console.log(bits); // => { bit: [ 4, 3 ] }

  bits.enable(5);
  console.log(bits); // => { bit: [ 4, 3, 5 ] }


}