//! loops
// {}
//! do while
// do{}while(condition)

// let i = 11;
// do {
//   // logic
//   console.log('do while',i);
//   // i = i +1
//   i++;
// } while (i <= 10);

//! while
// while(condition){}

// let j = 11;
// while (j <= 10) {
//   // logic
//   console.log('while',j);

//   j++;
// }

//! for
// for(initialize;condition;inc/dcr){}

// for(let i=0; i<=10 ; i++ ){
//     // logic
//     console.log(i)
// }

//! control tranfer statements
// break , continue 

// for(let i=0; i<=10 ; i++ ){
//     // logic
//     // if(i == 5){
//     //     break;        //5 bata wota print hudaina
//     // }

//      if(i == 5){
//         continue;         //5 bahek aru print hunca 1 2 3 4 6 7 8 9 10
//     }
//     console.log(i)
// }

// print enven number 1-10
for(let i = 0 ; i <=10 ; i++){
    if(i % 2 === 1){                //reamainder 1 vako lai continue ie ignore gardinxa
        continue
    }
    console.log(i)              //0 2 4 6 8 10 auxa kinaki continue le sab odd lai ignore gardinxa
}

// for in
// for of