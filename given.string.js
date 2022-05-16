//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//felipe == ffeellipe

const nameString = (str) => {
    let arr = Array.from(str)
    let newarray = []
    for(var i=0; i < arr.length; i++ ){
        newarray.push(arr[i].repeat(2))
    }
    console.log(newarray.join(""))
}

nameString('felipe')


//console.log(Array.from([1,23,45], x => x+x) )


const  doublechar = (nwr) =>{
    let newthightmore = Array.from(nwr)
    let newcreate = []
    for(var i=0; i < newthightmore.length; i++){
       newcreate.push(newthightmore[i].repeat(2))
    }
    console.log(newcreate.join(''))
}

doublechar('felipemartins')


const changeSome = (more) =>{
    let build = Array.from(more)
    let newBuild = []
    for(var i=0; i < build.length; i++){
        newBuild.push(build[i].repeat(2))
    }
    console.log(newBuild.join(''))
}

changeSome('fdsafdsf')