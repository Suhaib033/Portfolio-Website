
import { LucideIcon } from "lucide-react";

export interface Project {
  id: number | string;
  title: string;
  description: string;
  problem?: string;
  approach?: string[];
  technologies: string[];
  challenges?: string;
  results?: string;
  images: string[];
  files: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
  overview?: string;
  sections?: {
    [key: string]: {
      title: string;
      items: string[];
    };
  };
  userStory?: string;
}
