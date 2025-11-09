
import type { NavLink, SocialLink, EducationItem, SkillCategory, Project, Certificate, ContactInfo } from './types';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, EmailIcon, PhoneIcon } from './components/icons';

export const NAV_LINKS: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/Basanagouda25', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/basanagouda-d-b36523339/', icon: LinkedinIcon },
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'B.Tech in CSE',
        institution: 'Dayananda Sagar University',
        period: '2023 – 2027',
        grade: '8.2 CGPA',
    },
    {
        degree: 'PUC',
        institution: 'Sri Sharadha Pu College',
        period: '2021 – 2023',
        grade: '86%',
    },
];

export const SKILLS_DATA: SkillCategory[] = [
    { title: 'Languages', skills: [{ name: 'Java' }, { name: 'Python' }, { name: 'Kotlin' }, { name: 'HTML5' }, { name: 'CSS3' }, { name: 'SQL' }] },
    { title: 'Frameworks/Tools', skills: [{ name: 'Jetpack Compose' }, { name: 'Android SDK' }, { name: 'Django' }, { name: 'Bootstrap' }] },
    { title: 'Developer Tools', skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Jupyter Notebook' }, { name: 'Google Colab' }, { name: 'Firebase' }, { name: 'VS Code' }, { name: 'Android Studio' }, { name: 'Notion' }] },
    { title: 'Databases', skills: [{ name: 'MySQL' }, { name: 'Room' }] },
    { title: 'AI Tools', skills: [{ name: 'ChatGPT' }, { name: 'Google Gemini' }, { name: 'Claude' }] },
    { title: 'Soft Skills', skills: [{ name: 'Communication' }, { name: 'Time Management' }, { name: 'Project Management' }, { name: 'Team Work' }] },
    { title: 'Core Concepts', skills: [{ name: 'OOPS' }, { name: 'DBMS' }, { name: 'OS' }] },
    { title: 'Languages Known', skills: [{ name: 'English' }, { name: 'Kannada' }, { name: 'Hindi' }] },
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'Doctor Appointment Booking App',
        year: 2025,
        tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
        description: [
            'Mobile app for browsing doctors and booking appointments.',
            'Simple UI for patient-doctor interactions via Call/SMS.'
        ],
        githubUrl: 'https://github.com/Basanagouda25/Appointment_Booking',
    },
    {
        title: 'Resume Builder Web App',
        year: 2025,
        tags: ['Django', 'MySQL', 'HTML/CSS', 'Bootstrap', 'XHTML2PDF'],
        description: [
            'Generate professional resume PDFs dynamically.',
            'Secure login/registration and conditional PDF sections.'
        ],
        githubUrl: 'https://github.com/Basanagouda25/Resume_Builder',
    },
    {
        title: 'Kotlin Multiplatform Documentation',
        year: 2025,
        tags: ['Technical Writing', 'GitHub', 'Kotlin Multiplatform'],
        description: [
            'Technical documentation hosted on GitHub.',
            'Covers setup, architecture, and cross-platform explanation.'
        ],
        githubUrl: 'https://github.com/Basanagouda25/Kotlin-Multiplatform',
    },
];

export const CERTIFICATES_DATA: Certificate[] = [
    {
        title: 'Udemy Android Development',
        year: 2025,
        description: 'Completed a hands-on Android development course using Kotlin and Jetpack Compose, building multiple mini-apps.',
        url: 'https://www.udemy.com/certificate/UC-d785d7b2-e169-413c-88f8-4bb32cd81abe/',
    }
];

export const CONTACT_DATA: ContactInfo[] = [
     { name: 'Email', value: 'basanagoudad25@gmail.com', url: 'mailto:basanagoudad25@gmail.com', icon: EmailIcon },
     { name: 'Phone', value: '+91-7975293887', url: 'tel:+917975293887', icon: PhoneIcon },
     { name: 'GitHub', value: 'Basanagouda25', url: 'https://github.com/Basanagouda25', icon: GithubIcon },
     { name: 'LinkedIn', value: 'basanagouda-d', url: 'https://www.linkedin.com/in/basanagouda-d-b36523339/', icon: LinkedinIcon },
     { name: 'LeetCode', value: 'Basanagouda25', url: 'https://leetcode.com/u/Basanagouda25/', icon: LeetcodeIcon },
];
