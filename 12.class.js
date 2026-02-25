// let user1={
//     name:"user",
//     email:"user123",
//     password:"",

//     getname(){
//         const func =()=>{
//             console.log(this);
//             return this.name;
//         };

//         return this.name;
//     }
// }
// console.log(user1.name);
// console.log(user1.email);


// class Student{

//     name;
//     email;
//     password;
  

//     constructor(name,email,password){
//         this.name=name;
//         this.email=email;
//         this.password=password;
       
//     }

//     getData(){
//         return this.name;
//     }

// }

// const ram=new Student("Ram","ram23@gmail.com","324234","4353","Management","34");
// console.log(" Your name is:"+ram.getData());


// class User extends Student{                                             //inheritance 
//     constructor(name,email,password,roll,phone,faculty){
//     super(name,email,password);                                        //calling parent class constructor
//     this.roll=roll;
//     this.phone=phone;
//     this.faculty=faculty;
// }
// }

// const user1=new User("hari","hari34@gmail.com","3242",32,9812312,"BCT");
// console.log(user1);



//static


//without using static keyword


// class Calculator{

//     add(a,b){
//         return a+b;
//     }

//      sub(a,b){
//         return a-b;
//     }

//      mul(a,b){
//         return a*b;
//     }
// }
// const calc1=new Calculator();
// console.log(calc1.add(10,5));
// console.log(calc1.sub(10,5));
// console.log(calc1.mul(10,5));


//after using static keyword we donot need to create obj

class Calculator{

    static add(a,b){
        return a+b;
    }

    static sub(a,b){
        return a-b;
    }

     static mul(a,b){
        return a*b;
    }
}
const calc1=new Calculator();
console.log(Calculator.add(10,5));
console.log(Calculator.sub(10,5));
console.log(Calculator.mul(10,5));




//getter and setter