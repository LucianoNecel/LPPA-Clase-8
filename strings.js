// 2.a)
var Palabra1L10 = "exquisitez";
console.log(Palabra1L10.toUpperCase());

// 2.b)
var Palabra2L10 = "fabricante";
var Palabra1L5 = Palabra2L10.substring(0, 5);
console.log(Palabra1L5);

// 2.c)
var Palabra3L10 = "vaciaremos";
var Palabra1L3 = Palabra3L10.substring(7, 10);
console.log(Palabra1L3);

// 2.d)
//#region  "codigo viejo"
//var Palabra4L10 = "compadezco"
//var Palabra1L1 = Palabra4L10.substring(0, 1)
//varPalabra1L9 = Palabra4L10.substring(1, 10)
//console.log(Palabra1L1.toUpperCase() + Palabra1L9)
//#endregion

var Palabra4L10 = "compadezco";
var PalabraNueva =
  Palabra4L10.substring(0, 1).toUpperCase() +
  Palabra4L10.substring(1, 10).toLowerCase();
console.log(PalabraNueva);

// 2.e)
var Palabra5L10 = "hola mundo";
var posicionEspacio = Palabra5L10.indexOf(" ");
console.log(posicionEspacio);

// 2.f)
var Palabra5L10 = "hola mundo";
var posicionEspacio2 = Palabra5L10.indexOf(" ");
var palabra1 = Palabra5L10.substring(0, posicionEspacio2);
var palabra2 = Palabra5L10.substring(posicionEspacio2 + 1);
FraseFinal =
  palabra1.substring(0, 1).toUpperCase() +
  palabra1.substring(1, 4).toLowerCase() +
  " " +
  palabra2.substring(0, 1).toUpperCase() +
  palabra2.substring(1, 5).toLowerCase();
console.log(FraseFinal);