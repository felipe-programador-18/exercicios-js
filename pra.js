const Vetor = ['batata', 'cebola','ovo','vinho','ovo','cebola','tomate','cerveja',12,23,23,123,23213,12]
const Due = (mother ,son) =>{
    if(!mother[son]){
        mother[son] = {
            father : son,
            vo : 0
        }
    }
    mother[son].vo  = mother [son].vo + 1
    return mother
}


const Family = Vetor.reduce(Due, {})
const Mall = Object.keys(Family)

const Equal = Mall.filter(Mall => Family[Mall].vo === !Number)
const Observe = Equal.map (son => Family[son].father)

console.log(Observe)