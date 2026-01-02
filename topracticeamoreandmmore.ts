
const number = [12,23,43,324,432,412,345,351,2312,3453,543]

const sumtoTwoNumbser = number.map((i) => {
   return i*3
})

console.log(sumtoTwoNumbser)


const anotherNumberHere = [213,213,4535,21,314532,23123,5435]

anotherNumberHere.forEach(Element =>  console.log(Element **2/Element))
console.log(anotherNumberHere.indexOf(5435,1))

console.log(`make testing of my coding here now ${anotherNumberHere}`)



const names = ["felipe","programmer","programmer floripa"]

names.forEach(newNames => console.log(newNames +" " + newNames.concat()) )




const getNumber = (a:number,b:number) => {
    return a +b
}

const newNumber = [2323,1232,3123,4323,4123,432,123,123,45323,123,43,231123,34234,123,4532].reduce(getNumber)
console.log(newNumber)




const splitsNoutes = (c:number,d: number) => c-d
const Noutes = [123,2323,4,534,2314,123,435,3423].reduce(splitsNoutes)

if(Noutes < 0){
    console.log("the Noutes is negative for you get finance your cars")
}else {
    console.log('Your number is high to get achieve finance your cars')
}
console.log(`decreased each time that I have to adding more one itens ${Noutes}`)




const PracticeMore = ["Felipe", "programmer", "more and more"]
PracticeMore.forEach(newMore => console.log(newMore + "I will win the life"+newMore.concat(" Try to practice a bit more")))



let FelipeMore = [1,2,4,5,6,2,3,4].reduce((a:number,b:number) => a+b)
console.log(FelipeMore)
