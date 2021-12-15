function myFunction60_01() {

  function escapeBasicHTML(str) {
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  const body = '"Hello World"テスト中です。<html></html>';
  const text = escapeBasicHTML(body);
  console.log(text); // => &quot;Hello World&quot;テスト中です。&lt;html&gt;&lt;/html&gt;

}


function myFunction60_02() {

  function escapeBasicHTML(str) {

    const text1 = str.replace(/&/g, '&amp;');
    const text2 = text1.replace(/</g, '&lt;');
    const text3 = text2.replace(/>/g, '&gt;');
    const text4 = text3.replace(/"/g, '&quot;');
    const text5 = text4.replace(/'/g, '&apos;');

    return text5;
  }

  const body = '"Hello World"テスト中です。<html></html>';
  const text = escapeBasicHTML(body);
  console.log(text); // => &quot;Hello World&quot;テスト中です。&lt;html&gt;&lt;/html&gt;

}



function myFunction60_03() {

  const records = [
    { username: 'TSUJIKE', age: 25 },
    { username: 'YAMAGUCHI', age: 35 },
    { username: '', age: 100 },
    { username: 'KATAOKA', age: 31 }
  ];

  const users = records.map(record => record.username)
    .filter(username => !!username)
    .map(username => username.toLowerCase()
    );
 
  console.log(users); //[ 'tsujike', 'yamaguchi', 'kataoka' ]

}



