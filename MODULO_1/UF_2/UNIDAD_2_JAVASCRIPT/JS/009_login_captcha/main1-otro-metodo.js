let intentos = 0;
let maxIntentos = 3;
let respuesta;

do {
    respuesta = prompt("¿Cuánto es 5 + 9?");
    
    // Verificamos si la respuesta es un número
    if (isNaN(respuesta)) {
        alert("Por favor, ingresa un número válido.");
        continue; // Vuelve a pedir la respuesta sin contar el intento
    }
    
    if (respuesta === "14") {
        alert("Acceso concedido");
        break;
    }

    intentos++;
    alert("Incorrecto. Intento " + intentos + " de " + maxIntentos);
    
} while (intentos < maxIntentos);

if (intentos === maxIntentos) {
    alert("Demasiados intentos. Redirigiendo...");
    window.location.href = "https://mossos.gencat.cat/ca/inici";
}
