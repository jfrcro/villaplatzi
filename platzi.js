var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "fondo.png",
  cargaOK: false
}

var vaca = {
  url: "vacap.ng",
  cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

// function cargarFondo()
// {
//   fondo.cargaOK = true;
//   dibujar();
// }
//
// function cargarVacas()
// {
//   vaca.cargaOK = true;
//   dibujar();
// }

// function dibujar()
// {
//   papel.drawImage(fondo, 0, 0);
// }
//
// function aleatorio(min, max)
// {
//   var resultado;
//   resultado = Math.floor(Math.random() * (max - min + 1)) + min;
//   return resultado;
// }
