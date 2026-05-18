import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-10">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl p-6 md:flex-row">
        <p className="text-sm text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.</p>
        <div className="flex gap-3 text-xl">
          <a className="rounded-full bg-slate-200 p-3 hover:scale-110 dark:bg-slate-800" href={profile.github}><FaGithub /></a>
          <a className="rounded-full bg-slate-200 p-3 hover:scale-110 dark:bg-slate-800" href={profile.linkedin}><FaLinkedin /></a>
          <a className="rounded-full bg-slate-200 p-3 hover:scale-110 dark:bg-slate-800" href={profile.instagram}><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
