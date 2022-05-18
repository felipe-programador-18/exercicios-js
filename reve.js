//practice about that quite much and much more!!!
function digitize(n) {
    let res = n+''
    res = res.split("").reverse().map(x => Number(x))
    return res
}

const Thoughtb =  digitize(32)
console.log(Thoughtb)

const Pratice = (a) =>{
    let pensa = a+''
    pensa = pensa.split("").reverse().map(x => Number(x))
    return pensa
}

const Call =  Pratice(323213)
console.log(Call)