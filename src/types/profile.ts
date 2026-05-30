export interface Profile {
  name: string;
  departure: string;
  destination: string;
  careerChangeCount: number;
  availability: "AVAILABLE" | "UNAVAILABLE";
  trainingStartDate: string;
  biography: string;
  email: string;
  githubUrl: string;
  githubLabel: string;
  linkedinUrl: string;
  linkedinLabel: string;
  cvUrl: string;
  iataCode: string;
  icaoCode: string;
}