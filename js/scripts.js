function calcular() {
  // capturo los valores de los inputs del archivo HTML
  let valorCuenta = Number(document.getElementById("vlr_cuenta").value);
  let propina = Number(document.getElementById("vlr_propina").value);
  vlr_cuenta_resumen.value = valorCuenta;
  // calculo el valor de la propina, primero divido el valor de la propina entre 100
  propina /= 100;
  let valorPropina = propina * valorCuenta;
  vlr_propina_resumen.value = valorPropina;
  // obtengo el valor total, el mismo que el usuario pagará e imprimo los 
  // correspondientes valores en los inputs del HTML
  let valorTotal = valorCuenta + valorPropina;
  vlr_total.value = valorTotal;
}
