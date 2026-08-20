const sleepTime = ms => new Promise(reslove => setTimeout(reslove,ms))

console.log("Started the Node Application Build !!!");

(async () => {
    await sleepTime(250);
    console.log("Node Js app is Building !!!");
})();

(async () => {
    await sleepTime(2400);
    console.log("App Build Successfully !!!");
})();