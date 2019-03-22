function multiplicacao_dificil(x) {
    return (parseFloat((Math.random() * 100) - (Math.random() * 100)).toFixed(2)) + " × " +
        (parseFloat((Math.random() * 100) - (Math.random() * 100)).toFixed(2)) + " ="
}

module.exports = multiplicacao_dificil