
const another  = [12,32323,323,32,312,31,3123,344].map((ano => ano*2))
console.log(another)

const AnotherFilter = (item) => {
    return item < 2000
}

let filterage = [1994,2333,1994,1993,2010].filter(AnotherFilter)
console.log(filterage)