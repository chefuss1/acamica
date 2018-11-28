//
//
// PIRAMIDE
// --------
//
// var size =5;
//
// var cadena =" ";
// for (var i = 0; i < size; i++) {
//   for (var j = 0; j < i+1 ; j++) {
//     cadena = cadena + (j+1);
//     //cadena = cadena *;
//   }
//   cadema=" ";
// }
//
// EJER; COMO MOSTRAR UNA PIRAMIDE.


function mostrarPiramide(piramide) {
  var renglon = '';
  var filas = piramide.length;
  var columnas = (filas>0) ? piramide[0].length : 0;
  for (var i=0; i<filas; i++) {
      for (var j=0; j<columnas; j++) {
        renglon += piramide[i][j];
    }
console.log(renglon);
renglon = '';
  }
}
function espaciosEnBlanco(anchoTotalDeLaPiramide, cantidadDeBloques){
  espaciosEnBlanco=(anchoTotalDeLaPiramide-cantidadDeBloques)/2;
}
  var fila=[];
function armarFila(cantidadDeLadrillos, anchoTotalDeLaPiramide){
  for (var i = 0; i < espaciosEnBlanco(anchoTotalDeLaPiramide, cantidadDeLadrillos); i++)
    fila.push(0);
  }
    for (var i = 0; i < cantidadDeLadrillos; i++) {
      fila.push(1)
    }
      for (var i = 0; i < espaciosEnBlanco(anchoTotalDeLaPiramide, cantidadDeLadrillos); i++) {
        fila.push(0);
  }
  return fila;
}

var piramide [];
var tope = 23;

for (var ladrillos = 0; ladrillos <= tope; ladrillos +2) {
  piramide.push(armarFila(ladrillos,tope));
}
mostrarPiramide(piramide)

  
