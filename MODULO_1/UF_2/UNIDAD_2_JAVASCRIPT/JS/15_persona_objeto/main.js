
let persona = {
    nombre: "Juan", apellido: "Nadie",
    edad: 50,
    ojosColor:
    {
        izquierdo: "Verde",
        derecho: "Azul"
    },
    altura: 1.80
};






for (const x in persona) {
    if (typeof persona[x] === 'object') {  //AQUI COMPROBAMOS SI ES UN OBJETO 
        // Imprimir los colores de los ojos
        document.body.innerHTML += `${x}: (OJOS IZQUIEROD) ${persona[x].izquierdo}, (OJO DERECHO) ${persona[x].derecho}<br>`;

    } else { // SI NO ES OBJETO  IMPRIMA OTROS VALORES

        // Imprimir los otros valores
        document.body.innerHTML += `${x}: ${persona[x]}<br>`;
    }
}

let mensaje = `Hola ${persona.nombre} ${persona.apellido}, tu edad es de ${persona.edad} años y mides ${persona.altura} m. 
Eres como David Bowie porque tienes el ojo izquierdo ${persona.ojosColor.izquierdo} y el derecho ${persona.ojosColor.derecho}. `;

// Mostrar el mensaje en la página
document.body.innerHTML += `<br>${mensaje}`;
document.write("<hr>");



// Cambiar el nombre y el color del ojo derecho
persona.nombre = "Carlos";  // Cambiar el nombre
persona.ojosColor.derecho = "Marrón";  // Cambiar el color del ojo derecho

// Crear el mensaje actualizado con los nuevos valores
let mensajeActua = `Hola ${persona.nombre} ${persona.apellido}, tu edad es de ${persona.edad} años y mides ${persona.altura} m. 
Eres como David Bowie porque tienes el ojo izquierdo ${persona.ojosColor.izquierdo} y el derecho ${persona.ojosColor.derecho}. Bienvenido!!`;

// Mostrar el mensaje actualizado
document.body.innerHTML += `<br>${mensajeActua}`;



