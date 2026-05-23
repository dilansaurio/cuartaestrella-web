import type { VisitType, ScheduleEntry } from "@/types";

export const visitTypes: VisitType[] = [
  {
    id: "public",
    title: "Visita pública",
    description:
      "Abierta a todo público. Incluye charla introductoria, observación guiada y tiempo libre con los telescopios.",
    duration: "2 horas",
    price: "Consultar",
  },
  {
    id: "school",
    title: "Visita escolar",
    description:
      "Diseñada para grupos de estudiantes con contenido adaptado al nivel educativo. Requiere reserva previa.",
    duration: "2 a 3 horas",
    price: "Consultar",
  },
  {
    id: "private",
    title: "Visita privada",
    description:
      "Experiencia personalizada para grupos reducidos o familias. Atención exclusiva de un guía especializado.",
    duration: "A convenir",
    price: "Consultar",
  },
];

export const schedule: ScheduleEntry[] = [
  { day: "Viernes", hours: "21:00 – 00:00" },
  { day: "Sábado", hours: "20:30 – 00:30" },
  { day: "Domingo", hours: "20:30 – 23:30" },
  {
    day: "Lunes – Jueves",
    hours: "Cerrado al público",
    note: "Solo visitas grupales con reserva",
  },
];
