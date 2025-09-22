// === PIZZERÍA TALY ===
// Paso 1: pedir tamaño
let tamaño = prompt("Elige el tamaño de tu pizza (pequeña, mediana, grande):");
tamaño = tamaño ? tamaño.toLowerCase() : "";

let precio = 0;
let valido = true;

// Validar tamaño con switch
switch (tamaño) {
  case "pequeña":
    precio = 6;
    break;
  case "mediana":
    precio = 8;
    break;
  case "grande":
    precio = 10;
    break;
  default:
    console.log(" Pedido cancelado: tamaño no válido.");
    valido = false;
}

// Si el tamaño es válido, pedir el resto de datos
if (valido) {
  let numToppings = parseInt(prompt("¿Cuántos toppings quieres? (Ingresa un número):"));
  let domicilio = prompt("¿La quieres para llevar? (si/no):");
  domicilio = (domicilio.toLowerCase() === "si");

  // Calcular toppings con for
  let costoToppings = 0;
  for (let i = 0; i < numToppings; i++) {
    costoToppings += 1;
  }

  let subtotal = precio + costoToppings;

 // si el subtotal es menor a $10 cobra $2 para domicilio, sino es gratis... epa;)total < 10 
  let entrega = 0;
  if (domicilio && subtotal < 10) {
    entrega = 2;
  }

  let total = subtotal + entrega;

  // Salida
  console.log("PIZZERÍA TALY ");
  console.log(`Tamaño: ${tamaño} ($${precio})`);
  console.log(`Toppings: ${numToppings} ($${costoToppings})`);
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Entrega: $${entrega}`);
  console.log(`TOTAL A PAGAR: $${total}`);
}

