
function Logger(target: Function){
    console.log("loggong");
    console.log(target);
}
class Person {
    name = "Max";
    constructor(){
        console.log("creating person object")
    }
}
let per1 = new Person();
console.log(per1);

//factory
/*
we do that beacause we accepts string in the father function and pass its value in excuted decroater

*/
function Logged(st: string){
    return function (target: Function){
        console.log(st);
        console.log(target);

    }
}
@Logged("from per2")
class Person1 {
    name = "may";
    constructor(){
        console.log("creating object");
    }
}
let per2 = new Person1();
console.log(per2);

function Logged1(template: string, hookId: string){
    return function (_: any){
        let hookEl = document.getElementById(hookId);
        if(hookEl){
            hookEl.innerHTML = template;
        }

    }
}
@Logged1("<h1>hi there</h1>", "app")
class Person2 {
    nam = "may";
    constructor(){
        console.log("creataing object")
    }
}
let per3 = new Person2();
console.log(per3);

function Logg(template: string, hookId: string){
    return function(constructor: any){
        let hookEl = document.getElementById(hookId);
        let per = new constructor();
        if (hookEl){
            hookEl.innerHTML = template;
            hookEl.textContent = per.name;
        }

    }
}
@Logg("<h1></h1>", "app")
class Person3 {
    name = "max";
    constructor(){
        console.log("creating object");
    }
}
let per4 = new Person3();
console.log(per4);
/*
order from bottom to top but remember that is for dcerators only so in factorx decerator
that applies for child function and if we have some thing in father function so javascript rules
will be applied
*/
function Log(target: any, propertyName: string | symbol){
console.log(target);
console.log(propertyName);
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor){
console.log(target);
console.log(name);
console.log(descriptor);
}
function Log3(target: any, name: string | symbol, decerator: PropertyDescriptor){
    console.log(target);
    console.log(name);
    console.log(decerator);

}
function Log4(target: any, name: string | symbol, position: number){
    console.log(target);
    console.log(name);
    console.log(position);

}
class Product {
    @Log
    title: string;
    private _price: number;
    @Log2
    set price(val: number){
        if (val > 0){
            this._price = val;
        }
        else{
            throw new Error("price should be positive");
        }

    }
    constructor(t: string, p: number){
        this.title = t;
        this._price = p;

    }
    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price + (1 * tax);

    }
}
let pro1 = new Product("cup", 22);
console.log(pro1);
/*
in the unter example i returned class in the decrator so i replaced the class which willl be
added to decrator so i returned a class and kept the old one and add logic to it so thiis template 
will only be rendered to DOM only if i instinate a class

new (...args: any[]) => any
The new keyword here specifies that this function can be treated as a class constructor function 
and called with the new keyword.
This gives us the whole picture that the function is a function that accepts any amount of arguments 
(of type any) that returns type any and can be used as a constructor function with the new keyword.
*/

function withTemplate(template: string, hookId: string){
    return function<T extends {new(...arrgs: any[]): {name: string}}>(originalConstructor: T){
        return class extends originalConstructor {
            constructor(..._: any[]){
                super();
                let hookEl = document.getElementById(hookId);
                if(hookEl){
                    hookEl.innerHTML = template;
                    hookEl.textContent = this.name;
                }
            }

        }
    }
}
@withTemplate("<h1>hi web </h1>", "web")
class Person4 {
    name = "saed";
    constructor(){
        console.log("creating object");
    }
}
/*
decroators who added to methods or acessors cam return something which  ts can be  conidered otherwise 
ts will ignore them such as  property or parameters
here unter we have an example return from a method 
- this refers to whatever get will trigger and get will be triggered by a concrete object to which
it belongs
*/
let per5 = new Person4();
function AutoBind (_: any, _2: string, decerator: PropertyDescriptor){
    const originalDescriptor = decerator.value;
    const newDescriptor : PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get () {
            const newR = originalDescriptor.bind(this);
            return newR;
        }
    };
    return newDescriptor;
}

class Printer {
    message = "this works"
    constructor(m: string){
        this.message = m;

    }
    @AutoBind
    showMessage(){
        console.log(this.message);
    }
}
let print1 = new Printer("this work");

const  sbutton = document.querySelector("button")!;
sbutton.addEventListener("click", print1.showMessage);
//validation 
// interface ValidatorConfig {
//     [property: string]: {
//       [validatableProp: string]: string[]; // ['required', 'positive']
//     };
//   }
//   const registeredValidators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
    // the prototype of the instance we are working with will have a constructor key  which
    // üpints at the constructor function that was used to create  our object
//       ...registeredValidators[target.constructor.name],
//     [propName]: ['required']
//     };
//     console.log(registeredValidators);
//   }

