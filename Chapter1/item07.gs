function myFunction1_7_01() {

  //10進数から2進数や16進数への変換
  console.log((104).toString(2)); //1101000
  console.log((104).toString(16)); //68

  //バイナリリテラルとヘキサリテラル
  console.log(0b1101000); //104
  console.log(0x0068); //104

}

function myFunction1_7_02() {

  //16進数で指定
  console.log(String.fromCodePoint(0x0068, 0x0065, 0x006c, 0x006c, 0x006f, 0x0021)); //hello!

  //10進数で指定
  console.log(String.fromCodePoint(104, 101, 108, 108, 111, 33)); //hello!

  //引数のインデックス位置にある文字の、コードポイントを10進数で返す
  console.log('hello'.codePointAt(0)); //104

}


{
  //16ビット
  // console.log(2 ** 1); //2
  // console.log(2 ** 2); //4
  // console.log(2 ** 3); //8
  // console.log(2 ** 4); //16
  // console.log(2 ** 8); //256
  // console.log(2 ** 16); //65536(6万5千536)
  // console.log(2 ** 32); //4294967296
  // console.log(2 ** 64); //18446744073709552000

}


function myFunction1_7_03() {

  //65535を超えるコードポイントを持つ文字
  console.log('𝄞'.codePointAt(0)); //119070　（ト音記号）
  console.log('𪚥'.codePointAt(0)); //173733　（龍が4つ。読み：テツ）

}


function myFunction1_7_04() {

  //コードユニットを返すlengthプロパティ
  console.log('𝄞 𪚥'.length); //5

  //コードユニットを返すlengthプロパティ
  console.log('𝄞 𪚥'.charCodeAt(0)); //55348
  console.log('𝄞 𪚥'.charCodeAt(1)); //56606
  console.log('𝄞 𪚥'.charCodeAt(2)); //32　←スペースのコードユニット=コードポイント

  //16進数を確認する
  console.log((55348).toString(16)); //0xd834
  console.log((56606).toString(16)); //0xdd1e


}


function myFunction1_7_05() {

  const json = '{"clef":"\ud834\udd1e" }';

  const jsonObj = JSON.parse(json);

  console.log(jsonObj.clef); //𝄞

}



{



  //  console.log(String.fromCharCode(55348)); //

  // console.log(0x0FFF); //4095
  // console.log(0xFFFF); //65535
  // console.log(0x10FFFF); //1114111

  //  Unicode一覧 0000-0FFF（U+0000からU+0FFFまで）
  // Unicode一覧 1000-1FFF（U+1000からU+1FFFまで）
  // Unicode一覧 2000-2FFF（U+2000からU+2FFFまで）
  // Unicode一覧 3000-3FFF（U+3000からU+3FFFまで）
  // Unicode一覧 4000-4FFF（U+4000からU+4FFFまで）
  // Unicode一覧 5000-5FFF（U+5000からU+5FFFまで）
  // Unicode一覧 6000-6FFF（U+6000からU+6FFFまで）
  // Unicode一覧 7000-7FFF（U+7000からU+7FFFまで）
  // Unicode一覧 8000-8FFF（U+8000からU+8FFFまで）
  // Unicode一覧 9000-9FFF（U+9000からU+9FFFまで）
  // Unicode一覧 A000-AFFF（U+A000からU+AFFFまで）
  // Unicode一覧 B000-BFFF（U+B000からU+BFFFまで）
  // Unicode一覧 C000-CFFF（U+C000からU+CFFFまで）
  // Unicode一覧 D000-DFFF（U+D000からU+DFFFまで）
  // Unicode一覧 E000-EFFF（U+E000からU+EFFFまで）
  // Unicode一覧 F000-FFFF（U+F000からU+FFFFまで）


  // console.log('fg0123'.codePointAt(0)); //97
  // console.log('fg0123'.codePointAt(1)); //98
  // console.log('fg0123'.codePointAt(2)); //99
  // console.log('fg0123'.codePointAt(3)); //33
  // console.log('fg0123'.codePointAt(4)); //47


  // console.log((0x0021).toString(10)); //33
  // console.log((103).toString(16)); //62
  // console.log((48).toString(16)); //63
  // console.log((49).toString(16)); //21
  // console.log((50).toString(16)); //2f

  // console.log(String.fromCodePoint(0x0066, 0x0067, 0x0031, 0x0032, 0x0033)); //fg123

  //16進数で指定
  // console.log(String.fromCodePoint(0x0068, 0x0065, 0x006c, 0x006c, 0x006f)); //hello

  //引数のインデックスを符号位置で返す
  // console.log('hello'.codePointAt(0)); //104
  // console.log('hello'.codePointAt(1)); //101
  // console.log('hello'.codePointAt(2)); //108

  //10進数で指定
  // console.log(String.fromCodePoint(104, 101, 108, 108, 111)); //hello

  //引数のインデックスをUTF-16 コードユニットで返す
  // console.log('hello'.charCodeAt(0)); //104
  // console.log('hello'.charCodeAt(1)); //101
  // console.log('hello'.charCodeAt(2)); //108

}


function myFunction1_7_06() {

  //コードユニットを返すlengthプロパティ
  console.log('𝄞 𪚥'.length); //5

  //コードユニットを返すlengthプロパティ
  console.log('𝄞 𪚥'.charCodeAt(0)); //55348
  console.log('𝄞 𪚥'.charCodeAt(1)); //56606
  console.log('𝄞 𪚥'.charCodeAt(2)); //32
  console.log('𝄞 𪚥'.charCodeAt(3)); //55401
  console.log('𝄞 𪚥'.charCodeAt(4)); //56997

  //コードユニットを返すlengthプロパティ
  console.log('𝄞 𪚥'.codePointAt(0)); //119070
  console.log('𝄞 𪚥'.codePointAt(1)); //56606
  console.log('𝄞 𪚥'.codePointAt(2)); //32
  console.log('𝄞 𪚥'.codePointAt(3)); //173733
  console.log('𝄞 𪚥'.codePointAt(4)); //56997
}




function myFunction1_7_06() {
  return

  //codePointAt(pos) メソッドは、 Unicode コードポイント値である負ではない整数を返します。指定された位置に要素が存在しない場合は undefined を返します。 pos の位置から UTF-16 サロゲートペアが始まらない場合は、 pos の位置のコードユニットを返します。
  console.log('𝄞'.codePointAt(0)); //119070
  console.log('𝄞'.codePointAt(1)); //56606
  console.log('𝄞'.codePointAt(2)); //undefined

  //charCodeAt()メソッドは、指定された位置にあるUTF-16コードユニットを表す0から65535までの整数を返します。単一の UTF-16 コードユニットで表現可能なコードポイントであれば、 UTF-16 コードユニットは Unicode コードポイントと一致します。 Unicode コードポイントが単一の UTF-16 コードユニットで表現できない場合 (値が 0xFFFF を超える場合)、返されるコードユニットはそのコードポイントのサロゲートペアの最初の部分になります。コードポイント値全体を取得したい場合は、 codePointAt() を使用してください。
  console.log('𝄞'.charCodeAt(0)); //55348
  console.log('𝄞'.charCodeAt(1)); //56606
  console.log('𝄞'.charCodeAt(2)); //NaN

  console.log('𪚥'.charCodeAt(0)); //55401
  console.log('𪚥'.charCodeAt(1)); //56997
  console.log('𪚥'.charCodeAt(2)); //NaN

}