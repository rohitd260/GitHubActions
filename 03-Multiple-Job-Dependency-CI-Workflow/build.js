const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node Js App Build started");

(async () => {
    await sleepTime(240);
    console.log("Node Js App is Building");
})();

(async () => {
    await sleepTime(2400);
    console.log("Node Js app build successful");
})