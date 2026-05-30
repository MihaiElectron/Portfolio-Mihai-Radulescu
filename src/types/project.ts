export interface Project {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}