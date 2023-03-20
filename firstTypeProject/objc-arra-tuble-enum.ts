const data : {
    name: string;
    age: number;
    //here if i want differen types in an array so i will give it type any
    title: string[];
    address : {
        add1: string;
        add2: string;
    }
    } = {
    name: "ahmed",
    age: 22,
    title: ["as", "we"],
    address: {
        add1: "erttt",
        add2: "errr",
    }
    }
    
    // const person: {
    //   name: string;
    //   age: number;
    // } = {
    
        const person: {
            name: string;
            age: number;
            hobbies: string[];
            //here i define tuple type
            role: [number, string];
          } = {
            name: 'Maximilian',
            age: 30,
            hobbies: ['Sports', 'Cooking'],
            role: [2, 'author']
          };
          
          // person.role.push('admin');
          //typescript cannot find the proplem of tuple and it push to it
          // person.role[1] = 10;
          
          // person.role = [0, 'admin', 'user']; here it will understand it is tuple
          
          let favoriteActivities: string[];
          favoriteActivities = ['Sports'];
          
          console.log(person.name);
          
          for (const hobby of person.hobbies) {
            console.log(hobby.toUpperCase());
          }
            // console.log(hobby.map()); // !!! ERROR !!!
    
    //  enurm : it is number with human values
    // this a way to define enurm in vanilla javascript
    // const ADMIN = 0;
    // const READ_ONLY = 1;
    // const AUTHOR = 2;
    /* by default number starts by zero you can give for the first one any value for example 5 then
    the 6 an so on and you can give every one of them any value you want
    */
    enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
    
    const personEnurm = {
      name: 'Maximilian',
      age: 30,
      hobbies: ['Sports', 'Cooking'],
      role: Role.ADMIN
    };
    
    if (personEnurm.role === Role.AUTHOR) {
      console.log('is author');
    }