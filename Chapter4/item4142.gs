function myFunction42_01() {

  //モンキーパッチ1
  Array.prototype.split = function (i) {
    return [this.slice(0, i), this.slice(i)];
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(arr.split(5)); //	[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]
  console.log(arr.split(2)); //	[ [ 1, 2 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ] ]

  //モンキーパッチ2
  Array.prototype.split = function () {
    const i = Math.floor(this.lenght / 2);
    return [this.slice(0, i), this.slice(i)];

  }

  //意図した結果を返さない
  console.log(arr.split(5)); //	[ [], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ]
  console.log(arr.split(2)); //	[ [], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ]

}

function myFunction42_02() {

  //Arrayオブジェクトを生成する
  const arr = [];

  //全てのオブジェクトのprototypeチェーンの到着点はnull
  console.log(arr.__proto__.__proto__.__proto__); //null

  //生成されたオブジェクトの、継承元＝Arrayオブジェクトの、prototype.toStringにアクセスしてみる
  console.log(arr.__proto__.toString); //	[Function: toString]
  console.log(arr.__proto__.toString()); //

  //それを、書き換える。
  arr.__proto__.toString = function () { return 'モンキーパッチです' };

  //継承元のprototypeを書き換える、モンキーパッチ（悪手）
  console.log(arr.toString); //[Function]
  console.log(arr.toString()); //'モンキーパッチです'

  //生成時に、継承元から複製してるか参照かは、引き続き不明ではあるが
  const arr2 = [];
  console.log(arr2.toString()); //'モンキーパッチです'

  //プロトタイプチェーンを辿ってモンキーパッチではなく、Arrayオブジェクトにダイレクトにモンキーパッチしてみると、
  Array.prototype.toString = function () { return '大元をモンキーパッチします' };

  //影響を及ぼすとうことは、複製ではなく、参照であろう
  console.log(arr.toString()); //大元をモンキーパッチします
  console.log(arr2.toString()); //大元をモンキーパッチします
  console.log([].toString()); //大元をモンキーパッチします

}