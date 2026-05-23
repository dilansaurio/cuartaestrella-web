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

export interface GalleryImage {
  src: string;
  alt?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface LocationDetail {
  label: string;
  content: string;
}

export interface LocationData {
  details: LocationDetail[];
  mapEmbedUrl: string;
  mapTitle: string;
}
