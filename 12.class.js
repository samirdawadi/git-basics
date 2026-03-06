//class le create garni / return garni obj ko shape k hunxa or shape or method kk hunxa vanera define garni lai blueprint vaninxa

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

// let Student={
//     name:"user",
//     email:"user123",
//     password:"453",
//}

// class Student{

//     name;
//     email;        yo name , email ra pass constructor vanda mathi declare gareko chai mathi student obj ko key haru matra declare gareko jasto ho
//     password;

//     constructor(name,email,password){
//         this.name=name;          this.name vaneko chai mathi declare gareko name ho ani = name vaneko chai parameter ma value pass garnalako ho . yedi yo public ho vani mathi name declare nagari sidai yei line matra leknna milca . yo public xa so mathi nalekhda ne farak pardaina, tara yedi private i.e  # bata kei declare xa vani yeha this.#.... = ... vanera lekhna partheo
//         this.email=email;
//         this.password=password;     yedi yo pass mathi declare garda #password theo vani yeha pani this.#password = password nai huna parxa

//     }

//     getData(){
//         return this.name;
//     }

// }

//const ram=new Student()         yo matra vaneko chai Student class ko constructor lai call gareko jasto ho ani talako line le chai value pass garxa constructor ma
// const ram=new Student("Ram","ram23@gmail.com","324234","4353","Management","34");
// console.log(" Your name is:"+ram.getData());

//!inheritance
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

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static mul(a, b) {
    return a * b;
  }
}
const calc1 = new Calculator();
console.log(Calculator.add(10, 5));
console.log(Calculator.sub(10, 5));
console.log(Calculator.mul(10, 5));

//getter and setter
