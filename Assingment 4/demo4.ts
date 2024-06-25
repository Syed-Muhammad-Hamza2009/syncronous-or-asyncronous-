// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
let fetchWithError=():Promise<string>=>{
    return new Promise((ressolve,reject)=>{
    setTimeout(()=>{
        let fetchData=(Math.random()) > 0.5;
        if(fetchData){
            ressolve("Data fetched succesfully")
        }else{
            reject("Data fetched failed ")
        }
    },1000)
    })
}
fetchWithError().then((res)=>{
    console.log(res);
    
}).catch((rej)=>{
    console.log(rej);
    
})