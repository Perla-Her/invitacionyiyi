// ============ 1. TUS DATOS (edita solo esta parte) ============
const DATOS = {
  nombre: "Angeles",                          // nombre del festejado
  fecha: "2026-12-16T16:00:00",             // año-mes-díaTHH:MM:SS (hora de 24 h)
  fechaTexto: "Sábado 26 de diciembre, 4:00 p. m.",
  lugar: "Salón Social San Pedro",          // nombre del lugar
  direccion: "C. 88 Pte. 578, INFONAVIT San Pedro, 72220 Heroica Puebla de Zaragoza, Pue.",
  mapa: "https://maps.app.goo.gl/orARt3GR2anCGUhZA",              // enlace copiado de Google Maps (Compartir > Copiar vínculo)
  //whatsapp: "523300000000",                 // 52 + lada + número, sin espacios ni signos
};

// ============ 2. LLENAR EL TEXTO DE LA PÁGINA ============
document.getElementById("nombre").textContent = DATOS.nombre;
document.getElementById("txt-fecha").textContent = DATOS.fechaTexto;
// El texto del lugar es un enlace que abre Google Maps
const enlaceLugar = document.getElementById("txt-lugar");
enlaceLugar.textContent = DATOS.lugar + ". " + DATOS.direccion;
enlaceLugar.href = DATOS.mapa;

// ============ 3. BOTÓN DE WHATSAPP ============
//const mensaje = "¡Hola! Confirmo mi asistencia al cumpleaños de " + DATOS.nombre + ".";
//document.getElementById("btn-confirmar").href =
//  "https://wa.me/" + DATOS.whatsapp + "?text=" + encodeURIComponent(mensaje);

// ============ 4. CUENTA REGRESIVA ============
const cuenta = document.getElementById("cuenta");
function actualizarCuenta() {
  const falta = new Date(DATOS.fecha) - new Date();
  if (falta <= 0) {
    cuenta.textContent = "La fiesta ya comenzó";
    return;
  }
  const dias = Math.floor(falta / 86400000);
  const horas = Math.floor(falta / 3600000) % 24;
  const minutos = Math.floor(falta / 60000) % 60;
  cuenta.textContent = dias + " días · " + horas + " h · " + minutos + " min";
}
actualizarCuenta();
setInterval(actualizarCuenta, 60000);

// ============ 5. FLECHAS DEL CARRETE ============
const carrete = document.getElementById("carrete");
const paso = () => carrete.querySelector("figure").offsetWidth + 16;  // ancho de una foto
document.getElementById("adelante").addEventListener("click", () => carrete.scrollBy({ left: paso(), behavior: "smooth" }));
document.getElementById("atras").addEventListener("click", () => carrete.scrollBy({ left: -paso(), behavior: "smooth" }));
