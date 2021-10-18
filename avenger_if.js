// funcion con parametros obligatorios, opcionales y por defecto donde:
// nombre = obligatorio
// poder = opcional
// arma = por defecto = "arco"
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un arma: " + poder;
    }
    return mensaje;
};
console.log(getAvenger("Mujer maravilla", "capacidad de volar", "espada"));
