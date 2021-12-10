const Vetor = ['aba', 'aba']

const Adoptem = (one, string) =>{
    if(!one[string]){
        one[string]=0
    }
    one[string] += one[string] + 1
    return one
}

const Test = Vetor.reduce( Adoptem, {})

console.log(Object.keys(Test))