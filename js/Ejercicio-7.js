const multiplicacion= [];
const nro = parseInt(prompt(`Ingrese un numero`));
let resultado;

for (let i = 1; i <= 10; i++) {
  resultado = nro * i;
  console.log(resultado);
  multiplicacion.push(resultado);
}
document.writeln(`<h3>Tabla de multiplicar del ${nro}</h3>`);
document.writeln(
  `<table class="table table-striped-columns my-3 border border-dark">`
);
document.writeln(`<thead>`);
document.writeln(`<tr>`);
document.writeln(`<th scope="col" class="text-center">Multiplos</th>`);
document.writeln(`<th scope="col" class="text-center">Resultados</th>`);
document.writeln(`</tr>`);
document.writeln(`</thead>`);
document.writeln(`<tbody>`);
for (let i = 1; i <= 10; i++) {
  document.writeln(`<tr>`);
  document.writeln(`<td class="text-center">${i}</td>`);
  document.writeln(`<td class="text-center">${multiplicacion[i-1]}</td>`);
  document.writeln(`</tr>`);
}
document.writeln(`</tbody>`);
document.writeln(`</table>`);