function myFunction56_01() {

  //ステートフルなオブジェクト
  const d = new Date();
  console.log(d); // => Wed Dec 22 2021 00:41:07 GMT+0900 (Japan Standard Time)

  const formatDate = Utilities.formatDate(d, 'JST', 'yyyy年MM月dd日 HH時mm分ss秒');
  const strNow = `現在時刻は${formatDate}です`
  console.log(strNow);　// => 	現在時刻は2021年12月22日 00時41分07秒です
}



function myFunction56_02() {

  //ステートフルなオブジェクト
  const d = new Date();
  console.log(d); // => Wed Dec 22 2021 00:47:43 GMT+0900 (Japan Standard Time)

  //あずかり知らずな処理
  d.setDate(31);

  const formatDate = Utilities.formatDate(d, 'JST', 'yyyy年MM月dd日 HH時mm分ss秒');
  const strNow = `現在時刻は${formatDate}です`
  console.log(strNow);　// => 	現在時刻は2021年12月31日 00時47分43秒です
}


function myFunction56_03() {

  //ステートレスなオブジェクト
  const formatDate = Utilities.formatDate(new Date(), 'JST', 'yyyy年MM月dd日 HH時mm分ss秒');
  const strNow = `現在時刻は${formatDate}です`
  console.log(strNow);　// => 	現在時刻は2021年12月22日 00時51分49秒です

}




function myFunction56_04() {

  //このコードは動きません

  //ステートフル
  c.fillText("text1", 0, 0); //デフォルト⾊
  c.fillStyle = "blue";
  c.fillText("text2", 0, 30);//⻘
  c.fillStyle = "black";
  c.fillText("text3", 0, 60);//黒に戻る

  //ステートレス化
  c.fillText("text1", 0, 0); //デフォルト⾊
  c.fillText("text2", 0, 30, { fillStyle: "blue" });//⻘
  c.fillText("text3", 0, 60);//デフォルト⾊

}