abstract class Department {
    // name: string;
    protected employees: string[]= [];
    constructor(private name: string, public readonly id: string){
        // this.name =n;
    }
    abstract describe(this: Department): void;//for this this as a prameter iam assuring that  this name inside 
        //describe should always refer to an instance thatbased on department calss so know i 
        //should have an error for accountingcopy but no error for accountingcopy1 because later
        //has name paroperty which this refers to
        // console.log(`Departement: ${this.name}`);
    
    addEmployees(employee: string){
        this.employees.push(employee);
    }
    printEmployeesInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }

}
// const accounting = new Department("accounting","1"); 
//abstracted class cannot be instinated
// const accountingCopy = {describe: accounting.describe};
// const accountingCopy1 = {name: "saed", describe: accounting.describe};

// accountingCopy.describe();
// accountingCopy1.describe();
// accounting.addEmployees("max");
// accounting.addEmployees("asd");
// accounting.printEmployeesInfo();

class ItDepartment extends Department{
    /*
    this class will have only one instance by adding private to its constructor this meaans it is
    accessible only inide this class i will get instance from it by a static method which can be 
    called by the class itself
    */
    private static instance: ItDepartment;
    /*
    this code means i have a static property which is accessible on the class itself but only
    from inside the class by adding word private and the value we store there will be of type
    the class itself
    */

    private constructor(id: string , public admins: string[]){
        super(id, "IT");
    };
    static getInstance (){
        if(ItDepartment.instance){
            return this.instance;
        }
        this.instance = new ItDepartment("22", []);
        return this.instance;
    }
    
    describe(){
        console.log(`id depatment id is ${this.id}`);
    }
    }

// const accountingIt = new ItDepartment("2",["alex"]);
const accountingIt = ItDepartment.getInstance();
console.log(accountingIt);


class AccountingDepartment extends Department{
    static firstYear = 2020;
    private lastReport: string;
    constructor(id: string, private reports: string[]){
        super(id, "it");
        this.lastReport = reports[0];
    };
    describe(){
        console.log(`accounting depatment id is ${this.id}`);
    }
   
    addReports(text: string){
        this.reports.push(text);
        this.lastReport = text;

    }
    set mostReportAdded (value: string){
        if (!value){
            throw new Error("please write something")
        }
      

        this.addReports(value);
    };
    get data(){
            return this.lastReport;
    }
    static createEmployee(name: string){
        return {name: name};
    }
    getReports(){
        console.log(this.reports);
    }
    addEmployees(name: string){// when you overwrite method so you should be give modifier to variable
        //which you want to use here protect instead of private because privat means it is using only
       // in class department
       if (name === "alex"){
        return;
       }
       else{
        this.employees.push(name);
       }
    }
};
const accountingItDep = new AccountingDepartment("2", ["saeed"]);
accountingItDep.addReports("something gets wrong");
accountingItDep.getReports();
accountingItDep.mostReportAdded = "mohammed";
const employee = AccountingDepartment.createEmployee("nancy");
/*static access by class directly without new word and be in mind thar when you added static
word for the class you cannot use it in constructor by this word only by the name of the class
for example Department.firstYear and constructor cannot have static word*/
console.log(employee, AccountingDepartment.firstYear);
accountingItDep.addEmployees("sa");
console.log(accountingItDep.data);
/*
get needs return and both execute without parnthesis 
*/