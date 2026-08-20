function fibonacci(n) {
    let numeros = [0, 1];

    for (let i = 2; i < n; i++) {
        numeros.push(numeros[i - 1] + numeros[i - 2]);
    }

    return numeros.slice(0, n);
}

console.log(fibonacci(10));
function numeroRomano(num) {
    const valores = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    let resultado = "";

    for (const [valor, simbolo] of valores) {
        while (num >= valor) {
            resultado += simbolo;
            num -= valor;
        }
    }

    return resultado;
}

console.log(numeroRomano(1999));