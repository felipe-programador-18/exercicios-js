// learing and practice about try and catch

const Soma = (a,b) => {
    return a*b
}

// this case not give wrong because i have create functions
try{
    Soma();
  }catch (error) {
    console.error(error);
  }



//theorical going give error because i not did functions Kinda  
try{
    Kinda()
}catch(error){
    console.log(error)
}