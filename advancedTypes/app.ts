
type Admin = {
    name: string;
    priviliges: string[];
};
type Employee = {
    name: string;
    startDate: Date;
};
type ElevatedEmployee = Admin & Employee;

let el: ElevatedEmployee = {
    name: "saed",
    priviliges: ["create-server"],
    startDate: new Date()
};
type Countable = number | string;
type Numeric = number | boolean;
type Universal = Countable & Numeric;
//guard d

function add(a: Countable, b: Countable){
    if (typeof a === "string" && typeof b === "string"){
        return a.toString() + b.toString();
    }
};
type UnknownEmployee = Admin | Employee;

function printEmployee(employee: UnknownEmployee){
    if("priviliges" in employee){
        console.log(employee.priviliges);
    };
    if("startDate" in employee){
        console.log(employee.startDate);
    };
};
printEmployee(el);

class Car {
    drive(){
        console.log("driving");

    };
};

class Truck {
    drive(){
        console.log("driving a truck");
    }
    loadCargo(a: Number){
        console.log("Loading cargo" + a);

    }


}
type Vehicle = Car | Truck;

let v1 = new Car();
let v2 = new Truck();

function useVehicle(Vehicle: Vehicle){
    if(Vehicle instanceof Truck){
        Vehicle.loadCargo(1000);
    };
};
useVehicle(v1);
//discriminated guard types

interface Bird {
    type: "bird";
    flyingSpeed: number;
}
interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;
let speed;
function animalSpeed(animal: Animal){
    switch(animal.type){
        case "bird":
            speed = animal.flyingSpeed;
            break;
            case "horse":
                speed = animal.runningSpeed;

    }
    console.log(`speedis` + speed);
}
animalSpeed({type: "horse", runningSpeed: 19});

//type casting
let val = document.getElementById("anything")! as HTMLInputElement;
console.log(val);
//index type
/*here you have some limit so you cannot add another property with another type so id
must be string
*/
interface ErrorInterfaceContainer {
    [prop: string]: string;
    id: string;
}
const errorBlog : ErrorInterfaceContainer = {
    "email": "asd²sss.com",
    "id": "1224"
}

type Button = {
    up: string,
    dowń: string,
    right: string,
    left: string
}
type Last = Button & {
    las: boolean
}
function moveAction(bt: Last){
    console.log(`${bt.up}, ${bt.dowń}, ${bt.right}, ${bt.left}, ${bt.las}`)

}
const btt = moveAction({up: "uo", dowń: "down", right: "right", left: "left", las: true})
console.log(btt);

interface User {
    id: number;
    name: string;
    country: string;
    sayHello(): string;
    sayWelcome: ()=> string;
    getDouble(num: number): number
}
let user1 : User = {
    id: 1,
    name: "ahmed",
    country: "syria",
    sayHello() {
    return `hello ${user1.name}`;
    },
    sayWelcome: ()=>{
        return `hello ${user1.country}`;
        
    },
    getDouble(n){
        return n * n;

    }
}
console.log(user1.id);
console.log(user1.name);
console.log(user1.country);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(2));

//function overload 
/*the proplem typescript does not knoww if the result of this function is number or a string
in its mind it is combine so i nee function overload
*/

type Combine = string | number;
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
/*
by the wa you can only add one parameter and in the function gives the second parameter ?
*/


function add1(a: Combine, b:Combine) { 
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else if (typeof a === "string" && b === "string"){
        return a.toString()  + b.toString(); 
       };
}
const result1 = add1("may", "saed");

let myObj = {
    name: "max",
    id: 123,
    data: {
        add: "asd",
        job: "teacher"
    }
}
console.log(myObj?.data?.job);
//nullish coalescing
let userinput = null;
let newuserInput = userinput || "default";
/*
so now i will have default this approach will work with nullor indefined so if i have 
for example falsy value as empty string the default will return so if you want to stay in 
userinput so the solution will be
*/
let userInput = null;
let newuserInput1 = userInput ?? "defaule";
//later approach will work only with null or undefined value otherwise it will return userinput

