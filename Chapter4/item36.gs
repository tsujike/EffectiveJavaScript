
function myFunction36_01() {


  function Tree(x) {
    this.value = x;
  }

  Tree.prototype = {
    children: [],//インスタンスの状態
    addChild: function (x) {
      this.children.push(x)
    }

  }

  const left = new Tree(2);
  left.addChild(1);
  left.addChild(3);

  const right = new Tree(6);
  right.addChild(5);
  right.addChild(7);

  const top = new Tree(4);
  top.addChild(left);
  top.addChild(right);

  console.log(top.children); //	[ 1, 3, 5, 7, { value: 2 }, { value: 6 } ]

}







function myFunction36_02() {


  class Tree {
    constructor(x) {
      this.value = x;
      this.children = [];//インスタンスの状態
    }

    addChild(x) {
      this.children.push(x)
    }

  }

  const left = new Tree(2);
  left.addChild(1);
  left.addChild(3);

  const right = new Tree(6);
  right.addChild(5);
  right.addChild(7);

  const top = new Tree(4);
  top.addChild(left);
  top.addChild(right);

  console.log(left.children); //	[ 1, 3 ]
  console.log(right.children); //	[ 5, 7 ]
  console.log(top.children); //		[ { value: 2, children: [ 1, 3 ] }, { value: 6, children: [ 5, 7 ] } ]

}




