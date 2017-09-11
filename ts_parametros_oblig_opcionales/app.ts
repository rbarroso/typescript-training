//quien es un parametro obligatorio que ademas determina el tipo como string
//el parametro objeto es un parametro opcional con valor por defecto
//momento es un parametro opcional
//restricciones los parametros obligatorios tienen que ir al principio. Es debido al orden,
//en la llamada al método no pueden omitirse parametros
function activar(quien:string, objeto:string = "bateñal", momento?:string) {
  let mensaje:string;
  if (momento){
    mensaje = `${quien} activo la ${objeto} ${momento}`;
  } else {
    mensaje = `${quien} activo la ${objeto}`;
  }
  console.log(mensaje);
}
activar("gordon");
activar("gordon", "linterna");
activar("gordon", "linterna", "por la tarde");
