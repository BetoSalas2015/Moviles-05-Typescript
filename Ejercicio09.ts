class Empleado {
    private Nombre: string;
    private Puesto: string;
    private Salario: number;

    public constructor(nom: string, puesto: string = "Trabajador", sal?: number) {
        this.Nombre = nom;
        this.Puesto = puesto;
        if (sal) {
            this.Salario = sal;
        } else {
            this.Salario = 0.0;
        }
    }
}

var Alberto = new Empleado("Roberto");
document.getElementById("output")?.innerHTML = `Nombre: ${Alberto.Nombre}, Puesto: ${Alberto.Puesto}, Salario: ${Alberto.Salario}`
