// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

let simulateTask=()=>{
    console.log("task started");
    setTimeout(()=>{
        console.log("task completed");
        
    },1000)
    
}
simulateTask()