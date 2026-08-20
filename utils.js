function fibonacci(n) {
    let numeros = [0, 1];

    for (let i = 2; i < n; i++) {
        numeros.push(numeros[i - 1] + numeros[i - 2]);
    }

    return numeros.slice(0, n);
}

console.log(fibonacci(10));