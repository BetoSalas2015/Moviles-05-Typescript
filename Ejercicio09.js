"use strict";
var _a;
var Empleado = /** @class */ (function () {
    function Empleado(nom, puesto, sal) {
        if (puesto === void 0) { puesto = "Trabajador"; }
        this.Nombre = nom;
        this.Puesto = puesto;
        if (sal) {
            this.Salario = sal;
        }
        else {
            this.Salario = 0.0;
        }
    }
    return Empleado;
}());
var Alberto = new Empleado("Roberto");
(_a = document.getElementById("output")) === null || _a === void 0 ? void 0 : _a.innerHTML = "Nombre: " + Alberto.Nombre + ", Puesto: " + Alberto.Puesto + ", Salario: " + Alberto.Salario;
