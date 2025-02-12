


let LoginCaptcha = parseInt(prompt('Ingrese el resultado de 5 + 9'));

let resultadoCaptcha = 14;

if (LoginCaptcha === resultadoCaptcha) {
    document.write('El resultado es correcto.¡ Bienvenido ! Resultado : '+LoginCaptcha);
}else if (isNaN(LoginCaptcha)){
    //si no es un numero lo introducido
    alert('debes introducir un numero')
    window.location.reload();

}
 else {
    alert(`Respuesta incorrecta.\nTu numero insertado es : ${LoginCaptcha} NO ES CORRECTO \nInténtalo de nuevo.`);
    window.location.reload();
}



