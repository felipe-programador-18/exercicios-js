function soma(a: number, b: number): number {
    return a + b;
}

console.log(soma(5, 3));


let Username:string= "felipe";
console.log(Username);


// relembrando tuplas

let Getname:[string, number]=["APROVADO TRT E BADESUL", 26];
console.log(Getname);


// Declaração
const pessoa: [string, number, boolean] = ["Ana", 30, true];

// Acessando elementos
const nome = pessoa[0];   // string
const idade = pessoa[1];  // number
const ativo = pessoa[2];  // boolean

console.log("pegando meu usuário:", nome, idade, ativo)

// Com labels (mais legível)
const coordenada: [x: number, y: number] = [10, 20];


// agora tipo UNIAO...
// Tipo simples
let id: string | number;
id = 123;      // ✅
id = "abc";    // ✅

// Em funções
function exibir(valor: string | number): string {
  return `Valor: ${valor}`;
}

// União com literais
type Direção = "norte" | "sul" | "leste" | "oeste";
let dir: Direção = "norte";  // ✅
dir = "sul";    // ✅