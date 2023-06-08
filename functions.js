// 6.a)
function suma(a, b) {
  return a + b;
}

var resultado = suma(1, 2);
console.log(resultado);

// 6.b)
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros tiene un error");
    return NaN;
  }
  return a + b;
}

var resultado = suma("un string", 15);
console.log(resultado);

// 6.c)
function validateInteger(number) {
  if (Number.isInteger(number)) {
    return true;
  } else {
    return false;
  }
}

// 6.d)
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros tiene un error");
    return NaN;
  }

  if (!validateInteger(a) || !validateInteger(b)) {
    alert("Uno de los números no es entero, por lo que se redondeará");
    a = Math.round(a);
    b = Math.round(b);
  }
  return a + b;
}
var resultado = suma(4.8, 5);
console.log(resultado);

// 6.e)
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros tiene un error");
    return NaN;
  }

  function validateInteger(number) {
    if (!Number.isInteger(number)) {
      alert("Uno de los números no es entero, por lo que se redondeará");
      return Math.round(number);
    }
    return number;
  }

  a = validateInteger(a);
  b = validateInteger(b);

  return a + b;
}

var resultado = suma(8.3, 5);
console.log(resultado);
