var nombre: string = "Roberto Salazar";
var edad: number = 30;
var programador: boolean = true;
var lenguajes: Array<string> = ["C", "c++", "java", "C#"];
var par: [string, number] = ["edad", 30];

enum meses { Enero, Febrero, Marzo, Abril, Mayo };
var calendario: meses = meses.Abril;

var nada: void = undefined;
var temporal: any = edad;

var NULL: null = null;
var Undefined: undefined = undefined;

document.getElementById("output")?.innerHTML = nombre + ", edad: " + edad + ", Programa en " + lenguajes[3];