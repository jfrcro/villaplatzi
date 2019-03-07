var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
