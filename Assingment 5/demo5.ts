// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.\

let fetchData1=()=>{
    return new Promise((resolve)=>{
        resolve("Data fetched succesfully")
    })
}
let processData=()=>{
    return new Promise((resolve)=>{
        resolve("processed data succcesfully")
    })
}
let executeSequentially=()=>{
    fetchData1().then((res)=>{
        console.log(res);
        
    })
    processData().then((res)=>{
        console.log(res);
        
    })
    
}
executeSequentially()