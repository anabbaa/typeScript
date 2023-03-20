function add2(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    ;
    return result;
}
;
var number2 = add2(2, 6);
var data1 = add2("ahmed", " best");
console.log(number2);
console.log(data1);


