"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Object.defineProperty(Persona.prototype, "Edad", {
        get: function () {
            return this.edad;
        },
        set: function (edad) {
            this.edad = edad;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.toString = function () {
        return "Nombre: " + this.nombre + ", Edad: " + this.edad;
    };
    return Persona;
}());
var Roberto = new Persona("Roberto Salazar", 40);
var juan = new Persona("Juan Perez", 33);
console.log(juan.toString() + ", " + Roberto.toString());
