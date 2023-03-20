/*
typescript: it is a powerful complier which you run over your code to compile your typescript
code into javascript code 
- question how it does it to javascript? - it complies these new features to javascript workaround
so it is nicer code
- idd types - discover errors
- we can use next generation javascript features which can write and use in typescript and then 
they will get complied down to javascript code to workarounds even work in older browsers
*/
function add (num1 : number, num2: number){
    return num1 + num2;
}
const  results = add(1, 3);
// here javascript solution
function add1(num1, num2){
    if (typeof num1 == "number" && typeof num2 == "number" ) {
return num1 + num2;
    }
}

function add3 (num1: number, num2: number , showResult: boolean, phrase: string){
    const result = num1 + num2;
    if(showResult){
        console.log(phrase + result);
    }
    else{
        return num1 + num2;
    };
};
/*
- here i dont need to define type ther is something called in typescript called interference 
typescript can alone understand containesr type  so number1 typescript undrstand it is anumber
because we initialize it with a number and by const it tells which number it is with let typescript
still said it is number but it didnot know which number it is not a good practise to define its type
only of we did not have value for it for example
nmer1; here write number type 
num2 = 3; here do not write the type

*/
const number1 = 3;
const number2 = 5.8;
const printResult = true;
const resultPhrase = "result is";
const result1 = add3(number1, number2, printResult, resultPhrase);
console.log(result1);