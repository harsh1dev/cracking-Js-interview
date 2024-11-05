function firstOrderAddFunction(a,b){
    return a+b;
}

function highOrderFunction(fun,a,b){
    return fun(a,b);
}


let a=10,b=20;
let ans = highOrderFunction(firstOrderAddFunction,a,b);

console.log(ans);