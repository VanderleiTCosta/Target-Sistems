const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function geraFibonacci(max) {
    const fibonacci = [0, 1];
    while (true) {
        const next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (next > max) break;
        fibonacci.push(next);
    }
    return fibonacci;
}

function pertenceFibonacci(num, fibonacciSequence) {
    return fibonacciSequence.includes(num);
}


rl.question('Informe o número máximo para gerar a sequência de Fibonacci: ', (maxInput) => {
    const max = parseInt(maxInput, 10);

    if (isNaN(max) || max < 0) {
        console.log('Por favor, informe um número válido e não negativo.');
        rl.close();
        return;
    }

    const fibonacciSequence = geraFibonacci(max);
    console.log('Sequência de Fibonacci até', max, ':', fibonacciSequence.join(', '));

    rl.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (checkInput) => {
        const num = parseInt(checkInput, 10);

        if (isNaN(num)) {
            console.log('Por favor, informe um número válido.');
        } else {
            if (pertenceFibonacci(num, fibonacciSequence)) {
                console.log(`${num} pertence à sequência de Fibonacci.`);
            } else {
                console.log(`${num} não pertence à sequência de Fibonacci.`);
            }
        }

        rl.close();
    });
});
