class Avenger {

  nombre:string = "Sin nombre";
  equipo:string;
  nombreReal:string;

  puedePelear:boolean;
  peleasGanadas:number;

  constructor(nombre:string,equipo:string, nombreReal:string){
    console.log("se ejecuto el constructor");
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal =  nombreReal;
  }

}

let antman:Avenger = new Avenger("antman", "capi", "Scott Lang");

console.log(antman);
