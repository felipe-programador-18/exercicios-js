
//remember practice more about map to challange tomorrow

const resolve =[12,33,4324,123,453]

const Together = resolve.map(function(item){
    return {teste: item* 2, item} 
})

console.log(resolve, Together)


const Equal = [1,2,43,454,66,342]
Equal.forEach(Element=> console.log(Element *2))
console.log(Equal)


const Kinda = [32,123,3213,12,21,1,23]

Kinda.forEach(Element=> console.log(Element *2))

const referral = function(item){
    return item < 50
}

const createnew = [12,3,123,54,6,5,49,43,32].filter(referral)
console.log('teste array and filter!!!', createnew)

//make filter to people born below of year 2000
const Decade = function(born){
    return born < 2000 && born > 1975
}

let Vector = [1995,1996,1999,1976, 1920, 1930].filter(Decade)
console.log(Vector)