let arr1 = ["it's Sunny in", "", "California"];
console.log(arr1)
arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
console.log(arr1)



//training tomorrow again learning about this!!!
const Greetw = ['hellow', 'is beatiful', 'attitude'].flatMap('')
console.log(Greetw)
// practice more and more always !!

const Built = ['martins', 'practice', 'studies','always','everyday']
console.log(Built)