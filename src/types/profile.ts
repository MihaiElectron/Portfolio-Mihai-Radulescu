export interface Profile {
  name: string;
  departure: string;
  destination: string;
  projectsCompleted: number;
  technologiesCount: number;
  careerChangeCount: number;
  biography: string;
  availability: "AVAILABLE" | "UNAVAILABLE";
}