


let binds = ["felipe"," felipe martins", "martins", "felipe"]


const Build = (one, two) => {
   
   // Verifica se existe o paramentro two dentro do paramentro one 
    if(!one[two]){
        one[two]= 0


        // caso não tenha vai começar com valor inicial zero
    }
    // aqui vai aumentar o valor do one + two
    one[two]+= one[two]+1

    return one
}
// to pass on [] this ou {} donts matter 

const LemmeKnow = binds.reduce(Build, {})

console.log(LemmeKnow)
console.log(Object.keys(LemmeKnow))