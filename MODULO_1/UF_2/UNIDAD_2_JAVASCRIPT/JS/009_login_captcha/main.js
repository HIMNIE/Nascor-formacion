



let resultadoCaptcha = 14;
let intento=3;
do{

    let LoginCaptcha = parseInt(prompt('Ingrese el resultado de 5 + 9'));

    if (LoginCaptcha === resultadoCaptcha) {
        document.write('El resultado es correcto.¡ Bienvenido ! Resultado : '+LoginCaptcha);
        break;
    }else if (isNaN(LoginCaptcha)){
        //si no es un numero lo introducido
        alert('debes introducir un numero')
        
    
    }
     else {
        alert(`Respuesta incorrecta.\nTu numero insertado es : ${LoginCaptcha} NO ES CORRECTO \nInténtalo de nuevo.`);
        intento--;
    }
   
    if(intento===0){
        alert('has alcanzado el limite de intentos')
        window.location.href="https://mossos.gencat.cat/ca/inici"
    }
}

while (intento>0);
