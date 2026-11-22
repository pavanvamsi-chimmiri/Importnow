export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  hub: string;
  hubFlag?: string;
  title: string;
  items: string[];
  badge: string;
  icon?: string;
}

export interface JourneyStep {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  route: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface ContactInfo {
  phone: string;
  instagram: string;
  offices: string;
}

export interface AuthUser {
  name: string;
  email: string;
  city: string;
  passwordHash: string;
  createdAt: string;
}

export interface AuthSession {
  name: string;
  email: string;
  city: string;
}
