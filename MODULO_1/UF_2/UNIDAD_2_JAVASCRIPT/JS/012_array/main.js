

// Array con los nombres de los meses (el índice 0 se deja vacío para coincidir con el número ingresado)
const meses = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Solicitar al usuario un número del 1 al 12
let numeroMes = parseInt(prompt("Ingresa un número del 1 al 12 para saber el mes correspondiente:"));

// Verificar si el número está en el rango válido
if (  (numeroMes >= 1 && numeroMes <= 12) && !isNaN(numeroMes) ) {
    let mes = meses[numeroMes]; // Obtener el mes desde el array
    alert(`El mes correspondiente al número ${numeroMes} es: ${mes}`);
    document.write(`El mes correspondiente al número ${numeroMes} es: ${mes}`);

} else
 
if (isNaN(numeroMes)) {
        alert("Entrada no válida. Debes ingresar un número.");
        document.write("Entrada no válida. Debes ingresar un número.");
}else {
    alert("Número fuera de rango. Debes ingresar un número del 1 al 12.");
    document.write("Número fuera de rango. Debes ingresar un número del 1 al 12.");}
