// // fetchPosts
// const fetchPosts = async (userId) => {
//   try {
//     const postRes = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
//     );
//     const posts = await postRes.json();
//     return posts;
//   } 
//   catch (error) {
//     console.log(error);
//   }
// };



// // fetchComments
// const fetchComments = async (postId) => {
//   try {
//     const commentsRes = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
//     );
//     const comments = await commentsRes.json();
//     return comments;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // fetch data

// const fetchData = async () => {
//   try {
//     // fetch post
//     const posts = await fetchPosts(1);
//     // fetch comments
//     const comments = await fetchComments(posts[1].id);

//     console.log(comments);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();




const parent=()=>{
  
  const child=()=>{

  }
}