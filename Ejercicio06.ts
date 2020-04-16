interface Nombre {
    nombre: string;
    apellido: string;
}

class Persona {
    private nombreP: Nombre;
    private edad: number;

    public constructor(datos: Nombre, edad: number) {
        this.nombreP = datos;
        this.edad = edad;
    }

    public toString(): string {
        return "Nombre: " + this.nombreP.nombre + " " + this.nombreP.apellido + ", Edad: " + this.edad;
    }
}

let persona1 = { nombre: "roberto", apellido: "Salazar" };
var Roberto = new Persona(persona1, 30);

document.getElementById("output")?.innerHTML = Roberto.toString();