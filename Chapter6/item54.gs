function myFunction54_01() {

  /** 初期化されていない変数 */
  let x;
  console.log(x); // => undefined

  /** 存在しないプロパティ */
  const obj = {};
  console.log(obj.property); // => undefined

  /** 値のない戻り値 */
  const f = () => { return; };
  console.log(f()); // => undefined

  /** 戻り値のない関数 */
  const g = () => { };
  console.log(g()); // => undefined

  /** 値が指定されなかった引数 */
  const h = (x) => { return x; };
  console.log(h()); // => undefined
}


function myFunction54_02() {

  /** クラスCustomSheet */
  class CustomSheet {

    /** カスタムシートのコンストラクタ
      * @constructor
      */
    constructor() {
      this.range = SpreadsheetApp.getActiveSheet().getRange('A1');
    }

    /** セルの背景色にハイライトをつけるメソッド */
    highlight(color) {
      this.range.setBackground(color);
    }

  }

  const element = new CustomSheet();

  element.highlight('red');
  element.highlight();

}


function myFunction54_03() {

  /** クラスCustomSheet */
  class CustomSheet {

    /** カスタムシートのコンストラクタ
      * @constructor
      */
    constructor() {
      this.range = SpreadsheetApp.getActiveSheet().getRange('A1');
    }

    /** セルの背景色にハイライトをつけるメソッド */
    highlight(color) {

      if (color !== undefined) {
        this.range.setBackground(color);
        return
      }

      const max = 3, min = 1;
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      switch (randomNum) {
        case 1:
          color = 'red';
          break;
        case 2:
          color = 'blue';
          break;
        case 3:
          color = 'yellow';
          break;
      }
    }

  }

  element.highlight(undefined);

  const config = {};
  element.highlight(config.highlightColor); // 存在しないプロパティ → 「デフォルト値」にしたいが、ランダムになってしまう

}

function myFunction54_04() {

  /** クラスCustomSheet */
  class CustomSheet {

    /** カスタムシートのコンストラクタ
      * @constructor
      */
    constructor() {
      this.range = SpreadsheetApp.getActiveSheet().getRange('A1');
    }

    /** セルの背景色にハイライトをつけるメソッド */
    highlight(color) {

      if (color !== 'random') {
        this.range.setBackground(color);
        return
      }

      const max = 3, min = 1;
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      switch (randomNum) {
        case 1:
          color = 'red';
          break;
        case 2:
          color = 'blue';
          break;
        case 3:
          color = 'yellow';
          break;
      }

      this.range.setBackground(color);

    }

  }

  const element = new CustomSheet();

  element.highlight('random');
  element.highlight(undefined);

}

function myFunction54_05() {


  /** クラスCustomSheet */
  class CustomSheet {

    /** カスタムシートのコンストラクタ
      * @constructor
      */
    constructor() {
      this.range = SpreadsheetApp.getActiveSheet().getRange('A1');
    }

    /** セルの背景色にハイライトをつけるメソッド */
    highlight(obj) {

      if (!obj.random) {
        this.range.setBackground(obj.color);
        return
      }

      const max = 3, min = 1;
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      switch (randomNum) {
        case 1:
          color = 'red';
          break;
        case 2:
          color = 'blue';
          break;
        case 3:
          color = 'yellow';
          break;
      }

      this.range.setBackground(color);

    }

  }

  const element = new CustomSheet();
  element.highlight({ random: true, color: '' });
  element.highlight({ random: false, color: 'purple' });
  element.highlight({ random: false });

}

function myFunction54_06() {

  /** クラスServer */
  class Server {

    constructor(port, hostname) {
      this.port = port;
      this.hostname = arguments.length < 2 ? 'localhost' : String(hostname);
    }

  }

  const s1 = new Server(80, 'example.com');
  console.log(s1); // => 	{ port: 80, hostname: 'example.com' }

  const s2 = new Server(80);
  console.log(s2); // => 	{ port: 80, hostname: 'localhost' }

  const config = {};
  const s3 = new Server(80, config.hostname);
  console.log(s3); // => 	{ port: 80, hostname: undefined }

}

function myFunction54_07() {

  /** クラスServer */
  class Server {

    constructor(port, hostname = 'localhost') {
      this.port = port;
      this.hostname = String(hostname);
    }

  }

  const s1 = new Server(80, 'example.com');
  console.log(s1); // => 	{ port: 80, hostname: 'example.com' }

  const s2 = new Server(80);
  console.log(s2); // => 	{ port: 80, hostname: 'localhost' }

  const config = {};
  const s3 = new Server(80, config.hostname);
  console.log(s3); // => 	{ port: 80, hostname: 'localhost' }

}

function myFunction54_08() {

  /** クラスServer */
  class Server {

    constructor(port, hostname) {
      this.port = port;
      this.hostname = String(hostname || 'localhost');
    }

  }

  const s1 = new Server(80, 'example.com');
  console.log(s1); // => 	{ port: 80, hostname: 'example.com' }

  const s2 = new Server(80);
  console.log(s2); // => 	{ port: 80, hostname: 'localhost' }

  const config = {};
  const s3 = new Server(80, config.hostname);
  console.log(s3); // => 	{ port: 80, hostname: 'localhost' }

}


function myFunction54_09() {

  /** クラスElement */
  class Element {
    constructor(width, height) {
      this.width = width || 320;
      this.height = height || 240;
    }
  }

  const c1 = new Element(0, 0);
  console.log(c1.width);　// => 320
  console.log(c1.height); // => 240

}

function myFunction54_10() {

  /** クラスElement */
  class Element {
    constructor(width = 320, height = 240) {
      this.width = width;
      this.height = height;
    }
  }

  const c2 = new Element(0, 0);
  console.log(c2.width); // => 0
  console.log(c2.height); // => 0

}