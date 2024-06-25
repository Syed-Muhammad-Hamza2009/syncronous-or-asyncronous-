"use strict";
// Demo # 1
Object.defineProperty(exports, "__esModule", { value: true });
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
let fetchGreeting = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello world");
    }, 2000);
})
    .then((res) => {
    console.log(res);
});
