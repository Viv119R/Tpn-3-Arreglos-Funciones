const comparar = (nro) => {
    if (nro % 2 === 0){
        return `El numero ${nro} es par`;
    } else {
        return `El numero ${nro} es impar`;
    }
};

const nro = parseInt(prompt(`Ingrese un numero`));
document.writeln(comparar(nro));