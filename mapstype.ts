let MyNumbers = [234,324,3543,5234,234,435,324]

const CounterNames = MyNumbers.map((newNumber: number) => {
  return newNumber *2
})


console.log(CounterNames)