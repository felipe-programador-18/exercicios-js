// stop OVERTHING AND PUT HANDS ON ACTION!

function formatarCPF(cpf) {
    // Remove qualquer caractere que não seja número
    const numerosCPF = cpf.replace(/\D/g, '');

    // Aplica a regex para formatar o CPF
    const cpfFormatado = numerosCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');

    return cpfFormatado;
}

// Exemplo de uso
const cpfOriginal = '12345678909';
const cpfFormatado = formatarCPF(cpfOriginal);

console.log(cpfFormatado);  // Saída: 123.456.789-09
