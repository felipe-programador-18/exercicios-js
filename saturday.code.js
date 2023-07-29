

const PracticeMore = (e, f) => {
  return e *f
}

let numberToSum = [323, 123, 45, 4, 23, 2313, 232, 423].map((item) => {
  return item *2
})

const makeFilter = (item) => {
  return item <200
}
const ManageAll = numberToSum.filter(makeFilter)

console.log(ManageAll, ' ==== just to add together my filter number here now ===', ManageAll )