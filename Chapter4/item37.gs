
function myFunction37_01() {
'use strict'

  class CSVreader {
    constructor(separators) {
      this.separators = separators || [","];
      const regexpArray = this.separators.map(sep => "\\" + sep[0]).join("|");
      this.regexp = new RegExp(regexpArray);
    }

    read(str) {
      const lines = str.trim().split(/\n/);
      return lines.map(line => line.split(this.regexp));
    }

  }

  const reader = new CSVreader();
  console.log(reader.read("a,b,c\nd,e,f\n")); //[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

  const reader2 = new CSVreader(["_"]);
  console.log(reader2.read("a_b_c\nd_e_f\n")); //[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

}