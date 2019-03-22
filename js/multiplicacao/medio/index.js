module.exports = function (x) {
    /*multiplicação com numeros negativos*/
    if (x <= 3) {
        return ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + " × " + ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + "="
    }
    if (x >= 4 && x < 10) {
        return ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + " × " + ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + " × " + ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) +
            " × " + ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + " =";
    }
    if (x >= 10) {
        return ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + " × " + ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + " × " +
            ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + " × " + ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) +
            " × " + ((Math.round(Math.random() * 100)) - (Math.round(Math.random() * 100))) + " =";
    }
}