class Persona {
    private nombre: string;
    private edad: number;

    public constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre
    }

    public get Edad(): number {
        return this.edad;
    }

    public set Edad(edad: number): void {
        this.edad = edad;
    }

    public toString(): string {
        return "Nombre: " + this.nombre + ", Edad: " + this.edad;
    }

}

var Roberto = new Persona("Roberto Salazar", 40);
var juan = new Persona("Juan Perez", 33);

console.log(juan.toString() + ", " + Roberto.toString());
document.getElementById("output")?.innerHTML = juan.toString() + ", " + Roberto.toString();