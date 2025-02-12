let maxIntentos = 3;

for (let intentos = 0; intentos < maxIntentos; intentos++) {
    let respuesta = prompt("¿Cuánto es 5 + 9?");
    
    if (respuesta === "14") {
        alert("Acceso concedido");
        break;
    } else {
        alert("Respuesta incorrecta. Intento " + (intentos + 1) + " de " + maxIntentos);
    }
    
    if (intentos === maxIntentos - 1) {
        alert("Demasiados intentos. Redirigiendo...");
        window.location.href = "https://mossos.gencat.cat/ca/inici";
    }
}


verificarUsuario();
