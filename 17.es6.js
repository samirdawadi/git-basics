//!ES6 (ECMAScript 2015) vaneko JavaScript ko 6th version ho jun 2015 ma release vako ho.
//Yo version le JavaScript ma dherai new features add garyo jun le code lekhna easy, clean, readable ra powerful banayo.



//!1.let, const /block scope

//!2.template literal
//``

//!3.arrow function

//!4. default parameter

//!5.promises

//!6.async await=>2017

//!7.class

//!8. import / export

//!9. spread and rest operator    [...]

//?spread[...] => expand =>obj/array lai copy garna paryo vani
//obj

// const user ={
//     name:"john",
//     phone:3827487342,

// }
// let john ={
//     email:'john12@gmail.com',
//     ...user                     //user object lai add garna help garxa john obj ma with ... before the user
// }

// let newuser= user
// newuser.name="abc"
// console.log(newuser)
// console.log(user)

// let newuser= {...user} 
// newuser.name="abc"
// console.log(newuser)
// console.log(user)







// const user ={
//     name:"john",
//     phone:3827487342,

// }

// const user2 ={
//     email:"john@gmail.com"

// }


// let newuser= {...user,...user2}  //duita obj combine garna 
// newuser.name="abc"
// console.log(newuser)
// console.log(user)


// const array1=[3,4,5,5]
// const array2=[7,5,3,2]
// let newarray=[...array1, ...array2]
// console.log(newarray);




//! 📦 Spread


// Chocolate pack kholera table ma failaune 🍫
// → ... use gareko spread

//! 📦 Rest

// Table ko sab chocolate jamma garera box ma halne 📦
// → ... use gareko rest



//?rest[...]  => accumulate ...data lai jamma garxa
//User le jati argument dinxa
//Rest le sabai lai ekai array ma jamma garxa



//by using array methods
// const add=(numbers)=>{
//     const sum = numbers.reduce((acc, value) => {
//   return (acc = acc + value);
// }, 0); 
// console.log(sum)
// }

// add([3,5,2,5])



//!using rest . here is ...numbers

// const add=(...numbers)=>{                             //...numbers le value pass gareko lai array ma convert gardinca 
//     const sum = numbers.reduce((acc, value) => {
//   return (acc = acc + value);
// }, 0); 
// console.log("The Sum of the number is",sum)
// }

// add(3,5,2,5)                              //[] yesari data halna pardaina . auto [] yesma haleko jasari pathauxa rest le 



//!10.destructor--array ya Object bata values lai direct variable ma extract garinxa.
//easier way or syntax to access obj/array's properties
//keyname use garera garna parxa


//?before
// const obj ={
//     name:"john",
//     phone:3827487342,

// }

// let name=obj.name;
// let phone=obj.phone;

// console.log(name,phone)


//?after

// const obj ={
//     name:"john",
//     phone:3827487342,
// }
// let{name,phone}=obj       keyname nai use garna parxa here like name ani phone .let name=obj.name    let phone=obj.phone    
// console.log(name,phone)




// const obj ={
//     name:"john",
//     phone:3827487342,
// }
//const newUser={
    // name:"samir"
    // }
// let{name,phone}=obj 
// let{name}=newUser      //mildaina yesto garna kina ki already banyaxa name variable  
// let{name: username}=newUser   //yo name vanya mathi newUser ko key i.e name sangai match huna partheo yedi teslai change garna paryo vani chai : yo use garni ani naya name deni key ko lagi
// console.log(name)
// console.log(username,phone)



// const obj ={
//     name:"john",
//     phone:3827487342
// }
// const newUser={
//     address:"ktm"
// }
// let{name,phone}=obj 
// let{name: username,...rest}=newUser
// console.log(rest)
// console.log(name,phone)


// // const func= (obj)=>{
// //     console.log(obj.name,obj.email)
// // }



// const func=(obj)=>{
//     console.log(obj.name,obj.age)
// }
// func
// (
//     {
//     name:"samir",
//     age:54
//     }
// )





// const func= (name,email)=>{
//     console.log(name,email)
// }

// func({name:"abc",email:"abc@gmail.com"})       //?yo case ma func vitra pathako obj name vanni mathi arg ma save hunxa ani java console.log(name,email) garxau teti bela obj ta auxa name bata tara email chai undefined auxa kinaki tyo name vanni param ma obj pass nai vako xaina .
                                                
// ?ava duitai pass garna chai duita obj banayera garna parca:

// const func=(name,email)=>{
//     console.log(name,email)
// }
// func
// (
//     {
//     name:"samir",
//     age:54
//     },
//     {
//         email1:"sam@gmail.com",
//         email2:"sam2@gmail.com"

//     }
// )
 

//? ajha but yeautai matra obj pathauda teslai sajilo tarika le access garna chai destructor le help garxa yesari:


// const func= ({name,email})=>{   //?yo arg ma name ra email vaneko tala func call garda pass gareko obj ko key ho , like mathi let{name}=obj
//     console.log(name,email)
// }

// func({name:"abc",email:"abc@gmail.com"}) 



// const func= ({name:username,email})=>{
//     console.log(username,email)
// }

// func({name:"abc",email:"abc@gmail.com"}) 







// const array=[23,54,67,343,2342,32424]
// let[a,...other]=array
// console.log(a,other)


// const func= ([name,email])=>{
//     console.log(name,email)
// }

// func(["abc","abc@gmail.com"]) 





//11. enhanced object literal =>  paila hamla object literal ma {} use garera garthim without const a= new classname  ava hamle yesko ni enhanced version :

let name="john"
let password="3423432"
let email="dad@gmail.com"

//paila yesari garyatheo
// let newObj ={
//     name:name,           //name key ma name john halyo testai tala sabai ma
//     email:email,
//     password:password
// }


//after enhanced object literal
let newObj ={
    username:name ,                 //yedi name vanaera declare gareko mathiko variable chai username vanni variable  ma halna paryo vani chai naya key rakhna parxa yesari natra same name of newObj ra mathi declare gareko variable ko same huni  vaye name matra lekhey hunxa
    email,
    password
}
console.log(newObj)



