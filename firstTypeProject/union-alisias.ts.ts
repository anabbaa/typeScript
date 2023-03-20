function add2(num1: number | string, num2: number | string){
  let result;
  if (typeof num1 === "number" && typeof num2 === "number"){
    result =  num1 + num2;
  }
  else{
    result = num1.toString() + num2.toString();
  };
  return result;

};
const number2 = add2(2, 6);
const data1 = add2("ahmed", " best");
console.log(number2);
console.log(data1);

//alias 
type User = {name: string; age: number};
const user: User = {
  name: "ahmed",
  age: 33
};

//transfer function

function great (user : {name: string; age: Number}){
  return `hello ${user.name};`
};
type User1 = {name: string; age: number};
function great1 (user: User1){
  return `hello ${user.name};`
}
function isolder (user : {name: string; age: number},checkNum : number ){
  return checkNum > user.age

}
type USer2 = {name: string; age: number};
function isolder1 (user: USer2 , checkNum : number){
  return checkNum > user.age
}