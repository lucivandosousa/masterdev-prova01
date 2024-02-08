function executar(numero) {
    if (numero % 3 == 0) {
        return "Mar";
    }

    if (numero % 4 == 0) {
        return "Minino";
    }

    if (numero % 3 == 0 && numero % 4 == 0) {
        return "MarMinino";
    }

    return "";
}

for (let index = 1; index <= 100; index++){
    const resultado = executar(index)
    //console.log(resultado)
}

module.exports = executar;