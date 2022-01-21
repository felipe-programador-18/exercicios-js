// with command closure i have i getting change value of number!!!

function closure (thought){
    let caught = thought;

    return function () {
        caught
        return caught ++
    }
}

const Test = closure(10*300)
console.log(Test(), Test(), Test(), Test())