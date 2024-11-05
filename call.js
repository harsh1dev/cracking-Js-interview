//  call method 1 example
let obj = {
    fistname: "Harry",
    lastname: "Potter",
    printfullname: function () {
        console.log(this.fistname + ", " + this.lastname);
    }
}

obj.printfullname();

let name2 = {
    fistname: "Oggy",
    lastname: "jack",
}

obj.printfullname.call(name2);


//  call method 2 exaample
let data = {
    fistname: "Harry",
    lastname: "Potter",
}


let printfullname =  function () {
    console.log(this.fistname + ", " + this.lastname);
}

printfullname.apply(data);

let data2 = {
    fistname: "Oggy",
    lastname: "jack",
}

printfullname.call(data2);












