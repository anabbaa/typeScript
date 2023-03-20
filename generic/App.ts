/*
generic is to define a type that we do not know its related types what they are
*/ 
const arr : Array<string> = []; 

const prom  : Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("resolved done");

    }, 500)
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

function merge <T extends object, U extends object> (obja: T , objb: U ){
    return Object.assign(obja, objb);

};
const obj1 = merge<{name: string}, {age: number}>({name: "asd"}, {age: 22});
const obj2 = merge({name: "wer", hoppies: ["sport", "reading"]}, {age: 33}) 
console.log(obj2);
/*
in the unter exampe we do not care for the type of element but we wants to be sure that it has length
property
*/
interface Lengthy {
    length: number;
}

function countAndDescription<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = "you have got no elemnts";
    if (element.length === 1){
        descriptionText = "you have got 1 element";
    }
    else if(element.length > 1){
        descriptionText = `you have got ${element.length}`;
    }
    return [element , descriptionText];
};
console.log(countAndDescription("hi there"));
console.log(countAndDescription(["saed", "rana"]));

function objectKey<T extends object, U extends keyof T>(obj: T, key: U){
    return `value ${obj[key]}`;

};
console.log(objectKey({name: "max"}, "name"));

//class

class DataStorage <T>{
    private  data : T[] = [];
        // private  data : (string | boolean | number) = []; this means array
        //shoud be mix not either
        // private  data : string[] | boolean[] | number[] = []; here is either
    addData(item: T){
        if(this.data.push(item) === -1){
            return;
            //this code to deal with reference data

        }
        this.data.push(item);

    };
    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1);

    }
    getItem(){
        return [...this.data];
    }
}
let textStorage = new DataStorage<string>();
textStorage.addData("max");
textStorage.addData("alex");
console.log(textStorage);
textStorage.removeItem("max");
console.log(textStorage);
let numberStorae = new DataStorage<number | string>();
// with object
let objectStorage = new DataStorage<object>();
let myObjec = {name: "max"};
objectStorage.addData(myObjec);
objectStorage.addData({name: "ahmed"});
objectStorage.addData({name: "ali"});
objectStorage.removeItem({name: "ali"});

// partial type
// interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntill: Date; 
// }
// function createCourseGoal(title: string, description: string, completeUntill: Date): CourseGoal{
//     return {title: title, description: description, completeUntill: completeUntill};

// }
/*
let us we want to return in another way to have an empty variable then we will edit it first we
will have the issue of coursegoal did not see title because it is empty object i will solve
this issue by add type to coursegoal of CourseGoal then it complained about empty object because
courseGoal type have three values then i use partial at the end it tells typescript that 
coursegoal objectwil be courseobjecttype but change its property will be optional i still 
have an issue i cannot return this because it is partial type so i will add as coursGoal 
*/
interface CourseGoal {
    title: string;
    description: string;
    completeUntill: Date; 
}
function createCourseGoal(title: string, description: string, completeUntill: Date): CourseGoal{
    let courseGoal:Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntill = completeUntill;
    return courseGoal as CourseGoal;
}

const aarra : Readonly<string[]> = ["asd", "eee"];

