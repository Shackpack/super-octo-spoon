// funcion con parametros obligatorios, opcionales y por defecto donde:
// nombre = obligatorio
// poder = opcional
// arma = por defecto = "arco"

const getAvenger= (nombre:string, poder?:string, arma:string = "arco") => {
    let mensaje:string;
    if(poder){
        mensaje =`${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
    }else {
        mensaje =`${nombre} tiene un arma: ${poder}`;
    }
    return mensaje;
};

console.log(getAvenger("Mujer maravilla", "capacidad de volar", "espada"));