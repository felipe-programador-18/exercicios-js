const howMuchIloveYou = (petalis) => {
    let saysome = ['teste'] +petalis
    saysome = saysome.split('').map(x => Number (x))
    if(saysome<=0){
        console.log('te', saysome)
    }else if (saysome >3) {
        console.log('not bad')
    }
    return saysome 
}
const test = howMuchIloveYou(3)
console.log(test)


