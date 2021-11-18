//Training about this remember!!!

const Modher = [12,123,23,21,12,1,2,23,3,4,5,1,3,4]
const Sogra = (girlfriend, namorada)=>{
if(!girlfriend[namorada]){
    girlfriend[namorada]= 0
}
girlfriend[namorada] += girlfriend[namorada] + 1
return girlfriend
}
const Both = Modher.reduce(Sogra,{})
console.log(Both)


const father =  ['martins','machado', 'teste', 'coming','rearrenge', 'martins', 'machado', 'teste', 1,1,2,2,123,43,2312,12]

const Grant = (grew, growth) => {
    if(!grew[growth]){
        grew[growth] =0
    }
    grew[growth]+= grew[growth] +1
    return grew
}

const equal =  father.reduce(Grant, {})
console.log(equal)