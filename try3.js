const fetchUser=(callback)=>{
    setTimeout(()=>{
        console.log("user fetched");
        // console.log(callback)
        callback({name:"john",id:1});
    },2000);
};

const fetchPost=(user)=>{
    setTimeout(()=>{
        console.log(user);
        console.log("user post fetched for user",user.id);
    },1000);
};

const callback = (user) => {
    fetchPost(user);
}

fetchUser(callback);

console.log("end");