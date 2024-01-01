

const Practice = (a, b) => {
    return a*b 
}

const manege = Practice(12,3)
console.log(manege)

const Testing = manege.toString(12)
console.log(Testing)





const Lessnumber = (frutas) => {
    return frutas <1000
}


let frutas = [12,23,23,123,123,123].map((just) => just **2)

const ToControl = frutas.filter(Lessnumber)
console.log("testing", ToControl)


console.log("come back to practice a bit english and coding a lot", frutas)



function TestingAlert (phrase){
    phrase = 'this number is smaller than 24'
    
    return phrase < 24
}

let phrase='This number is smaller than 24'
let count = [12,2].reduce((a,b) => a*b).filter(TestingAlert())
console.log(`just to come back to practice a bit ${count}`)