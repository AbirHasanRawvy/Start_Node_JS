///Promise;
const myPromise = new Promise((resolve, rejected) => {

    let completed = true;

    if(completed) {
        resolve("success! you work");
    } else{
        rejected("Error!");
    }
});

myPromise.then((result) => {
    console.log("The result is: ", result);
}).catch((error) => {

    console.log("The error is : ", error);
});