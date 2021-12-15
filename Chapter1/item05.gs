function myFunction1_5_01() {

  //リテラルが用意されているオブジェクトはリテラルで書く
  console.log(new String('Tom')); //{ '0': 'T', '1': 'o', '2': 'm' }
  console.log('Tom'); //Tom

  console.log(new Number(10)); //{}
  console.log(10); //10

  console.log(new Boolean(true)); //{}
  console.log(true); //true

  console.log(new Array(1, 2, 3)); //[ 1, 2, 3 ]
  console.log([1, 2, 3]); //[ 1, 2, 3 ]

  console.log(new Object()); //{}
  console.log({}); //{}

  console.log(new RegExp('.*?')); ///.*?/
  console.log(/.*?/); ///.*?/

}




function myFunction1_5_02() {

  //数値型から文字列型への変換と強制
  const num = 10;

  //好ましくない書き方
  console.log(new String(num)); //{ '0': '1', '1': '0' }
  console.log(num + ''); //'10'
  console.log(num.toString()); //'10'

  //好ましい書き方
  console.log(String(num)); //'10'


  //文字列型から数値への変換と強制
  const text = '10';

  //好ましくない書き方
  console.log(new Number(text)); //{}
  console.log(+text); //10
  console.log(parseInt(text)); //10

  //好ましい書き方
  console.log(parseInt(text, 10)); //10
  console.log(Number(text)); //10

}


function myFunction1_5_03() {

  const json = `{
      "birthday_year": "1980",
      "birthday_month": "08",
      "birthday_day": "12"
  }`;

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const jsonObject = JSON.parse(json);
  const usersBirthdayMonth = jsonObject.birthday_month;
  const usersBirthdayDay = jsonObject.birthday_day;

  //厳密等価演算子では処理できない
  if (month === usersBirthdayMonth && day === usersBirthdayDay) {
    console.log('HappyBirthDay!!!');
  } else {
    console.log('今日は誕生日ではありません。');
  }
  //'今日は誕生日ではありません。'

  //等価演算子なら正しい判定を行う
  if (month == usersBirthdayMonth && day == usersBirthdayDay) {
    console.log('HappyBirthDay!!!');
  } else {
    console.log('今日は誕生日ではありません。');
  }
  // 'HappyBirthDay!!!'


  //型をそろえて、厳密等価演算子で処理しよう
  const userBDMonth = Number(usersBirthdayMonth);
  const uesrBDDay = Number(usersBirthdayDay);

  if (month === userBDMonth && day === uesrBDDay) {
    console.log('HappyBirthDay!!!');
  } else {
    console.log('今日は誕生日ではありません。');
  }
  // 'HappyBirthDay!!!'

}


function myFunction1_5_04() {

  //オブジェクトに定義されている2つのメソッド
  console.log(new Number('10').valueOf()); //10 number
  console.log(new Number('10').toString()); //'10' string

  //等価演算子の型強制
  if ('10' == new Number('10')) console.log('両辺とも数値型に強制され比較される');

  //等価演算子の強制ルール
  if (null == undefined) console.log('強制はなし。常にtruthy');

  if (null || undefined == !null && !undefined) {
  } else {
    console.log('強制はなし。常にfalsy');
  }

  //Dateオブジェクトはプリミティブに強制される
  console.log(new Date('2021/8/12').toString());//Thu Aug 12 2021 00:00:00 GMT+0900 (Japan Standard Time)
  console.log(new Date('2021/8/12').valueOf()); //1628694000000

  if ('1628694000000' == new Date('2021/8/12')) console.log('今日の天気は？');
  if ('1628694000000' == new Date('2021/8/12').valueOf()) console.log('今日はいい天気ですね');

}





