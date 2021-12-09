function kinda (more) {

    let count = more ;
    return function () {
        count++
        return count
    }
}

//this closure i can adding another value and adding another thing how numbers!!!
const caught = kinda(10*5)
const insight  = kinda(2)
console.log(caught(), caught(), insight(), insight())