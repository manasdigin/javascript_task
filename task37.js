function check(myVar){
    if (myVar===undefined || myVar===null){
        console.log("the variable is undefined or null");
    }else{
        console.log("the variable is neither undefined or null")
    }
    }
    check(null)
    check(a=undefined)
    check("manas")
    check(6)
    