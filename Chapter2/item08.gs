function myFunction8_01() {

  flag = true;
  const total = getFlag();

  if (flag) console.log('flagが立ってます');
  if (!flag) console.log('flagは降りてます');

}

function getFlag() {

  flag = false;

}

function myFunction08_2() {

  const players = [
    {
      name: 'Tom',
      levels: [
        { score: 100 },
        { score: 200 },
      ]
    },
    {
      name: 'Bob',
      levels: [
        { score: 300 },
        { score: 400 },
      ]
    },
  ];

  const avrageScore = averageScore(players);
  console.log(avrageScore); //300 + 700 / 2 = 500

}


function averageScore(players) {

  sum = 0;
  for (i = 0, n = players.length; i < n; i++) {

    sum += score(players[i]);

  }

  return sum / n;
}

function score(player) {

  sum = 0;
  for (i = 0, n = player.levels.length; i < n; i++) { //iの前にletを付けたり外したりする
    sum += player.levels[i].score;

  }

  return sum;

}



function myFunction8_03(num) {

  x = 1
  console.log(globalThis.x); //1

  var y = 2;
  console.log(globalThis.y); //undefined

  const z = 3;
  console.log(globalThis.z); //undefined

  globalThis.l = 4;
  console.log(l); //4

}



