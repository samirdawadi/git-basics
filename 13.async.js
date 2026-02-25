//sync =>blocking (wait garni)  yeauta task complete nahuni baela samma arko task run hudaina
//async=>non blocking   -- kunai task le badi time ligiraxa vani aru task le wait garera basna pardaina.

// const add =(a,b)=>
// {
//     console.log(a+b);
// };

//add(20,30);



//!Set Timeout  --js ko preddefined method ho jasle async jastai kam garxa

// const timerId = setTimeout(
//   (name, age, c) => {
//     console.log(name, age, c);
//     console.log("processing");
//   },
//   1000,                      //timer ko paxadi chai sabai argument haru ho
//   "John",
//   27,
//   34,
// );
// console.log(timerId);

// clearTimeout(timerId); // clear timer
// console.log(timerId);



//setTimeout(callback,timeout)

// console.log("start");
// const timerId=setTimeout(()=>{
//     console.log("processing");
// },2000);                        //auto execute hunxa call garna pardaina ra garyo vani kati ma execute huni sab detail auaxa

// console.log(timerId);
// clearTimeout(timerId);   //scheduled callback func lai execute huna dedaina.yesle ava mathi 2 sec paxi execute huni "processing" lai o/p ma auna dedaina suruma timerid ma kati sec paxi auxa ani destroyed xa ki xaina vanxa tara yo line le time -1 ani destroyed true i.e "processing " ava execute nai hudaina.
// console.log(timerId);
// console.log("end");





// console.log("start");
// const timerId=setTimeout((name,age)=>{
//     console.log(name,age);
//     console.log("processing");
// },2000,'john',30);

// console.log(timerId);
// clearTimeout(timerId);//clear timer
// console.log(timerId);







//!setInterval
//setInterval(callback,interval)

// let count=0;
// const timerId=setInterval(()=>{
   
//     console.log(count);
//     console.log("processing"); 
    
//     if(count===10){
//     clearInterval(timerId);      //clear garxa output lai count=10 pugesi
//    }
   
//     count+=1;
// },1000);








// const fetchUser=()=>{
//     setTimeout(()=>{
//         console.log("user fetched");
//     },2000);
// };

// const fetchPost=()=>{
//     setTimeout(()=>{
//         console.log("user post fetched");
//     },1000);
// };
 
// fetchUser();    //yeha ava paila fetchpost ececute hunca tara hamle paila fetch user dekhauna parxa ani balla fetch post so tesko lagi callback use garxam
// fetchPost();
// console.log("end");






// const fetchUser=(callback)=>{
//     setTimeout(()=>{
//         console.log("user fetched");
//         callback();
//     },2000);
// };

// const fetchPost=()=>{
//     setTimeout(()=>{
//         console.log("user post fetched");
//     },1000);
// };

// fetchUser(fetchPost);

// console.log("end");






// const a=(callback)=>{
//     setTimeout(()=>{
//         console.log("hello boys:");
//         callback("ram",56);
//     },1000)
// }

// const b=(name,age)=>{
//     setTimeout(()=>{
//         console.log("boys name and age are:");
//         console.log("name is:"+name+"age is :",age)
//     },1000)
// }

// a(b)
// console.log("ended")






const fetchUser=(callback)=>{
    setTimeout(()=>{
        console.log("user fetched");
        callback({name:"john",id:1});
    },2000);
};

const fetchPost=(user)=>{
    setTimeout(()=>{
        console.log(user);
        console.log("user post fetched for user",user.id);
    },1000);
};

fetchUser((user)=>{         //“fetchUser sakine bittikai, user data lai fetchPost ma patha”
    fetchPost(user);
});

console.log("end");






// const fetchUser=(callback)=>{
//     setTimeout(()=>{
//         console.log("user fetched");
//         callback({name:"john",id:1});
//     },2000);
// };

// const fetchPost=(user)=>{
//     setTimeout(()=>{
//         console.log(user);
//         console.log("user post fetched for user",user.id);
//     },1000);
// };

// fetchUser((err,user)=>{
//     if(err){
//         console.log(err);
//         return;                             //else part return garxa. return nalekhi else lekhna ni milxa tala natra
//     }
//     fetchPost(user);
// });

// console.log("end");





// const fetchUser=(callback)=>{
//     setTimeout(()=>{
//         console.log("user fetched");
//         callback(null,{name:"john",id:1});
//     },2000);
// };


// const fetchPost=(user,callback)=>{
//     setTimeout(()=>{
//         console.log(user);
//         console.log("user post fetched for user",user.id);
//         callback(null,[
//             {id:1,userId: user.id,title:"post 1"},
//             {id:2,userId: user.id,title:"post 2"},

//         ]);
//     },1000);
// };

// fetchUser((err,user)=>{
//     if(err){
//         console.log(err);
//         return;      
//     }                       
//     fetchPost(user,(err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data);
//     });
// });

// console.log("end");


// const fetchUser=(callback)=>{
//     setTimeout(()=>{
//         console.log("user fetched");
//         callback(null,{name:"john",id:1});
//     },2000);
// };

// const fetchPost=(user,callback)=>{
//     setTimeout(()=>{
//         console.log(user);
//         console.log("user post fetched for user",user.id);
//         callback(null,[
//             {id:1,userId: user.id,title:"post 1"},
//             {id:2,userId: user.id,title:"post 2"},
//         ]);
//     },1000);
// };

