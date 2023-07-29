
const filterName = (felipe) => {
  return felipe !== "felipe"
}
const Names = ['felipe', 'programer'].filter(filterName)
console.log(Names)



const CallNames = Names.map((newNames) => {
  return newNames + " give it all always in accept the new challange that have in my life now" 
})

console.log(CallNames)


const calc =12

if (calc >=10) {
  console.log ("is biggest than 10" )
} else if (calc <10) {
  console.log("is smaller than 10")
} else {
  console.log('test')
}
console.log(calc)