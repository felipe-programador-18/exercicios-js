const kind = [1,23,4532,24,23423,4,4324,10]
const receive = (one, two) => one+ two
console.log(kind.reduce(receive))


setTimeout(() => {
    console.log('here now in 2 second')
},2000)

setTimeout(() =>{
    console.log(`solve is ${kind}`)
},4000)


setTimeout(() => {
    console.log('see in six minute')
}, 6000);
    


