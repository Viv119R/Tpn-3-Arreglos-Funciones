const meses = [`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`, `Junio`, `Julio`, `Agosto`, `Septiembre`, `Octubre`, `Noviembre`, `Diciembre`];

  document.writeln(`<h3 class="my-3">Lista de Meses</h3>`);
  document.writeln(`<ul class="my-3">`);
  for (let i = 0; i < meses.length; i++) {
    document.writeln(`<li class="my-1">${meses[i]}</li>`);
  }
  document.writeln(`</ul>`);