function myFunction26_01() {

  const add = (x, y) => x + y;
  console.log(add(1, 2)); //3

  //カリー化(旧書式)
  function func(x) {
    return function (y) {
      return x + y;
    }
  }
  console.log(func(1)(2)); //3

  //カリー化(ES6)
  const curry = x => y => x + y;
  console.log(curry(1)(2)); //3

}

//部分適用
//カリー化をすると、値を持った関数を戻り値に取れる

function myFunction26_02() {

  //カリーの辛さとご飯重量(g)を決める関数
  const curry = x => y => `辛さ${x}番：ご飯${y}g`;
  console.log(curry(3)(200)); //辛さ3番：ご飯200g

  const spycy1 = curry(1);
  const spycy2 = curry(2);
  const spycy3 = curry(3);

  //辛さ1番で大盛り
  console.log(spycy1(300)); //辛さ1番：ご飯300g

  //辛さ1番で普通
  console.log(spycy1(200)); //辛さ1番：ご飯200g

  //辛さ3番で小盛り
  console.log(spycy3(120)); //辛さ3番：ご飯120g

}



//これって、クロージャの時に考察したよな。。。。

function myFunction2_11_05() {

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



function myFunction26_03() {

  const makeSandwich = vegetable => topping => vegetable + 'and' + topping;

  const lettuceAnd = makeSandwich('レタス');
  console.log(lettuceAnd('トマト')); //レタスandトマト
  console.log(lettuceAnd('バジル')); //レタスandバジル

  const eggAnd = makeSandwich('エッグ');
  console.log(eggAnd('トマト')); //エッグandトマト
  console.log(eggAnd('バジル')); //エッグandバジル

}



//ちょっと本題からそれたけど
//もともとはこう書くしかなかった。
function myFunction26_04() {

  //部分適用
  function greeting(x, y) {
    if (typeof y === 'undefined') {
      return function (y) {
        return x + y;
      };
    }
  }

  let test = greeting('こんにちは');
  const taro = test('太郎');
  console.log(taro);

  //bindでスッキリ書ける
  function mul(a, b) {
    return a * b;
  }
  let double = mul.bind(null, 2);
  console.log(double(3));
  console.log(double(2));

}


{
  //これを、thisから眺めてみようというお話
  //なぜbindを使うと、thisというレシーバをメソッド（関数）に結合することができるのか。

  //bindの使い方はこう。
  //メソッド.bind(第1引数に、thisの結合先のオブジェクト、第2引数に、bind先に渡す引数。)

}





function myFunction26_05() {

  const paths = ['index.html', 'info.html', 'profile.html'];

  const makeSimpleURL_ = (protocol, domain, path) => {
    return `${protocol}://${domain}/${path}`;
  }

  //これでも書ける
  const urls = paths.map(path => makeSimpleURL_('http', 'tonari-it', path));
  console.log(urls); //[ 'http://tonari-it/index.html',  'http://tonari-it/info.html',  'http://tonari-it/profile.html' ]

  //でもね。これでも書けるよ。
  const urls2 = paths.map(makeSimpleURL_.bind(null, 'http', 'tonari-it'));
  console.log(urls2); //[ 'http://tonari-it/index.html',  'http://tonari-it/info.html',  'http://tonari-it/profile.html' ]
}

{
  //引数の部分集合を結合するテクニック。カリー化（必要な引数の固定部をもとに、委任される関数を作る）
  //部分適用の話
  //２つあって混同してる人が多いって書いてるけど、考察的にはどっちでもいいんじゃなね。

  //たぶん、引数の部分集合を結合するテクニックのことを言うんだけど、部分適用で実用されることが多いって感じじゃないかな。

  //複数引数を取るなというのも面白かったな
} 