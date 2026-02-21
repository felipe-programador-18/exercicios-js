// Criando matriz 3x3
const mat = [];

// Inicializando matriz
for (let i = 1; i <= 3; i++) {
  mat[i] = [];
}

// Preenchendo apenas a parte triangular superior
for (let i = 1; i <= 3; i++) {
  for (let j = i; j <= 3; j++) {
    mat[i][j] = i + 2 * j;
  }
}

console.log(mat);