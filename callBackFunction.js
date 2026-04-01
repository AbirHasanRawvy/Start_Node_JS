///Call Back Function;
function passFun(){
    console.log("Hello callback!")
}


function mainFun(passFun){

    passFun();
}

mainFun(passFun);