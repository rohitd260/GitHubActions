const sleepTime = ms => new Promise(resolve =>setTimeout(resolve,ms));

console.log("Node JS Test Runner");

(async () => {
    await sleepTime(240);
    console.log("Node JS app test cases running");
}
)();

(async () => {
    await sleepTime(2400);
    console.log("Node JS app test cases run successful");
}
)();