//   function PositiveNumber(target: any, propName: string) {
//          registeredValidators[target.constructor.name] = {
//            ...registeredValidators[target.constructor.name],
//            [propName]: ['positive']
//          };
//          console.log(registeredValidators);

//       }
    

    //   function Required(target: any, propName: string) {
    //       registeredValidators[target.constructor.name] = {
    //           ...registeredValidators[target.constructor.name],
    //           [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 
    //           'required']
    //       };
    //       console.log(registeredValidators);
    //     }
          // Since we don't want to replace the values in the validators.Course.price array by '
// positive', but we want to add 'positive' to the existing price validators, we make 
// a copy of that array using the spread operator, add the new item, and recollect all items with [].

// With ? we make sure that we don't get an error if we try to access price on a probably non-existent
//  Course object, and with ?? we create an empty array in case there is not yet a validators.Course.price 
//  array.
      
    //   function PositiveNumber(target: any, propName: string) {
    //       registeredValidators[target.constructor.name] = {
    //           ...registeredValidators[target.constructor.name],
    //           [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    //       };
    //   }

    
// function validate(obj: any) {
//     const objValidatorConfig = registeredValidators[obj.constructor.name];
//     if (!objValidatorConfig) {
//       return true;
//     }
//     let isValid = true;
//     for (const prop in objValidatorConfig) {
//       for (const validator of objValidatorConfig[prop]) {
//         switch (validator) {
//           case 'required':
//             isValid = isValid && !!obj[prop];
            // !!obj[prop] overall should be 'true' if input is not empty and 'false' if input is empty. 
// To check if it is empty or not we will  do !obj[prop] 

// case 1: if input have no value then  !obj[prop]  will return true, 
// but the validation is false , so we need to make it false by !true;

// case 2: if input is not empty then !obj[prop] will return false,
//  which means there is some value in it. Hence, we need to make validation true, 
//  so we need to do !false  to make it true
//             break;
//           case 'positive':
//             isValid = isValid && obj[prop] > 0;
//             break;
//         }
//       }
//     }
//     return isValid;
//   }

//here another solution to be sure that add more than one streng to the array 
const config: { [input: string]: string[] } = {};
 
const addValidator = (input: string, type: string) => {
  config[input] = config[input] 
    ? [...config[input], type] 
    : [type];
}
 
const Required = (_: any, input: string) => addValidator(input, 'required');
const Maxlength = (_: any, input: string) => addValidator(input, 'maxlength');
const Positive = (_: any, input: string) => addValidator(input, 'positive');
 
const validate = (course: any) =>  
  Object.entries(config).every(([input, types]) => 
    types.every(type => 
      type === 'required' && course[input] || 
      type === 'positive' && course[input] > 0 ||
      type === 'maxlength' && course[input].length < 5
    )
  )

class Course {

    @Required @Maxlength title: string;
    @Positive @Required  price: number;
 
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
 
}

const courseform = document.querySelector("form")!;

courseform.addEventListener("submit", event =>{
const titleEL = document.getElementById("title") as HTMLInputElement;
const priceEl = document.getElementById("price") as HTMLInputElement;

const titleV = titleEL.value;
const priceV = parseInt(priceEl.value);
    event.preventDefault();
    const course1 = new Course(titleV, priceV);

    if (!validate(course1)) {
             alert('Invalid input, please try again!');
             return;
           }
    console.log(course1);
 })
  


// class Course {
//     @Required
//     title: string;
//     @PositiveNumber
//     price: number;
//     constructor(t: string, p: number){
//         this.title = t;
//         this.price = p;

//     }
// }



//
// const registeredValidators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
//     };
// }
// function PositiveNumber(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
//     };
// }


let arr2 : (number | ( string | ( boolean[]))[])[]= [1,2,3, ["saed", "asd", [true, false]]];
// const config: { [input: string]: string[] } = {};
 
// const addValidator = (input: string, type: string) => {
//   config[input] = config[input] 
//     ? [...config[input], type] 
//     : [type];
// }
 
// const Required = (_: any, input: string) => addValidator(input, 'required');
// const Maxlength = (_: any, input: string) => addValidator(input, 'maxlength');
// const Positive = (_: any, input: string) => addValidator(input, 'positive');
 
// const validate = (course: any) =>  
//   Object.entries(config).every(([input, types]) => 
//     types.every(type => 
//       type === 'required' && course[input] || 
//       type === 'positive' && course[input] > 0 ||
//       type === 'maxlength' && course[input].length < 5
//     )
//   )

// class Course {

//   @Required @Maxlength title: string;
//   @Required @Positive price: number;

//   constructor(title: string, price: number) {
//     this.title = title;
//     this.price = price;
//   }

// }