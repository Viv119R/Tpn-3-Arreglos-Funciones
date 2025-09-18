const ciudades = [];
do {
  const newCitys = prompt(`Ingrese una ciudad`);
  ciudades.push(newCitys);
} while (confirm(`¿Desea agregar otra ciudad?`));
{
}
document.writeln(
  `<h3 class="my-3">El arreglo de ciudades tiene ${ciudades.length} elementos</h3>`
);
document.writeln(`<ul class="my-3">`);
document.writeln(`<li class="my-1">Elemento 1er posicion: ${ciudades[0]}</li>`);
document.writeln(`<li class="my-1">Elemento 3er posicion: ${ciudades[2]}</li>`);
document.writeln(
  `<li class="my-1">Elemento ultima posicion: ${
    ciudades[ciudades.length - 1]
  }</li>`
);
ciudades.push(`Paris`);
document.writeln(
  `<li class="my-4">${`Elemento ultima posicion: ${
    ciudades[ciudades.length - 1]
  }`}</li>`
);
document.writeln(`</ul>`);

ciudades.splice(1,0,`Barcelona`);

document.writeln(`<h3 class="my-3">Arreglo de ciudades</h3>`);
document.writeln(`<ul class="my-3">`);
for (let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li class="my-1">Elementos: ${ciudades[i]}</li>`);
}
document.writeln(`</ul>`);
