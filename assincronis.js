let Count = 0
let Interval = setInterval(() =>{
    console.log('executive for interval of time...')
    Count ++;
   if(Count > 5){
       clearInterval(Interval)
   }
}, 100)
console.log(3)