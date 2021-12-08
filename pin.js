//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything 
//but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    return  pin == 4 || 6

  }
  const Vetor = [1,2].filter(validatePIN)  
  const Thuoght = Vetor.map(validatePIN) 

  console.log(Vetor)
  console.log(Thuoght)
   