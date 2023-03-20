"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(target) {
    console.log("loggong");
    console.log(target);
}
class Person {
    constructor() {
        this.name = "Max";
        console.log("creating person object");
    }
}
let per1 = new Person();
console.log(per1);
function Logged(st) {
    return function (target) {
        console.log(st);
        console.log(target);
    };
}
let Person1 = class Person1 {
    constructor() {
        this.name = "may";
        console.log("creating object");
    }
};
Person1 = __decorate([
    Logged("from per2")
], Person1);
let per2 = new Person1();
console.log(per2);
function Logged1(template, hookId) {
    return function (_) {
        let hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
let Person2 = class Person2 {
    constructor() {
        this.nam = "may";
        console.log("creataing object");
    }
};
Person2 = __decorate([
    Logged1("<h1>hi there</h1>", "app")
], Person2);
let per3 = new Person2();
console.log(per3);
function Logg(template, hookId) {
    return function (constructor) {
        let hookEl = document.getElementById(hookId);
        let per = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.textContent = per.name;
        }
    };
}
let Person3 = class Person3 {
    constructor() {
        this.name = "max";
        console.log("creating object");
    }
};
Person3 = __decorate([
    Logg("<h1></h1>", "app")
], Person3);
let per4 = new Person3();
console.log(per4);
function Log(target, propertyName) {
    console.log(target);
    console.log(propertyName);
}
function Log2(target, name, descriptor) {
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, decerator) {
    console.log(target);
    console.log(name);
    console.log(decerator);
}
function Log4(target, name, position) {
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("price should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price + (1 * tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
let pro1 = new Product("cup", 22);
console.log(pro1);
function withTemplate(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                let hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.textContent = this.name;
                }
            }
        };
    };
}
let Person4 = class Person4 {
    constructor() {
        this.name = "saed";
        console.log("creating object");
    }
};
Person4 = __decorate([
    withTemplate("<h1>hi web </h1>", "web")
], Person4);
let per5 = new Person4();
function AutoBind(_, _2, decerator) {
    const originalDescriptor = decerator.value;
    const newDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const newR = originalDescriptor.bind(this);
            return newR;
        }
    };
    return newDescriptor;
}
class Printer {
    constructor(m) {
        this.message = "this works";
        this.message = m;
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
let print1 = new Printer("this work");
const sbutton = document.querySelector("button");
sbutton.addEventListener("click", print1.showMessage);
const config = {};
const addValidator = (input, type) => {
    config[input] = config[input]
        ? [...config[input], type]
        : [type];
};
const Required = (_, input) => addValidator(input, 'required');
const Maxlength = (_, input) => addValidator(input, 'maxlength');
const Positive = (_, input) => addValidator(input, 'positive');
const validate = (course) => Object.entries(config).every(([input, types]) => types.every(type => type === 'required' && course[input] ||
    type === 'positive' && course[input] > 0 ||
    type === 'maxlength' && course[input].length < 5));
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required,
    Maxlength
], Course.prototype, "title", void 0);
__decorate([
    Positive,
    Required
], Course.prototype, "price", void 0);
const courseform = document.querySelector("form");
courseform.addEventListener("submit", event => {
    const titleEL = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const titleV = titleEL.value;
    const priceV = parseInt(priceEl.value);
    event.preventDefault();
    const course1 = new Course(titleV, priceV);
    if (!validate(course1)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(course1);
});
let arr2 = [1, 2, 3, ["saed", "asd", [true, false]]];
//# sourceMappingURL=App.js.map