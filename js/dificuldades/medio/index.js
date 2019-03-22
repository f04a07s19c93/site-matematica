const multiplicacao_medio = require('./../../multiplicacao/medio')
const mmc_medio = require('./../../mmc/medio')
const mdc_medio = require('./../../mdc/medio')

function medio(assunto, contador) {
    if (assunto == "Multiplicação") {
        return multiplicacao_medio(x)
    }
    if (assunto == "MMC") {
        return mmc_medio(x);
    }
    if (assunto == "MDC") {
        return mdc_medio(x);
    }
}

module.exports = medio