"use strict";
var _a;
var Persona = /** @class */ (function () {
    function Persona(datos, edad) {
        this.nombreP = datos;
        this.edad = edad;
    }
    Persona.prototype.toString = function () {
        return "Nombre: " + this.nombreP.nombre + " " + this.nombreP.apellido + ", Edad: " + this.edad;
    };
    return Persona;
}());
var persona1 = { nombre: "roberto", apellido: "Salazar" };
var Roberto = new Persona(persona1, 30);
(_a = document.getElementById("output")) === null || _a === void 0 ? void 0 : _a.innerHTML = Roberto.toString();
