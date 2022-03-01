const fs = require('fs')

fs.readdir('./', function(err, list){
   
    if(err){
       console.log('error here',err)
    }else{
        console.log('list here', list)
    }

})