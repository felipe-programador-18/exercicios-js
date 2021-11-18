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