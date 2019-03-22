function multiplicacao_facil(x) {
    /*multiplicação simples com 2 valores e numeros inteiros positivos*/
    if (x <= 4) {
        return (Math.round(Math.random() * 100)) + " × " + (Math.round(Math.random() * 100)) + "="
    }
    if (x >= 5 && x < 10) {
        return (Math.round(Math.random() * 100)) + " × " + (Math.round(Math.random() * 100)) + " × " + (Math.round(Math.random() * 100)) + "=";
    }
    if (x >= 10) {
        return (Math.round(Math.random() * 100)) + " × " + (Math.round(Math.random() * 100)) + " × " +
            (Math.round(Math.random() * 100)) + " × " + (Math.round(Math.random() * 100)) + "=";
    }
}


module.exports = multiplicacao_facil