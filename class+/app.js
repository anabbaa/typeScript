"use strict";
;
let user1;
user1 = {
    name: "ahmed",
    age: 23,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
user1.greet("hi");
;
class Character {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    ;
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log(`${phrase} ${this.name}`);
        }
        console.log("hi");
    }
    ;
}
;
let user2;
user2 = new Character("");
user2.greet("hi");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let add1;
add1 = (n1, n2) => {
    return n1 + n2;
};
