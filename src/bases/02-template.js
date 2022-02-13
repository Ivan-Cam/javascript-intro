const nombre = "Ivan";
const apellido = "Campos";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

const getSaludo = ( nombre ) => `de ${nombre}`

console.log(`Este es un texto ${getSaludo(nombre)}`)