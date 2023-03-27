

const justPositive = (item:any) => {
    return item !== 0 && item > 0
}
const testing =  [12,323,123,4523,123,453,234, -1,-2,-50000].filter(justPositive).reduce((a,b) => a+b)
if(testing < 6000){
    console.log("its  least")
}else {
    console.log("is bigger that")
}
console.log(testing)



const toPracticeMore = (f:number) => {
    return f*= -1
}

const manage = toPracticeMore(100)
console.log(manage)

const LemmeRemind = (a:number) => {
    return a > 1 || a / a
}

const anotherTesting = LemmeRemind(13)
if(anotherTesting > 1 && anotherTesting !== anotherTesting ){
 console.log('testing here now' )
}else{
    console.log('this is not cousin')
}