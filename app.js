function name(fn){
    const value = 10 ;
    fn(value);
}

function fn(value){
    console.log(value);
    
}

name(fn);