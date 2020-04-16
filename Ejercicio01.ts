function saludos(nombre) {
    return "Saludos " + nombre + "!!";
}

var persona = "Roberto Salazar Márquez";

document.getElementById("output").innerHTML = saludos(persona);