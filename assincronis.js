let Count = 0
let Interval = setInterval(() =>{
    console.log('executive for interval of time...')
    Count ++;
   if(Count > 10){
       clearInterval(Interval)
   }
}, 100)
console.log(3)