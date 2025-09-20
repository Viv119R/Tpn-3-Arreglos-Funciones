const dado = Array(11).fill(0);
let suma;

for (let i = 1; i <= 50; i++) {
  //usar Math.ceil preferiblemente antes que Math.floor
  let dado1 = Math.ceil(Math.random() * 6);
  let dado2 = Math.ceil(Math.random() * 6);
  suma = dado1 + dado2;
  console.log(suma);
  dado[suma - 2]++;
}
console.log(dado);
document.writeln("<h3>Frecuencia de las sumas en 50 lanzamientos</h3>");
document.writeln(
  `<table class="table table-striped-columns my-3 border border-dark">`
);
document.writeln(`<thead>`);
document.writeln(`<tr>`);
document.writeln(`<th scope="col" class="text-center">Dados 🎲🎲</th>`);
document.writeln(`<th scope="col" class="text-center">Apariciones</th>`);
document.writeln(`</tr>`);
document.writeln(`</thead>`);
document.writeln(`<tbody>`);
for (let i = 2; i <= 12; i++) {
  document.writeln(`<tr>`);
  document.writeln(`<td class="text-center">${i}</td>`);
  document.writeln(`<td class="text-center">${dado[i - 2]}</td>`);
  document.writeln(`</tr>`);
}
document.writeln(`</tbody>`);
document.writeln(`</table>`);
