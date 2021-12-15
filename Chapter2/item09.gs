function myFunction2_9_01(a, i, j) {

  a = [10];
  i = 0;
  j = 0;

  temp = a[i];
  a[i] = a[j];
  a[j] = temp;

  console.log(globalThis.temp); //10

}

function myFunction2_9_02(a, i, j) {

  a = [10];
  i = 0;
  j = 0;

  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;

  console.log(globalThis.temp); //undefined

}


function myFunction2_9_03() {

  const num = 0;

  {
    const num1 = 1;

    {
      const num2 = 2;

      function myFunction999() {
        const num3 = 3;
      }

    };

    console.log(num2); //ReferenceError: num2 is not defined
  };

  console.log(num1); //ReferenceError: num1 is not defined

}


function myFunction2_9_04() {

  const num = 0;

  {
    const num1 = 1;

    {
      const num2 = 2;
      console.log(num1); //1
      console.log(num); //0
    };

  };

}





function myFunction2_9_05() {

  const num = 0;

  {
    const num1 = 1;

    // {
    //   const num2 = 2;
    //   console.log(num1); //1
    //   console.log(num); //0
    // };

  };

  {
    const num2 = 2;
    console.log(num); //0
    console.log(num1); //ReferenceError: num1 is not defined
  };

}




// function myFunction2_9_03() {

//   name = 'tsujike';
//   // console.log(name);
//   const num = 10;
//   // console.log(num); //10

//   // console.log(name);

//   // myFunction2_9_99();
//   // console.log(name2);

//   console.log(name3);
//   console.log(globalThis.name3);

// }

// myFunction2_9_99();

// console.log(globalThis.name2);
// console.log(name3);
// console.log(globalThis.name3);





function myFunction2_9_99() {



}
