///Promise;
const myPromise = new Promise((resolve, rejected) => {

    let completed = true;

    if(completed) {
        resolve("success! you work");
    } else{
        rejected("Error!");
    }
});
