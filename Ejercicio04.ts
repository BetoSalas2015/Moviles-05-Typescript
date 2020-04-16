class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre
    }

    get Edad(): number {
        return this.edad;
    }

    set Edad(edad: number): void {
        this.edad = edad;
    }

    toString(): string {
        return "Nombre: " + this.nombre + ", Edad: " + this.edad;
    }

}

var Roberto = new Persona("Roberto Salazar", 40);
var juan = new Persona("Juan Perez", 33);

console.log( juan.toString() + ", " + Roberto.toString());