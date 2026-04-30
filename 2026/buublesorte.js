const MAX_SIZE = 10;

let vec = new Array(MAX_SIZE + 1); // índice 1..max_size
let size, temp, cont = 0;

// Simulando leia() com valores de entrada
const input = [5, 3, 8, 1, 9, 2, 7, 4, 6, 10]; // exemplo
size = input.length;

for (let i = 1; i <= size; i++) {
  vec[i] = input[i - 1];
}

// Bubble Sort (decrescente — vec[j] < vec[j+1] troca)
for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size - 1; j++) {
    if (vec[j] < vec[j + 1]) {
      temp = vec[j];
      vec[j] = vec[j + 1];
      vec[j + 1] = temp;
      cont++;
    }
  }
}

// Exibindo resultado
for (let i = 1; i <= size; i++) {
  console.log(vec[i]);
}

console.log("Trocas realizadas:", cont);