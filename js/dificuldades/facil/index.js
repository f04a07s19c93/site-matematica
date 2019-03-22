const multiplicacao_facil = require('./../../multiplicacao/facil')
const mmc_facil = require('./../../mmc/facil')
const mdc_facil = require('./../../mdc/facil')

function facil(assunto, contador) {
    if (assunto == "Multiplicação") {
        return multiplicacao_facil(x);
    }
    if (assunto == "MMC") {
        return mmc_facil(x);
    }
    if (assunto == "MDC") {
        return mdc_facil(x);
    }
}

module.exports = facil