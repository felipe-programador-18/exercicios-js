const Vetor =  [1,2,3,4,5,1,23,7,8, 'Felipe', 'felipe', 'martins', 'martins']

const Create  = (pai, filho) => {
    if(!pai[filho]){
      pai[filho]= {
        fi : filho,
        occor : 0
      }
    }
     pai[filho].occor = pai[filho].occor +1
     return pai
    
}

const Get = Vetor.reduce(Create, {})
const Key = Object.keys(Get)
console.log(Get)
console.log(Key)