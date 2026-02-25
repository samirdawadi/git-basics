// const fetchUser= ()=>{
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 let error=false;
//                 if(error){      
//                     reject("error came")
//                 }
//                 else{
//                     resolve({name:"samir",id:1})
//                 }
//             },2000)
//     })
// }


// const fetchPost=(user)=>{
//     return new Promise((resolve,reject)=>[
//         setTimeout(()=>{
//             let error=false;
//             if(error){
//                 reject("error while fetching userpost")
//             }
//             else{
//                 resolve([
//                   { id: 1, userId: user.id, title: "post 1" },
//                  { id: 2, userId: user.id, title: "post 2" },
//                 ])
//             }
//         },1000)

//     ])
// }


// const fetchComment =(post)=>{
//     return new Promise((resolve,reject)=>{
//         let error=false;
//         if(error){
//             reject("error occured")
//         }
//         else{
//             resolve([{ id: 1, userId: post.id, title: "comment 1" },
//                      { id: 2, userId: post.id, title: "comment 2" },
//                     ])
//         }
//     })
// }


// fetchUser().then((data)=>[
//     console.log(data)
// ]).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("executed anyway")
// })


// fetchPost({id:1}).then((posts)=>{
//     console.log(posts)
// }).catch((error)=>{
//     console.log(error);
// })




// fetchUser()
// .then((user)=>{
//     console.log(user)
//     fetchPost()
//     .then((posts)=>{
//         console.log(posts)
//         fetchComment((posts[0]))
//         .then((cmts)=>{
//             console.log(cmts)
//         })
//     })
//         .catch((error)=>{
//         console.log(error)
        
//         .catch((error)=>{
//             console.log(error)
//         })
//     })
// })
// .catch((error)=>{
//     console.log(error)
// })




//  fetch('https://jsonplaceholder.typicode.com/todos/1').
//  then((response)=>{
//     // console.log(response);    //yesle hamlai nabujhni data dintheo
//    return response.json()  
//  })       
//   .then((data)=>{               
//     console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err)
//   })



const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {            
        reject({ message: "User fetch failed" });
      } else {
        resolve("fetch user");
      }
    }, 2000);
  });
};


const fetchPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {            
        reject({ message: "User Post failed" });
      } else {
        resolve("fetchpost");
      }
    }, 2000);
  });
};


const fetchComment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {            
        reject({ message: "User Comment failed" });
      } else {
        resolve("fetchcomment");
      }
    }, 2000);
  });
};


// const fetchData = async()=>{
// try {
//   const user=await fetchUser();
//   console.log(user);
//   const error=new Error("new Error")   //serially execute hunca fetchuser execute vayesi 
//   console.log(error)
//   const data=await fetchPost();
//   console.log(data);
//   const cmts=await fetchComment();
//   console.log(cmts);
// } 
// catch (error) 
// {
//   console.log(error)
// }
// }

const fetchData = async()=>{
try {
  const user=await fetchUser();
  console.log(user);
  const error=new Error("new Error")
  if(error)
    {
      throw error
    } 
  console.log(error)
  const data=await fetchPost();
  console.log(data);
  const cmts=await fetchComment();
  console.log(cmts);
} 
catch (error) 
{
  console.log(error.message)   
}
}

fetchData()