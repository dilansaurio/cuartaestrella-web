export interface VisitType {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}

export interface ScheduleEntry {
  day: string;
  hours: string;
  note?: string;
}
