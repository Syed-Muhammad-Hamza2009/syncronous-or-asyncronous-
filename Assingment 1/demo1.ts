// Demo # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

let fetchGreeting=new Promise((resolve)=>{
    setTimeout(()=>{resolve("hello world")
    },2000)})
.then((res)=>{
   
    console.log(res);
    
})
