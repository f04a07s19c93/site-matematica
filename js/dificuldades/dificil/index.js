const multiplicacao_dificil = require('./../../multiplicacao/dificil')
const mmc_dificil = require('./../../mmc/dificil')
const mdc_dificil = require('./../../mdc/dificil')

function dificil(assunto, contatdor) {
    if (assunto == "Multiplicação") {
        return multiplicacao_dificil(x)
    }
    if (assunto == "MMC") {
        return mmc_dificil(x);
    }
    if (assunto == "MDC") {
        return mdc_dificil(x);
    }
}

module.exports = dificil