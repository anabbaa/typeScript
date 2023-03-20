/*you can implement an interface to a class you can implement more than oneseprated by a comma
this means that aclass can be adhere to this interface
- i can add readonly property to a varible in interface but not private or public and i do
not need to rewrite readonly in the class aslo it is a difference betwenn custom type and 
an interface the first cannot use readonly property
- you can also extends interface from another and you can extends more than one interface 
seprated by comma
- you can add optional variable or parameter for both interfaces and classe by adding 
? after it if you implemnt an interface to an class you should add ? in both interface and class
and you can add? after parameter in constructor or default value and you can have an optional 
value in an interface and not in a class
and in classes you should add conditions 
*/
interface Named{
    name?: string;
}
interface Person extends Named {
    age: number;
    greet(phrase: string): void;
};
let user1 : Person;
user1 = {
    name: "ahmed",
    age: 23,
    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
};
user1.greet("hi");

interface Greetable {
    name?: string;
    greet(phrase: string): void;
};
class Character implements Greetable{
    name?: string;
    constructor(n: string){
        if(n){
            this.name = n;
        }

    };
    greet(phrase: string){
        if(this.name){
            console.log(`${phrase} ${this.name}`);

        }
        else{
            console.log(`${phrase} ${this.name}`);

        }
        console.log("hi");
        
    };
};
let user2 : Greetable;
user2 = new Character("");
user2.greet("hi");
/*
you can use interface instead of type function 
*/
type Affin = (n1:number, n2: number ) => number;
let add: Affin;
add = (n1: number, n2: number)=>{
    return n1 + n2;

}

interface Aff {
    (n1: number, n2: number) : number;
}
let add1: Aff;
add1 = (n1:number, n2:number)=>{
    return n1 + n2;
}
//polymorphism 
class Player {
    constructor(public name: string){}

        attack(): void {
            console.log("iam attacking ")

        }
    
}
class Amazon  extends Player{
    constructor(name: string, spears: number){}
    

} 