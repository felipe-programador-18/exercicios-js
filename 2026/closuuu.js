function mostra() {
  let n = 0;
  
  return {
    next: function() {
      n += 10 + 1; // n aumenta 11 a cada chamada
      return { value: n, done: false };
    }
  };
}

// Inicializa o iterador
const n = mostra();

// Primeira chamada: n passa de 0 para 11
n.next(); 

// Segunda chamada: n passa de 11 para 22
const resultado = n.next().value;

console.log(resultado); // Saída: 22