function myFunction48_01() {

  class Member {

    constructor(name) {
      this.name = name;
      this.friends = [];
    }

    inNetwork(other) {

      const visited = {};
      const workset = {};

      workset[this.name] = this;

      for (const name in workset) {

        const member = workset[name];
        delete workset[name];

        if (name in visited) continue;

        visited[name] = member;

        if (member === other) return true;

        member.friends.forEach(friend => workset[friend.name] = friend);

      }
      return false;
    }

  }


  const a = new Member('Alice');
  const b = new Member('Bob');
  const c = new Member('Carol');
  const d = new Member('Dieter');
  const e = new Member('Eli');
  const f = new Member('Fatima');
  const g = new Member('George');

  a.friends.push(b);
  b.friends.push(c);
  c.friends.push(e);
  d.friends.push(b);
  e.friends.push(d, f);

  console.log(a.inNetwork(g)); //false

  console.log(a.inNetwork(f)); //false

}






function myFunction48_02() {

  class Member {

    constructor(name) {
      this.name = name;
      this.friends = [];
    }

    inNetwork(other) {

      const visited = {};
      const workset = new WorkSet();
      workset.add(this.name, this);

      while (!workset.isEmpty()) {

        const name = workset.pick();
        const member = workset.get(name);
        workset.remove(name);

        if (name in visited) continue; //同じメンバーを再訪問しない

        visited[name] = member;

        if (member === other) return true; //見つかった？

        member.friends.forEach(friend => workset.add(friend.name, friend));

      }
      return false;
    }

  }


  class WorkSet {

    constructor() {
      this.entries = new Map();
      this.count = 0;
    }

    isEmpty() {
      return this.count === 0;
    }

    add(key, val) {
      if (this.entries.has(key)) return;
      this.entries.set(key, val);
      this.count++;
    }

    get(key) {
      return this.entries.get(key);
    }

    remove(key) {
      if (!this.entries.has(key)) return;
      this.entries.delete(key);
      this.count--;
    }

    pick() {
      const keys = [...this.entries.keys()];
      if (keys.length) return keys[0];
      throw new Error('empty dictionary');
    }

  }


  const a = new Member('Alice');
  const b = new Member('Bob');
  const c = new Member('Carol');
  const d = new Member('Dieter');
  const e = new Member('Eli');
  const f = new Member('Fatima');
  const g = new Member('George');

  a.friends.push(b);
  b.friends.push(c);
  c.friends.push(e);
  d.friends.push(b);
  e.friends.push(d, f);

  console.log(a.inNetwork(g)); //false
  console.log(a.inNetwork(f)); //true

}




function myFunction48_03() {

  class Member {
    constructor(name) {
      this.name = name;
      this.friends = [];
    }

    inNetwork(other) {
      const visited = {};
      const workset = new Map([[this.name, this]]);

      while (workset.size) {

        const name = [...workset.keys()][0]; // pick メソッドを代⽤したステートメント
        const member = workset.get(name);

        workset.delete(name);

        if (name in visited) continue;

        visited[name] = member;

        if (member === other) return true;

        member.friends.forEach(friend => workset.set(friend.name, friend));
      }
      return false;
    }
  }

  const a = new Member('Alice');
  const b = new Member('Bob');
  const c = new Member('Carol');
  const d = new Member('Dieter');
  const e = new Member('Eli');
  const f = new Member('Fatima');
  const g = new Member('George');

  a.friends.push(b);
  b.friends.push(c);
  c.friends.push(e);
  d.friends.push(b);
  e.friends.push(d, f);

  console.log(a.inNetwork(g)); //false
  console.log(a.inNetwork(f)); //true

}




function myFunction48_04() {

  class Member {

    constructor(name) {
      this.name = name;
      this.friends = [];
    }

    inNetwork(other) {
      const visiteds = [];
      const workset = new Map([[this.name, this]]);

      while (workset.size) {

        const name = [...workset.keys()][0]; // pick メソッドを代⽤
        const member = workset.get(name);

        workset.delete(name);

        if (visiteds.map(visited => visited.name).includes(member.name)) continue;
       
        visiteds.push(member);

        if (member === other) return true;

        member.friends.forEach(friend => workset.set(friend.name, friend));
      }

      return false;
    }

  }

  
  const a = new Member('Alice');
  const b = new Member('Bob');
  const c = new Member('Carol');
  const d = new Member('Dieter');
  const e = new Member('Eli');
  const f = new Member('Fatima');
  const g = new Member('George');

  a.friends.push(b);
  b.friends.push(c);
  c.friends.push(e);
  d.friends.push(b);
  e.friends.push(d, f);

  console.log(a.inNetwork(g)); //false
  console.log(a.inNetwork(f)); //true

}