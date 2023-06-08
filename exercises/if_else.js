// 4.a)

NumAlea = Math.random(1);
if (NumAlea >= 0.5) {
  window.alert("Greater than 0,5");
} else {
  window.alert("Lower than 0,5");
}

// 4.b)

Age = Math.floor(Math.random() * 101);
if (Age < 2) {
  window.alert("Bebe");
} else if (Age >= 2 && Age < 12) {
  window.alert("Niño");
} else if (Age >= 13 && Age < 19) {
  window.alert("Adolescente");
} else if (Age >= 20 && Age < 30) {
  window.alert("Joven");
} else if (Age >= 31 && Age < 60) {
  window.alert("Adulto");
} else if (Age >= 61 && Age < 75) {
  window.alert("Adulto mayor");
} else {
  window.alert("Anciano");
}
