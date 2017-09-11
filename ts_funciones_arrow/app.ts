
//Ejemplo sencillo, lo que está detras de la flecha es el return;
let miFuncion = function(a){
  return a;
}
let miFuncionF = (a) => a;

console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));

//Ejemplo con dos parametros
let miFuncion2 = function(a:number,b:number){
  return a+b;
}
let miFuncion2F = (a:number, b:number) => a+b;

//Ejemplo con código antes del return;
let miFuncion3 = function(nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;
}
let miFuncion3F = (nombre:string) => {
  nombre = nombre.toUpperCase();
  return nombre;
}

let nombre = "Sin funcion arrow, saldrá este texto";
//A continuacion se muestra un ejemplo del motivo real para utilizar
//funciones flecha
let hulkNormal ={
  nombre: "hulk",
  //en es6, esta forma de declarar una funcion dentro de un objeto es equivalente a
  //smash: function (){}
  smash(){
    setTimeout(function(){
      //dentro de una funcion timeout this hace referencia al window.
      //Por lo tanto de esta manera, el resultado de ejecutar este código sería
      // undefined smash!!
      console.log(this.nombre + " smash!!");
    }, 1500);

  }
}

let hulkArrow ={
  nombre: "hulk",
  //en es6, esta forma de declarar una funcion dentro de un objeto es equivalente a
  //smash: function (){}
  smash(){
    setTimeout(() => console.log(this.nombre + " smash!!"), 1500);
  }
}

hulkNormal.smash();
//RESUMEN: this cuando es ejecutado dentro de una funcion flecha
//respeta el scope original desde donde es llamado
hulkArrow.smash();
