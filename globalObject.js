//Global Object of NodeJs;
console.log(__dirname);//which my folder situated;

console.log(__filename);//identify the file name;

//set timeout and set Interval;

setTimeout(()=>{
console.log("2 Sec Later");
},2000);

// setInterval(()=>{
//     console.log(new Date());
// }, 1000);

//Process;
console.log(process.platform);

console.log(process.argv);

//Global;
globalThis.myName = "ALEX";

console.log(myName);