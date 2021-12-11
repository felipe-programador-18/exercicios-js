const Vetor = [1,2,3,4,5,6,7,1,3,4,10]

const Adoptem = (one, string) =>{
    if(!one[string]){
        one[string]=0
    }
    one[string] += one[string] + 1
    return one
}

const Test = Vetor.reduce( Adoptem, {})

console.log(Object.keys(Test))