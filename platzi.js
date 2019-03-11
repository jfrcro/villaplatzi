var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = new Image();
  fondo.src = "tile.png";
  fondo.addEventListener("load", dibujarFondo);
var vaca = new Image();
  vaca.src = "vaca.png";
  vaca.addEventListener("load", dibujarVacas);
var cerdo = new Image();
  cerdo.src = "cerdo.png";
  cerdo.addEventListener("load", dibujarCerdos);
var pollo = new Image();
  pollo.src = "pollo.png";
  pollo.addEventListener("load", dibujarPollos);

function dibujarFondo()
{
  papel.drawImage(fondo, 0, 0);
}
function dibujarVacas()
{
  papel.drawImage(vaca, 10, 10);
}
function dibujarCerdos()
{
  papel.drawImage(cerdo, 10, 300);
}
function dibujarPollos()
{
  papel.drawImage(pollo, 300, 150);
}



function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
