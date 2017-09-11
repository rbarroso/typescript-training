let prom1 = new Promise( function( resolve, reject){

  setTimeout(() => {
    console.log("promesa terminada!");

    // termina bien
    // resolve();

    //termina mal
    reject();

  }, 1500);
})

//las promesas son asincronas por lo tanto se verán los mensajes paso1 y paso2
//antes del resultado de la promesa
console.log("paso 1");

prom1.then(
  function(){
  console.log("ejecutarme cunado se termine bien");
},
  function(){
    console.error("ejecutarme si sale mal");
  }
);

console.log("paso 2");
