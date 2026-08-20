const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node Js app build Started");

(async () => {
    await sleepTime(240);
    console.log("Node js app building ");
})();

(async () =>  {
    await sleepTime(2400);
    console.log("Node Js app deployed");
})();