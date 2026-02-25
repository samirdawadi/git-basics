//!aile samma mathi hamle sabai afai custom func banayera data access garerrathem ava hamle fetch use garxam jasbata hamle server bata data req garxam

//!fetch--fetch() is a built-in JavaScript method used to request data from a server (like an API) and get a response.
//jsonplaceholder

  // fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
  //   // console.log(response);    //yesle hamlai nabujhni data dintheo
  //  return response.json()         //yesle hamlai ava bujhni walla data dinxa todos ko .ani json le ava promise pani pathauxa so return response.json garyo(yo return chai hamle paila agadi promise chain ma garreko jastai ho retuyrn garni ani tala chai tyo return gareko data fetch garni) .ani return garekole yeslai feri hamle . then gareu yedi return gareko success vaye data dekkhauna
  // })
  // .then((data)=>{                //json le return gareko promise ko lagi ho yo line  jasma actual todos ko data auxa
  //   console.log(data);
  // })
  // .catch((err)=>{
  //   console.log(err)
  // });












  //!async/await----herda kheri task sync dekhini tara kam chai async vako dekhinxa

  //async/await le asynchronous code lai synchronous jasto readable banaidincha, tara internally still asynchronous nai huncha

  //!try catch

  //=> syntatic sugar of promises --promise le j kam garxa yesle ne tei kam garnni ho , tara different syntax use garera same kam garni ho

  //async function

  // const add = async()=>   //promise return garca by default yedi async vayo vani..yedi yo line ma async navako vaye yo synchronous huntheo , ava yeha async vako vayera yo asynchronous vayo
  // {

  // }
  // add()



  //promise return gareko agadi await rakhni  for eg yeha fetchUser le promise return gareko ca so await keyword rakhem hamle

  // const fetchData = async ()=>{
  //   const user = await fetchUser();      .then jastai ho yo fetchUser().then((user)=>{console.log(user)})    .yeha wait garni jabasamme hamro fetchUser() func execution hudaina  ani func execution ko result chai user ma assign garni
  //   console.log(user);
  //   const posts= await fetchPost(user);
  //   console.log(posts);
  //   const comments = await fetchComments(posts[0]);
  //   console.log(comments);
  // }


//    const fetchData = async ()=>{
//     try 
//     {
//       const user = await fetchUser();
//     console.log(user);
//     const error = new Error("new error")
//     if(error){                    yo line ma throw 1 matra lekhyo if haru garena cani yo 1 chai tala catch ma janxa ani 1 print hunxa 
//     throw error                  yesle "new error " throw garxa tala catch ma
//     }
//     console.log(error)
//     const posts= await fetchPost(user);
    
//     console.log(posts);
//     const comments = await fetchComments(posts[0]);
//     console.log(comments);
//     } 
//     catch (error) 
//     {
//       console.log(error)             //error message ra location haru pani pathauxa 
//       console.log(error.message)    //error message matra pass garxa error class ma lekheko wala
      
//     }
//     finally{
//       console.log("executed anyway")
//     }
//   }

// fetchData();
// console.log("end");






//! fetch ----promise return garni function ho,network req garna use huni func
//fetch use garyo vani new promise yeta wota lekhna pardaina automatically promise return garca yesle




// https://jsonplaceholder.typicode.com/posts?userId=1
// 	https://jsonplaceholder.typicode.com/comments?postId=1
// fetch

// fetchPosts
const fetchPosts = async (userId) => {
  try {
    const postRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    const posts = await postRes.json();
    return posts;
  } 
  catch (error) {
    console.log(error);
  }
};



// fetchComments
const fetchComments = async (postId) => {
  try {
    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    );
    const comments = await commentsRes.json();
    return comments;
  } catch (error) {
    console.log(error);
  }
};

// fetch data

const fetchData = async () => {
  try {
    // fetch post
    const posts = await fetchPosts(1);
    // fetch comments
    const comments = await fetchComments(posts[0].id);

    console.log(comments);
  } catch (error) {
    console.log(error);
  }
};

fetchData();







//event loop
//git,github
//typescript