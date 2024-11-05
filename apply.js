//  apply method is same as call method but it takes agrs as array


//  call method 1 exaample
let data = {
    fistname: "Harry",
    lastname: "Potter",
}


let printfullname =  function (greeting) {
    console.log(greeting + "  !" + this.fistname + ", " + this.lastname);
}

printfullname.apply(data,["hello"]);

let data2 = {
    fistname: "Oggy",
    lastname: "jack",
}

printfullname.apply(data2, ["Hi"]);

