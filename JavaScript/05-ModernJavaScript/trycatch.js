const convertToRs = (dollar)=> {
if(typeof dollar ==='number'){
    return dollar * 74
}else{
    throw Error('Amount needs to be in number')
}
}

try{
    const myValue = convertToRs(12)
    console.log(myValue);
} catch(e){
    console.log(e);
}

