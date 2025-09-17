const perimetro = (a, b) => {
  if (isNaN(a,b)) {
    return `Ingrese un numero valido`;
  } else {
    let p = 2 * (a + b);
    return `El perimetro del rectangulo con una altura de ${a} ${c} y una base de ${b} ${c} es de ${p} ${c}`;
  }
};

const a = parseInt(prompt(`Ingrese la altura del rectangulo`));
const b = parseInt(prompt(`Ingrese la base del rectangulo`));
const c = prompt(`Ingrese el sistema de unidades de medida`) 

document.writeln(perimetro(a, b));
