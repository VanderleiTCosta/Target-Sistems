const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarLetraA(s) {

    s = s.toLowerCase();
    
    let contagem = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            contagem++;
        }
    }
    
    if (contagem > 0) {
        console.log(`A letra 'a' aparece ${contagem} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não está presente na string.");
    }
}

rl.question("Digite uma string: ", function(input) {
    contarLetraA(input);
    rl.close();
});
