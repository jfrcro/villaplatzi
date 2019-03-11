var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

var fondo = {
  url: "tile.png",
  cargaOK: false
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
var cantidad = aleatorio(1, 10);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

var x;
var y;

function dibujar()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (cerdo.cargaOK)
  {
    // for(var v=0; v < cantidad; v++)
    // {
      x = aleatorio(0, 7);
      y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(cerdo.imagen, x, y);
    // }
  }
}

var teclasDibujar =
{
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(eventoTeclado)
{
  var colorLinea = "red";
  var movimiento = 5;

  switch (eventoTeclado.keyCode)
    {
      case teclasDibujar.LEFT:
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, x - movimiento, y);
        x = x - movimiento;
          break;
      case teclasDibujar.UP:
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, x, y - movimiento);
        y = y - movimiento;
          break;
      case teclasDibujar.RIGHT:
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, x + movimiento, y);
        x = x + movimiento;
          break;
      case teclasDibujar.DOWN:
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, x, y + movimiento)
      y = y + movimiento;
          break;
      default:
        console.log("Usa las teclas: ← ↑ → ↓ ");
          break;

    }
}
