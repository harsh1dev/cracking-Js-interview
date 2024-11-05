function fetchData(){
    return new Promise((resolve,reject)=>{

        setTimeout(() =>{
            const success= false;
            if(success){
                resolve("Data fetched Successfully");
            }else{
                reject("Can't fetch Data")
            }
        },2000);
    })
}


const data = fetchData();

data.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})

