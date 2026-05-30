export interface Profile {
  name: string;
  departure: string;
  destination: string;
  careerChangeCount: number;
  availability: "AVAILABLE" | "UNAVAILABLE";
  trainingStartDate: string;
  biography: string;
}