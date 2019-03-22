function mdc_dificil(x) {
    return "MDC( " + (Math.round(Math.random() * 1000 + 50)) + " , " + (Math.round(Math.random() * 1000 + 50)) + " , " +
        (Math.round(Math.random() * 1000)) + ") ="
}

module.exports = mdc_dificil