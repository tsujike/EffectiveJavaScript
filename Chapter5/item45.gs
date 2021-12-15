
function myFunction45_01() {

  const dict = { alice: 34 };

  if ('alice' in dict) {
    dict.alice = 24;
  }

  console.log(dict); //{ alice: 24 }

}


function myFunction45_02() {

  const dict = {};

  console.log('alice' in dict); //false
  console.log('toString' in dict); //true
  console.log('valueOf' in dict); //true

  console.log(dict.hasOwnProperty('alice')); //false
  console.log(dict.hasOwnProperty('toString')); //false

}



function myFunction45_03() {

  const dict = {};

  if (dict.hasOwnProperty('alice')) {
    dict.alice;
  } else {
    undefined;
  }

  console.log('alice' in dict); //false

}



function myFunction45_04() {

  const dict = {};
  dict.hasOwnProperty = 10;
  console.log(dict.hasOwnProperty('alice')); //TypeError: dict.hasOwnProperty is not a function

}



function myFunction45_05() {

  const dict = {};
  dict.alice = 24;

  // const hasOwn = Object.prototype.hasOwnProperty;

  //糖衣構文
  const hasOwn = {}.hasOwnProperty;

  hasOwn.call(dict, 'alice');

  console.log(dict.hasOwnProperty('alice')); //true

}


function myFunction45_06() {

  const dict = {};
  dict.alice = 24;

  const hasOwn = {}.hasOwnProperty;
  console.log(hasOwn.call(dict, 'hasOwnProperty')); //false
  console.log(hasOwn.call(dict, 'alice')); //true

  dict.hasOwnProperty = 10;
  console.log(hasOwn.call(dict, 'hasOwnProperty')); //true
  console.log(hasOwn.call(dict, 'alice')); //true

  console.log(dict); //{ alice: 24, hasOwnProperty: 10 }
}




function myFunction45_07() {

  function Dict(elements) {
    this.elements = element || {};
  }

  Dict.prototype.has = function (key) {
    return {}.hasOwnProperty.call(this.elements, key);
  };

  Dict.prototype.get = function (key) {
    return this.has(key) ? this.elements[key] : undefined;
  };

  Dict.prototype.set = function (key, val) {
    this.elements[key] = val;
  };

  Dict.prototype.remove = function (key) {
    delete this.elements[key];
  };

}



function myFunction45_08() {

  function Dict(elements) {
    this.elements = elements || {};
  }

  Dict.prototype.has = function (key) {
    return {}.hasOwnProperty.call(this.elements, key);
  };

  Dict.prototype.get = function (key) {
    return this.has(key) ? this.elements[key] : undefined;
  };

  Dict.prototype.set = function (key, val) {
    this.elements[key] = val;
  };

  Dict.prototype.remove = function (key) {
    delete this.elements[key];
  };

  const dict = new Dict({
    alice: 34,
    bob: 24,
    chris: 62
  });

  console.log(dict.has('alice')); //true 
  console.log(dict.get('bob')); //24
  console.log(dict.has('valueOf')); //false


}



function myFunction45_09() {

  const empty = Object.create(null);
  console.log('__proto__' in empty); //false

  const hasOwn = {}.hasOwnProperty;
  console.log(hasOwn.call(empty, '__proto__')); //false

}





function myFunction45_10() {

  function Dict(elements) {
    this.elements = elements || {};
    this.hasSpecialProto = false;
    this.specialProto = undefined;
  }


  Dict.prototype.has = function (key) {
    if (key === '__proto__') {
      return this.hasSpecialProto;
    }

    return {}.hasOwnProperty.call(this.elements, key);
  };


  Dict.prototype.get = function (key) {
    if (key === '__proto__') {
      return this.specialProto;
    }

    return this.has(key) ? this.elements[key] : undefined;
  };


  Dict.prototype.set = function (key, val) {
    if (key === '__proto__') {
      this.hasSpecialProto = true;
      this.specialProto = undefined;
    } else {
      this.elements[key] = val;
    }
  };


  Dict.prototype.remove = function (key) {
    if (key === '__proto__') {
      this.hasSpecialProto = true;
      this.specialProto = undefined;
    } else {
      delete this.elements[key];
    }
  };

  const dict = new Dict();
  console.log(dict.has('__proto__')); //false
  
}