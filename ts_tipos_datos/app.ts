let nombre:string = "Peter";
let numero:number = 12;
let boolenao:boolean = true;
let hoy:Date = new Date();

let cualquiera:any;

let spiderman = {
  nombre: "Peter",
  edad: 20
}

// ****** Ejemplo declaración de array
  let list1: number[] = [1, 2, 3];
  //Ejemplo declaración de arry con genericos
  let list2: Array<number> = [1, 2, 3];


// ****** Ejemplo declaración de una tupla
  let x: [string, number];
  // Inicializando correctamente
  x = ["hello", 10]; // OK
  // Ejemplo de inicialización erronea
  //x = [10, "hello"]; // Error

  // console.log(x[0].substr(1)); // OK
  // console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

  //Revisar los unions types y como se comportan con las tuplas

// ****** Ejemplo de enums
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;

  //Por defecto el valor de los enums empieza en 0, por lo tanto red = 0 y c = 1
  console.log(Color.Red, c);

  //Se puede cambiar el valor de inicio de los enums asignandole valor al primer
  //elemento
  enum Color2 {Red = 1, Green, Blue}
  let c2: Color2 = Color2.Green;
  //Donde c2 será igual a 2
  console.log(c2);

  // También puede asignarse valor a cada uno de los valores manualmente
  enum Color3 {Red = 1, Green = 4, Blue = 6}
  let c3: Color3 = Color3.Green;
  // donde c3 será igual a 4
  console.log(c3);

  // O podemos acceder al nombre o clave de cada enum a partir del valor númerico
  // que contenga
  enum Color4 {Red = 3, Green = 5, Blue}
  let colorName: string = Color4[5];
  // Imprimirá por pantalla "Green"
  alert(colorName);

// ****** any
  let notSure: any = 4;
  notSure = "maybe a string instead";
  notSure = false; // okay, definitely a boolean
  // Puede utilizarse en un array
  let list: any[] = [1, true, "free"];
  list[1] = 100;

  // Los tipos de objeto any y object no se comportan igual.
  // En un objeto de tipo any puede invicarse cualquier método incluso aunque no
  // exista en el tipo de objeto.
  // En un objeto de tipo object no pueden invocarse
  // métodos incluso aunque el objeto contenido lo tenga

  let pruebaAnyMetodos: number = 4;
  pruebaAnyMetodos.toFixed();
  pruebaAnyMetodos.toPrecision();
  // pruebaAnyMetodos.ifItExists(); // El compilador sabe que es un método que no exisite y da error

  let notSure2: any = 4;
  // notSure2.ifItExists(); // El compilador supone que existirá en tiempo de ejecución y no da error. Pero en realidad el método no existe y en ejecución dara error
  notSure2.toFixed(); // El compilador supone que existe y en realidad existe en un objeto de tipo number. En ejecución tampoco da error.
  // notSure2.toPrecision2(); // El compilador no da error pero por supuesto, no existe el método.

  let prettySure: Object = 4;
  // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
  // prettySure.toPrecision(); // Error: Property 'toPrecision' does not exist on type 'Object'.
  prettySure.constructor(); // El tipo object solo permite invocar métodos de ese tipo

// ****** void // se utiliza para indicar la ausencia de valor, generalmente en retornos de funciones
  function warnUser(): void {
      alert("This is my warning message");
  }

  // Declarando variables no tiene sentido, solo puede contener dos valores: undefined o null
  let unusable: void = undefined;
  let unusable2: void = null;
  // let unusable3: void = 2; // error: Type '2' is not assignable to type 'void'.

// ****** casting o type assertions
  //Puede hacerse con bracket o con la palabra reservada "as"
  let someValue: any = "this is a string";
  let strLength: number = (<string>someValue).length;

  let someValue2: any = "this is a string";
  let strLength2: number = (someValue2 as string).length;
