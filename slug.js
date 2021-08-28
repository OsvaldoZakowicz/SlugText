/**
 * Obtengo el valor del input de entrada y de salida.
 * Genero un slug en base a la entrada.
 * Retorno el slug en el input de salida
 * @returns 
 */
function slug() {
  const entrada = document.getElementById('entrada');
  const salida = document.getElementById('salida')
  const slug = entrada.value.trim().replace(/\s+/g,'-');
  return salida.value = slug;
}
