const Vector = [1,23,1,3,3,45,12,5,67,7,7,7,8,9]

const Ab = (one, two) =>{
    if(!one[two]){
        one[two] = {
            value : one,
            vamore : 0
        }
    }
     one[two].vamore = one[two].vamore+1
    return one
}

const ThoughtMore = Vector.reduce(Ab,{})
console.log(ThoughtMore)
const Key = Object.keys(ThoughtMore)
// this case when do object key i caught only number without repite number
console.log(Key)

//remember i created functions working filter i need passes only paramether
const filtra =  Key.filter(adding => ThoughtMore[adding].vamore ===1)
console.log(filtra)