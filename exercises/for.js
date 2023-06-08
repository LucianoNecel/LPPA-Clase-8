// 5.a)
var Spam = ["hola", "esto", "es", "spam", ":)"];

for (var i = 0; i < Spam.length; i++) {
  var index = Spam[i];
  window.alert(index);
}

// 5.b)
for (var i = 0; i < Spam.length; i++) {
  var index2 = Spam[i];
  var primeraLetraMayuscula = index2.charAt(0).toUpperCase() + index2.slice(1);
  alert(primeraLetraMayuscula);
}

// 5.c)
var frase = "";

for (var i = 0; i < Spam.length; i++) {
  var index3 = Spam[i];
  frase += index3 + " ";
}
alert(frase);

// 5.d)
var ArrayACompletar = [];

for (var i = 0; i < 10; i++) {
  ArrayACompletar.push(i);
}
console.log(ArrayACompletar);
