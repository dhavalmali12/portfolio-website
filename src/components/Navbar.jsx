import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navLinks, profile } from '../data/portfolioData.js';

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const active = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'text-slate-700 hover:bg-slate-200/70 dark:text-slate-200 dark:hover:bg-white/10'}`;

  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-3xl px-5 py-3">
        <Link to="/" className="text-xl font-black tracking-tight">
          <span className="gradient-text">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => <NavLink key={link.path} to={link.path} className={active}>{link.name}</NavLink>)}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setDark(!dark)} className="rounded-full bg-slate-200 p-3 text-slate-900 transition hover:scale-105 dark:bg-slate-800 dark:text-white">
            {dark ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen(!open)} className="rounded-full bg-blue-600 p-3 text-white lg:hidden">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="glass mx-auto mt-3 grid max-w-6xl gap-2 rounded-3xl p-4 lg:hidden">
          {navLinks.map((link) => <NavLink onClick={() => setOpen(false)} key={link.path} to={link.path} className={active}>{link.name}</NavLink>)}
        </motion.div>
      )}
    </motion.nav>
  );
}
