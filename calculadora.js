function calculadora(operacion, numeroUno, numeroDos) {
  if (operacion == "suma") {
    let resultado = numeroUno + numeroDos;
    return resultado;
  } else if (operacion == "resta") {
    let resultado = numeroUno - numeroDos 
    return resultado;
  } else if (operacion == "multiplicacion") {
    let resultado = numeroUno * numeroDos
    return resultado;
  } else if (operacion == "divicion") {
    let resultado = numeroUno / numeroDos
    return resultado;
  } else {
    return "error";
  }
}
@
console.log(calculadora("suma", 1234, 9878));
