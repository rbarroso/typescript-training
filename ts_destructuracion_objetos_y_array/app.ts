let avenger = {
  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga"
}
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
//no importa como se ordene siempre que coincidan los nombres de los atributos
let { nombre, clave, poder} = avenger;
//Introducir : despues de una variable indica que es un alias y no un tipo de dato
// let { nombre:string, clave, poder} = avenger;
console.log(nombre, clave, poder);

// Destructuracion de array
let avengers:string[] = ["Thor", "Steve", "Tony"];
//en la Destructuracion de arrays el valor que toman las variables es secuencial
let [thor,capi,ironman] = avengers;
console.log(thor,capi,ironman);
//omitiendo objetos
let [ , ,ironman2] = avengers;
console.log(ironman2);
