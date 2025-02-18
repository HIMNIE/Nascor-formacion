
document.write("<div id='eldiv'> ");


// Funcion para calcular la media de un array de numeros
function calcularMedia(notas) {
    let suma = 0; 
    
    for (let nota of notas) {
        suma += nota; 
    }

    let media = suma / notas.length; 
    return media.toFixed(2); 
}


// Funcion para determinar la calificacion final segun la media
function obtenerCalificacion(media) {
    
    if (media < 5) return "Suspenso"; 
    if (media < 6) return "Suficiente"; 
    if (media < 7) return "Bien"; 
    if (media < 8) return "Notable"; 
    return "Sobresaliente"; 
}


// Obtener el nombre del alumno
let nombre = prompt("Inserta el nombre del alumno:"); 
let notas = []; 


// Mostrar resultados
document.write("<h2>Nombre del alumno : " + nombre + "</h2>");


// Pedir 5 notas y  que sean numeros validos
for (let i = 1; i <= 5; i++) { 
    let nota; 
   
        let entrada = prompt("Inserta la nota :  " +i); 
        nota = parseFloat(entrada); 
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Debes ingresar un número válido entre 0 y 10."); 
            --i;  
            continue;
        } 
    

    
    nota = parseFloat(nota.toFixed(2)); 

    notas.push(nota);
}



// Mostrar resultados
document.write("<ul>");
for (let i = 0; i < notas.length; i++) {
    document.write("<li> Nota    " + (i + 1) + "    :   " + notas[i] + " </li><br>");
}
document.write("</ul>");


// Calcular la media
let media = calcularMedia(notas); 
let calificacion = obtenerCalificacion(media); 

// Mostrar resultados
document.write("<h3><strong>Media:</strong> " + media + "</h3>");
document.write("<h4><strong>Nota:</strong> " + calificacion + "</h4>");



document.write("</div>");

