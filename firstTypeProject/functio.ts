function add (num1: number, num2: number){
    return num1 + num2
  
  };
  /*function is not allowed to return ndefined you should add type void because with undefined 
  javascript will expect return something is undefined 
  */
  function print (num: number){
    console.log(`result is ${num}`);
  
  }
  const value = print(add(2,3));
  
  //function types
  let combineValues; //here it is any
  combineValues = add; //here add the value of function add to it
  console.log(combineValues(2,6)); //here it works
  //but it is not a good solution
  //solution 
  let combineValues1 : Function;
  combineValues1 = print; // also it is not good solution we did not which value every function
  //so it is better to be more precise
  let combineValues2: (num1: number, num2: number)=> number;
  // call back function
  function addToHandler (num1: number, num2: number, cb: (num: number)=> void){
    let result = num1 + num2;
    console.log(cb(result));
  
  };
  console.log(addToHandler(2,2,(re)=>{
    console.log(re);
  }));

  /* arrow function
  - you cannot write short forms in typescript but when define a function as a type you can
  */
 const add2 = (a: number, b: number) => a + b ;
//  const add4 = output =>  this is not ok with typescript
 const add3 : (a: number, b: number) => void =  output => console.log("hi");