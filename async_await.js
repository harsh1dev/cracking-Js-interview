async function fetchData(){
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

try{
    const data = await fetchData();
    console.log(data);
}catch(err){
    console.log(err);
}

