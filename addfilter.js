const Vetor = [1,2,1,2,3,5,6,100,7,8,8,12]

const Adoptem = (one, two) =>{
    if(!one[two]){
        one[two]=0
    }
    one[two] += one[two] + 1
    return one % 2 === 1
}

const bind = Vetor.filter(Adoptem, {})
console.log(bind)