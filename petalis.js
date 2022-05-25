const howMuchIloveYou = (petalis) => {
    let saysome = "" + petalis
    saysome = saysome.split('').map(x => String (x))
    if(saysome.length >0){
        console.log('thought slowed')
    }else{
        console.log('not bad')
    }
    return saysome 
}

const test = howMuchIloveYou()
console.log(test)


const saySomething = ['love you','not much','litte bit'].filter(howMuchIloveYou)
const laineSlowed = saySomething.push(saySomething.length)
console.log(saySomething)
console.log('testing solve issues',laineSlowed)