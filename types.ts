// FIX: Import ReactNode to resolve the 'Cannot find namespace 'JSX'' error.
import type { ReactNode } from 'react';

export type Page = 'Home' | 'Services' | 'Services/SEO' | 'AI Solutions' | 'Industry' | 'Training' | 'Blog' | 'Contact';

export interface Service {
  id: number;
  title: string;
  description: string;
  // FIX: Use ReactNode instead of JSX.Element.
  icon: ReactNode;
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}