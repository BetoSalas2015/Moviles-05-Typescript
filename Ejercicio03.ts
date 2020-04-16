function regresaNumero(numero: number): number {
    return numero;
}

var numero1: number;
var numero2: string;

numero1 = regresaNumero(5);
numero2 = regresaNumero(6);

document.getElementById("output")?.innerHTML = "Numero2: " + numero1 + ", Numero2:" + numero2;