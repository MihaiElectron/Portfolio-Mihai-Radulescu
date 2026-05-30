export interface Technology {
  id: number;
  flight: string;
  destination: string;
  details: string[];
  gate: string;
  time: string;
  status: "BOARDING" | "ON TIME" | "GATE OPEN" | "DELAYED";
}