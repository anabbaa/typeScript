"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const lodash_1 = __importDefault(require("lodash"));
const product_model_1 = require("./product.model");
const class_validator_1 = require("class-validator");
console.log(lodash_1.default.shuffle([1, 2, 3]));
let products = [
    { title: "carbet", price: 444 },
    { title: "tv", price: 222 }
];
const loadedProducts = (0, class_transformer_1.plainToClass)(product_model_1.Product, products);
for (const pro of loadedProducts) {
    console.log(pro.getInformation());
}
;
const newProd = new product_model_1.Product("", -55);
(0, class_validator_1.validate)(newProd).then((errors) => {
    if (errors.length > 0) {
        console.log(errors);
    }
    else {
        console.log("you are great");
    }
});
console.log(newProd.getInformation());
