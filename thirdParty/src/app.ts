import "reflect-metadata";
import { plainToClass } from "class-transformer";// it is mrthod needs two parameter claass which 
//you wanted conver to the second is data you want to transform to 
/*
-for typescript understand library based on the js type @types/nameo of the libraray

*/
import _ from "lodash";
import {Product} from "./product.model";
import { validate } from 'class-validator';

console.log(_.shuffle([1, 2, 3]));
//declare to understand global variables from html file
// declare let gloobal: string;
// console.log(gloobal);
//class transformer
//you need to install class-transform and reflect-metadata

let products = [
    {title: "carbet", price: 444},
    {title: "tv", price: 222}
]

// //first soöution without class - transformation library

// let newProduct = products.map((pro=>{
//     return pro = new Product(pro.title, pro.price);
// }));
// for (const pro  of newProduct ){
//     console.log(pro.getInformation());
// };

//second solution
const loadedProducts = plainToClass(Product, products);
 for (const pro  of loadedProducts ){
     console.log(pro.getInformation());
 };

 //class - validtor which works on the concept of decerators
const newProd = new Product("", -55);
validate(newProd).then((errors)=>{
    if (errors.length > 0){
        console.log(errors);

    }
    else {
        console.log("you are great");
    }
})

console.log(newProd.getInformation());

