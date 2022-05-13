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




let names = ['programador','felipe', 'felipe',4324,123,54,556,1,3,54,234,534,123,'felipe']

const Resolve = (mae, filho) => {
    if(!mae[filho]){
        mae[filho] = 0
    }
    mae[filho] = mae[filho] +1
    return mae
}

const Pure = names.reduce(Resolve,{})
console.log(Pure)


const felipe = 32
const DontReepet = ['programer', 81,18,48,1233,2321, 'martins', felipe,'felipe', 'felipe']

const Aloof = (think, thought) => {
    if(!think[thought]){
        think[thought]=0
    }
    think[thought] = think[thought]+1
    return think
}

const Make =  DontReepet.reduce(Aloof,{})
console.log(Make)




const Lire =  function(item){
    return item !== Number
}
const ctor = [12,232,213,"felippe", 'programmer', 1,23,4,5].filter(Lire)
console.log(ctor)
