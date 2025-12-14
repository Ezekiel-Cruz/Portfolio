export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  image: string; // path to public image e.g. "/CookingWebsite.png"
  tech: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  link?: string;
}
