function getNombre(){
  return  "prueba";
}
let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

//se pueden formar templates con la sintaxis ${}
let texto = `Hola, ${nombre} ${apellido} (${edad})`;

//Se puede meter cualquier tipo de código javascript
let texto2 = `${getNombre()}`;

console.log(texto);
console.log(texto2);
