const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Stated Running the test cases !!!");
(async () => {
    await sleepTime(5000);
    console.log("Test Run Successfully Completed")
})();
