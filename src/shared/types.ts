export interface IMember {
  name: string;
  url: string;
}
export type ProjectType = "frontend" | "backend" | "app" | "oss";

export interface IProject {
  title: string;
  slug?: string;
  order: number;
  date: string | Date;
  team: IMember[];
  banner: string;
  shortDescription: string;
  category: string;
  type: ProjectType;
  technologies: string[];
}
