
function myFunction40_01() {

  function Dir(path, entries) {
    this.path = path;
    for (let i = 0; i < entries.length; i++) {
      this[i] = entries[i];
    }

  }

  Dir.prototype = Object.create(Array.prototype);

  const dir = new Dir('path', ['index', 'script', 'css']);
  console.log(dir.length); //0

}


function myFunction40_02() {

  console.log(Object.prototype.toString.call({})); //[object Object]
  console.log(Object.prototype.toString.call([])); //[object Array]
  console.log(Object.prototype.toString.call(0)); //[object Number]
  console.log(Object.prototype.toString.call('a')); //[object String]
  console.log(Object.prototype.toString.call(true)); //[object Boolean]
  console.log(Object.prototype.toString.call(/.*/)); //[object RegExp]
  console.log(Object.prototype.toString.call(function () { })); //[object Function]

  function Dir() { }
  console.log(Object.prototype.toString.call(new Dir())); //[object Object]

}


function myFunction40_03() {

  function Dir(path, entries) {
    this.path = path;
    this.entries = entries;
  }

  Dir.prototype.forEach = function (f, thisArg) {
    if (typeof thisArg === 'undefined') {
      thisArg = this;
    }
    this.entries.forEach(f, thisArg);
  };

  const dir = new Dir('path', ['index', 'script', 'css']);

  dir.forEach(element => console.log(element));　//index //script //css

}
