
class Rectangulo {
    public base:number;
    public altura:number;

    constructor(base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }
    calcularArea():number{
        return this.base * this.altura;
    }
}

const clase:Rectangulo = new Rectangulo(2,3);
console.log(clase.calcularArea());