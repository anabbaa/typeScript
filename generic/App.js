"use strict";
/*
generic is to define a type that we do not know its related types what they are
*/
const arr = [];
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved done");
    }, 500);
});
// generic function made by us
/*
in teh unter example if it give them object type so typescript cannot reach property because it does
know which types of everx property for each object with t and t wetill typescript we will give obja
type insertuction t which will be any type  and with t and u i tell typescript that every object
will be in different type but i dont care about the type itself and also you can add this generic
to the varaible but at that time type script will complain
-constains you can constrain generic for any type your own type or union type
*/
function merge(obja, objb) {
    return Object.assign(obja, objb);
}
;
const obj1 = merge({ name: "asd" }, { age: 22 });
const obj2 = merge({ name: "wer", hoppies: ["sport", "reading"] }, { age: 33 });
console.log(obj2);
function countAndDescription(element) {
    let descriptionText = "you have got no elemnts";
    if (element.length === 1) {
        descriptionText = "you have got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = `you have got ${element.length}`;
    }
    return [element, descriptionText];
}
;
console.log(countAndDescription("hi there"));
console.log(countAndDescription(["saed", "rana"]));
function objectKey(obj, key) {
    return `value ${obj[key]}`;
}
;
console.log(objectKey({ name: "max" }, "name"));
//class
class DataStorage {
    constructor() {
        this.data = [];
    }
    // private  data : (string | boolean | number) = []; this means array
    //shoud be mix not either
    addData(item) {
        if (this.data.push(item) === -1) {
            return;
            //this code to deal with reference data
        }
        this.data.push(item);
    }
    ;
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addData("max");
textStorage.addData("alex");
console.log(textStorage);
textStorage.removeItem("max");
console.log(textStorage);
let numberStorae = new DataStorage();
// with object
let objectStorage = new DataStorage();
let myObjec = { name: "max" };
objectStorage.addData(myObjec);
objectStorage.addData({ name: "ahmed" });
objectStorage.addData({ name: "ali" });
objectStorage.removeItem({ name: "ali" });
function createCourseGoal(title, description, completeUntill) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntill = completeUntill;
    return courseGoal;
}
const aarra = ["asd", "eee"];