// const fetchComments = (post,callback)=>{
//     setTimeout(()=>{
//         callback(null,[{postId:post.id,id:1,content:"comment 1"}]);
//     })
// }

// fetchUser((err,user)=>{
//     if(err){
//         console.log(err);
//         return;      
//     }                       
//     fetchPost(user,(err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data);
//         //fetch comments
//         fetchComments(data[0],(err,comments)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log("comments fetched");
//             console.log(comments);
//         })
//     });
// });

// console.log("end");



//callback hell -- callback nai callback vako ....... teslai solve garna promise ra async/await use garcau
//pyramid of doom ---call back inc huda pyramid jasto shape bandai janxa

// promise 






























// // sync => blocking
// // async => non-blocking

// const add = (a, b) => {
//     console.log(a + b);
// }

// console.log("start");
// add(1, 2); // add functions or JS nature is sync, it will block the next line until it finishes
// console.log("processing");
// console.log("end");

// // async example
// //! setTimeout
// // setTimeout(calllback, timeout, ...arguments)

// console.log("start");
// const timerId = setTimeout((name, age) => {
//     console.log(name, age);
//     console.log("processing");
// }, 1000, "John", 25);   // this will be executed after 1 second, it is async, it will not block the next line

// console.log("timerId:", timerId); // timerId is a unique identifier for the timer, it can be used to clear the timer

// // clearTimeout(timerId); // this will clear the timer, it will not execute the callback function So, if you want to cancel the timer, you can use clearTimeout function with the timerId
// console.log("timerId:", timerId);

// console.log("end");

// // outpus:
// // start
// // end
// // processing (after 1 second)

// //! setInterval
// // setInterval(callback, interval, ...arguments)
// let count = 0;
// const timerId1 =setInterval(() => {
//     console.log(count);
//     // console.log("processing");

//     if(count === 10){
//         clearInterval(timerId1); // this will clear the timer, it will stop the interval, it will not execute the callback function anymore
//     }

//     count++;
// }, 1000); // this will execute the callback function every 1 second, it is async, it will not block the next line)

// console.log("end");

// // outputs:
// // end
// // processing (every 1 second)

// // fetchUser is a function that simulates fetching user data from a server. It uses setTimeout to mimic an asynchronous operation that takes 2 seconds to complete. When the function is called, it will log "user fetched" after 2 seconds, while the rest of the code continues to execute without waiting for the fetchUser function to finish. When the function is not called, it will not log anything.
// const fetchUser1 = () => {
//     setTimeout(() => {
//         console.log("user fetched");
//     }, 2000);
// };

// fetchUser1(); // this will call the fetchUser1 function, it will execute the callback function after 2 seconds, it is async, it will not block the next line

// console.log("end");

// // outputs:
// // end
// // user fetched (after 2 seconds)

//
// const fetchUser = (callback) => {
//   setTimeout(() => {
//     console.log("user fetched");
//     callback(null, { name: "John", age: 25 }); // this will call the callback function having the arguments null and object  after the user is fetched, it is async, it will not block the next line
//   }, 2000);
// };

// const fetchPost = (user, callback) => {
//   setTimeout(() => {
//     console.log(user);
//     console.log("post fetched for user:", user.name);
//     callback(null, [
//       // this will call the callback function having the arguments null and array of objects after the post is fetched, it is async, it will not block the next line
//       { id: 1, userId: user.name, title: "Post 1" },
//       { id: 2, userId: user.name, title: "Post 2" },
//     ]);
//   }, 1000);
// };

// const fetchComment = (post, callback) => {
//   setTimeout(() => {
//     callback(null, [{ postId: post.id, id: 1, content: "comment 1" }]);
//   }, 1000);
// };

//fetchUser(callback)
//i.e. fetchUser(err, data)
// this will call the fetchUser function, it will execute the callback function after 2 seconds, it is async, it will not block the next line
fetchUser((err, user) => {
  // this is the callback function inside fetchUser that will be called after the user is fetched, it will execute the callback function after 2 seconds, it is async, it will not block the next line
  if (err) {
    console.log("error fetching user:", err);
    return;
  }

  //fetchPost(user, callback)
  // this will call the fetchPost function after the user is fetched, it will execute the callback function after 1 second, it is async, it will not block the next line
  fetchPost(user, (err, data) => {
    // this is the callback function inside fetchPost that will be called after the post is fetched, it will execute the callback function after 1 second, it is async, it will not block the next line
    if (err) {
      console.log("error fetching post:", err);
      return;
    }
    console.log("posts:", data);

    // fetch comments
    // fetchComment(postMessage, callback)
    fetchComment(data[0], (err, comments) => {
      if (err) {
        console.log("err");
        return;
      }
      console.log("comments fetched for post:", data[0].title);
      console.log("comments:", comments);
    });
  });
});

console.log("end");
// outputs:
// end
// user fetched (after 2 seconds)
// post fetched (after 3 seconds)

// callback hell: when we have multiple nested callbacks, it becomes difficult to read and maintain the code. It is also known as "pyramid of doom" because of the shape of the code. To avoid callback hell, we can use promises or async/await.
// solution to callback hell: promises and async/await












