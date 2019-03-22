function mmc_dificil(x) {
    return "MMC( " + (Math.round(Math.random() * 1000)) + " , " + (Math.round(Math.random() * 1000)) + " , " +
        (Math.round(Math.random() * 1000)) + ") ="
}

module.exports = mmc_dificil