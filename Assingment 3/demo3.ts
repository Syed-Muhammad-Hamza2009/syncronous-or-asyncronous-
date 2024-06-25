// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.


let fetchData=():Promise <string>=>{
    return new Promise((resolve)=>{
       setTimeout(()=>{
        resolve("Data fetched succcesfully")
       },1000) 
    });
    
}
fetchData().then((resolve)=>{
    console.log(resolve);
    
})