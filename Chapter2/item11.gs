function myFunction11_01() {

  function makeSandwich() {
    const vegetable = 'レタス';
  }
  // console.log(vegetable); //ReferenceError: vegetable is not defined

  // const sw = makeSandwich(); //コメントアウトは使わないこととイコール
  // console.log(sw);

}


function myFunction11_02() {

  function makeSandwich() {
    const vegetable = 'レタス';
  }
  // console.log(vegetable); //ReferenceError: vegetable is not defined

  const sw = makeSandwich(); //コメントアウトは使わないこととイコール

}


function myFunction11_03() {

  function makeSalads() {
    const vegetable = 'レタス';
  }

  function makeSandwich() {
    const vegetable = 'レタス';
    return vegetable;
  }

  const sw = makeSandwich(); //戻り値vegetableを格納している
  console.log(sw); //レタス

}


function myFunction11_04() {

  function makeSandwich() {

    let vegetable = 'レタス';
    function make(topping = 'なし') {
      return vegetable + 'and' + topping;
    }

    return make;
  }

  const sw = makeSandwich(); //戻り値に関数makeを格納している
  console.log(sw); //[Function: make]

  console.log(sw()); //レタスandなし
  // console.log(sw('トマト')); //レタスandトマト

}



function myFunction11_05() {

  function makeSandwich(vegetable) {
    return function (topping) {
      return vegetable + 'and' + topping;
    };
  }

  const lettuceAnd = makeSandwich('レタス');
  console.log(lettuceAnd('トマト')); //レタスandトマト
  console.log(lettuceAnd('バジル')); //レタスandバジル

  const eggAnd = makeSandwich('エッグ');
  console.log(eggAnd('トマト')); //エッグandトマト
  console.log(eggAnd('バジル')); //エッグandバジル

}






function myFunction11_06() {

  function makeSandwich() {

    let vegetable = undefined;
    const obj = {

      set(newVegetable) {
        vegetable = newVegetable;
      },

      get() {
        return vegetable;
      },

      type() {
        return typeof vegetable
      }

    };
    return obj;
  }

  const sw = makeSandwich();
  console.log(sw.type()); //undefined

  sw.set('レタス');
  console.log(sw.get()); //レタス
  console.log(sw.type()); //string

}


function myFunction11_07() {

  //クロージャによるクラス宣言
  function VegetableA(vegetable) {
    this.getVegetable = function () {
      return vegetable;
    }
    this.makeSandwich = function (topping) {
      return vegetable + 'and' + topping;
    }
  }

  //prototypeによるクラス宣言
  function VegetableB(vegetable) {
    this.vegetable = vegetable
  }

  VegetableB.prototype.getVegetable = function () {
    return this.vegetable;
  }

  VegetableB.prototype.makeSandwich = function (topping) {
    return this.vegetable + 'and' + topping;
  }

  const a = new VegetableA('レタス');
  console.log(a.getVegetable()); //レタス
  console.log(a.makeSandwich('トマト')); //レタスandトマト

  const b = new VegetableB('レタス');
  console.log(b.getVegetable()); //レタス
  console.log(b.makeSandwich('チーズ')); //レタスandチーズ

}

function myFunction11_08() {

  class Vegetable {
    constructor(vegetable) {
      this.vegetable = vegetable;
    }

    getVegetable() {
      return this.vegetable;
    }

    makeSandwich(topping) {
      return this.vegetable + 'and' + topping;
    }
  }

  const v = new Vegetable('レタス');
  console.log(v.getVegetable()); //レタス
  console.log(v.makeSandwich('トマト')); //レタスandトマト

}




function myFunction11_09() {

  class Vegetable {
    constructor(vegetable) {
      this._vegetable = vegetable;
    }

    get vegetable() {
      return this._vegetable;
    }

    set vegetable(vegetable) {
      this._vegetable = vegetable;
    }
  }

  const v = new Vegetable('レタス');
  console.log(v.vegetable); //レタス →getterの呼び出し
  v.vegetable = 'にんじん'; //setterの呼び出し
  console.log(v.vegetable); //にんじん

}

function myFunction11_99() {

  function box() {

    let val = undefined;
    const obj = {
      set(newVal) {
        val = newVal;
      },

      get() {
        return val;
      },

      type() {
        return typeof val;
      }
    };

    return obj;

  }

  const b = box();
  console.log(b.type()); //undefined

  b.set(98.6);
  console.log(b.get()); //98.6
  console.log(b.type()); //number

}












