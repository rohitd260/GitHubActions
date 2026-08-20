const sleepTime =  ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Stated the Node Js App Build Deployement !!!");

(async () => {
    await sleepTime(240);
    console.log("App deployment is Running !!!");
})();

(async () => {
    await sleepTime(2400);
    console.log("App deployement is completed s!!!");
})();