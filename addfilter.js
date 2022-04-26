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


const Felipe = 'new word'
if(Felipe === 'new word'){
    console.log(`${Felipe} i need studies more and more always`)
}else{
    console.log('test here practice more and more always')
}

var numero =0
for(numero=0;numero <12;numero++){
    console.log('remmber for ', numero)
}
console.log(`${numero} practice to remember more and more`)


var decrement = 10
for(decrement=-10; decrement<200; decrement ++){
    console.log('seein decrement', decrement)
    if(decrement <0){
     console.log('error', decrement)
    }
}
console.log(decrement)