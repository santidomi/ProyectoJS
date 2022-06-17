
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-teclado $8000 2-mouse $4500 3-mousepad $2000 4-auriculares $10000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Teclado, indique la cantidad deseada a comprar"))
            total += cantidad(seleccionarCantidad, 8000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Mouse, indique la cantidad deseada a comprar"))
        total += cantidad(seleccionarCantidad, 4500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Mousepad, indique la cantidad deseada a comprar"))
      total += cantidad(seleccionarCantidad, 2000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Auriculares, indique la cantidad deseada a comprar"))
      total += cantidad(seleccionarCantidad, 10000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-teclado $8000 2-mouse $4500 3-mousepad $2000 4-auriculares $10000 "))
}

alert("el total de la compra es de: " + total)

