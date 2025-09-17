const comparar = (string) => {
  switch (true) {
    case string.length === 0:
      return `No ingresaste texto`;
    case string === string.toUpperCase():
      return `Tu texto solo contiene mayusculas`;
      break;
    case string === string.toLowerCase():
      return `Tu texto solo contiene minusculas`;
      break;
    default:
      return `Tu texto usa mayusculas y minusculas`;
      break;
  }
};

const text = prompt(`Ingrese unas palabras`);
document.writeln(comparar(text));
