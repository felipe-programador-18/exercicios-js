//practice about that quite much and much more!!!
function digitize(n) {
    let res = n+''
    res = res.split("").reverse().map(x => Number(x))
    return res
}

const Thoughtb =  digitize(32)
console.log(Thoughtb)