document.getElementById("btn").addEventListener("click", function () {
  const ahora = new Date().toLocaleString("es-CL");
  document.getElementById("resultado").textContent = "Hora del navegador: " + ahora;
});
