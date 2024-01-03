

function ToFilter (item){
  return item <1000
}

let Testing=[23,23,3423.43].filter(ToFilter())
console.table(Testing)

