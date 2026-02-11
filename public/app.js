const timelineData = [
  {
    title: "Notificacion enviada a administrador",
    detail: "Cambio de datos en carpeta de Ignacio Vera.",
    time: "Hoy 09:10",
  },
  {
    title: "Carga completada",
    detail: "RRHH subio nueva licencia medica.",
    time: "Hoy 08:15",
  },
  {
    title: "Solicitud aprobada",
    detail: "Descarga temporal autorizada para Carolina Pardo.",
    time: "Ayer 18:42",
  },
];

const timeline = document.getElementById("timeline");

timelineData.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "timeline-item";
  card.style.animationDelay = `${index * 0.15}s`;
  card.innerHTML = `
    <strong>${item.title}</strong>
    <div class="muted">${item.detail}</div>
    <span>${item.time}</span>
  `;
  timeline.appendChild(card);
});
