import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiTailwindcss } from 'react-icons/si';

export const profile = {
  name: 'Dhaval Mali',
  role: 'Python/Django Backend Developer & Frontend Learner',
  location: 'India',
  email: 'dkgelot13@gmail.com',
  phone: '+91 79840 45600',
  photo: '/profile.jpg',
  resume: '/Dhaval-Mali-Resume.pdf',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  instagram: 'https://instagram.com/your-username',
};

export const typingRoles = [
  'Python Developer',
  'Django Backend Developer',
  'Frontend Learner',
  'Internship Seeker',
  'Problem Solver',
];

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export const skills = {
  Backend: [
    { name: 'Python', level: 85, icon: FaPython },
    { name: 'Django', level: 78, icon: SiDjango },
    { name: 'SQL', level: 72, icon: FaDatabase },
  ],
  Frontend: [
    { name: 'HTML', level: 90, icon: FaHtml5 },
    { name: 'CSS', level: 82, icon: FaCss3Alt },
    { name: 'JavaScript', level: 68, icon: FaJs },
    { name: 'React', level: 62, icon: FaReact },
    { name: 'Tailwind CSS', level: 75, icon: SiTailwindcss },
  ],
  Tools: [
    { name: 'Git', level: 70, icon: FaGitAlt },
    { name: 'GitHub', level: 76, icon: FaGithub },
  ],
};

export const projects = [
  {
    title: 'Library Management System',
    category: 'Python OOP',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    description: 'OOP-based Python project with book issue, return, student records, and admin workflow.',
    tech: ['Python', 'OOP', 'File Handling'],
    github: '#',
    live: '#',
  },
  {
    title: 'Django Internship Portal',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    description: 'Django-based job/internship listing system with authentication, CRUD, and admin dashboard.',
    tech: ['Django', 'Python', 'SQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    description: 'Modern responsive portfolio with React, Tailwind, animations, routing, and project showcase.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: '#',
    live: '#',
  },
  {
    title: 'SQL Practice Dashboard',
    category: 'Database',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    description: 'Practice-focused project for SQL queries, joins, filtering, reports, and data analysis basics.',
    tech: ['SQL', 'Python', 'Data'],
    github: '#',
    live: '#',
  },
];

export const services = [
  { title: 'Backend Development', desc: 'Clean Django backend structure, models, views, authentication, and admin setup.' },
  { title: 'Frontend UI Development', desc: 'Responsive landing pages and portfolio sections using HTML, CSS, JavaScript, React, and Tailwind.' },
  { title: 'Database Design', desc: 'Basic SQL tables, relationships, queries, and Django ORM integration.' },
  { title: 'GitHub Project Setup', desc: 'README writing, project structure, screenshots, and GitHub portfolio-ready presentation.' },
];

export const resumeHighlights = [
  'BSc IT graduate focused on Python, Django, and full-stack web development.',
  'Strong foundation in Python OOP, SQL, HTML, CSS, JavaScript, React, and GitHub.',
  'Actively building real-world projects for internship and fresher backend developer roles.',
  'Interested in backend APIs, Django applications, database workflows, and clean UI implementation.',
];
