
// practice and seeing some thing!!
const array = ['a','b' , 'a', 'b', 'e', 12, 12, 32, 1, 2,1]
// this code is very interesting!!!
//practice more about that!!
const Together = (one, two) =>{
    if(!one[two]){
       one[two] = {
        receive: two,
        ocurr: 0
       }
      }
     one[two].ocurr = one [two].ocurr+1
     return one
}

const Test =array.reduce(Together, {})
console.log(Test)