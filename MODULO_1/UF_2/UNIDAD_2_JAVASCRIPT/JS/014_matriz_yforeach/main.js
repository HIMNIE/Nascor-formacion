let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

document.write("imprimir los numeros: 3 y 5 : <br>")
document.write(matriz[0][2]);
document.write('<br>');
document.write(matriz[1][1]);
document.write('<hr>')

function escribe(valor, indice, array) {
    document.write(valor + '<br>');
}
matriz.forEach(escribe);


document.write('<hr>')


function cambiar(valor, indice, array) {
    valor.forEach(function (valorx) {

        if (valorx % 3 === 0) {
            document.write("m"  );
        } else {
            document.write(valorx );
        }
        document.write(" | ")  
    })

    document.write("<br>")    

}




matriz.forEach(cambiar);
