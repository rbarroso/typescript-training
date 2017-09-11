//Las interfaces no existen en ES6
interface Xmen {
  nombre:string,
  poder:string
}

function enviarMision( xmen: {nombre:string} ){
  console.log("Enviando a mision: " + xmen.nombre );
}

function enviarCuartel( xmen: Xmen){
  console.log("Enviando a cuartel: " + xmen.nombre );
}

let wolverine:Xmen = {
  nombre: "wolverine",
  poder: "Regeneración"
}

enviarMision(wolverine);
enviarCuartel(wolverine);
