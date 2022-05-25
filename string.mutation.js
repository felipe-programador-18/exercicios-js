String.prototype.toAlternatingCase = function () {
  return this.split('').map(changeLetter).join('');
  }

const changeLetter = (char) =>{
  if(char.toLowerCase() ===char ){
   return char.toUpperCase()
  }

  return char.toLowerCase()
}

const togetherString = changeLetter('pratice about that')