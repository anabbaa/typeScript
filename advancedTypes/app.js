"use strict";
var _a;
let el = {
    name: "saed",
    priviliges: ["create-server"],
    startDate: new Date()
};
//guard d
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.toString() + b.toString();
    }
}
;
function printEmployee(employee) {
    if ("priviliges" in employee) {
        console.log(employee.priviliges);
    }
    ;
    if ("startDate" in employee) {
        console.log(employee.startDate);
    }
    ;
}
;
printEmployee(el);
class Car {
    drive() {
        console.log("driving");
    }
    ;
}
;
class Truck {
    drive() {
        console.log("driving a truck");
    }
    loadCargo(a) {
        console.log("Loading cargo" + a);
    }
}
let v1 = new Car();
let v2 = new Truck();
function useVehicle(Vehicle) {
    if (Vehicle instanceof Truck) {
        Vehicle.loadCargo(1000);
    }
    ;
}
;
useVehicle(v1);
let speed;
function animalSpeed(animal) {
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log(`speedis` + speed);
}
animalSpeed({ type: "horse", runningSpeed: 19 });
//type casting
let val = document.getElementById("anything");
console.log(val);
const errorBlog = {
    "email": "asd²sss.com",
    "id": "1224"
};
function moveAction(bt) {
    console.log(`${bt.up}, ${bt.dowń}, ${bt.right}, ${bt.left}, ${bt.las}`);
}
const btt = moveAction({ up: "uo", dowń: "down", right: "right", left: "left", las: true });
console.log(btt);
let user1 = {
    id: 1,
    name: "ahmed",
    country: "syria",
    sayHello() {
        return `hello ${user1.name}`;
    },
    sayWelcome: () => {
        return `hello ${user1.country}`;
    },
    getDouble(n) {
        return n * n;
    }
};
console.log(user1.id);
console.log(user1.name);
console.log(user1.country);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(2));
/*
by the wa you can only add one parameter and in the function gives the second parameter ?
*/
function add1(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && b === "string") {
        return a.toString() + b.toString();
    }
    ;
}
const result1 = add1("may", "saed");
let myObj = {
    name: "max",
    id: 123,
    data: {
        add: "asd",
        job: "teacher"
    }
};
console.log((_a = myObj === null || myObj === void 0 ? void 0 : myObj.data) === null || _a === void 0 ? void 0 : _a.job);
//nullish coalescing
let userinput = null;
let newuserInput = userinput || "default";
/*
so now i will have default this approach will work with nullor indefined so if i have
for example falsy value as empty string the default will return so if you want to stay in
userinput so the solution will be
*/
let userInput = null;
let newuserInput1 = userInput !== null && userInput !== void 0 ? userInput : "defaule";
//later approach will work only with null or undefined value otherwise it will return userinput
