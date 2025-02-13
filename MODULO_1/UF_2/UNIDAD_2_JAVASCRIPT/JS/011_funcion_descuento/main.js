function calculaDescuento(precio, descuento) {
    let descuentoAplicado = descuento * precio / 100;
    let precioFinalCalculado = precio - descuentoAplicado;
    
    return precioFinalCalculado;
 }
 
 const precioProducto = parseInt(prompt('Introdce el precio del producto'));
 
 const descuento = parseInt(prompt('Introdce el descuento a aplicar'));
 
 let precioFinal = calculaDescuento(precioProducto, descuento);
 
 alert('El precio final del producto descontado un ' + descuento + '% es: ' + precioFinal);
 
  document.write('El precio final del producto descontado un ' + descuento + '% es: ' + precioFinal)