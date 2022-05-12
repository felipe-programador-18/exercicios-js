//4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor

const vector = [1223,123,123,123,1,2,3,4,56,7,2,4,5]

const HowmaneTimes = (one,two) =>{
    if(!one[two]){
        one[two] = 0
    }
    one[two] = one[two] +1 
    return one
}

const Thought = vector.reduce(HowmaneTimes,{})
console.log(Thought)
