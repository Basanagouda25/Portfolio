
import React from 'react';

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Project {
  title: string;
  year: number;
  tags: string[];
  description: string[];
  githubUrl: string;
}

export interface Certificate {
  title: string;
  year: number;
  description: string;
  url: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface SocialLink {
    name: string;
    url: string;
    // FIX: React.ComponentType requires the React namespace, which is made available by importing React.
    icon: React.ComponentType<{ className?: string }>;
}

export interface ContactInfo {
    name: string;
    value: string;
    url: string;
    // FIX: React.ComponentType requires the React namespace, which is made available by importing React.
    icon: React.ComponentType<{ className?: string }>;
}