import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper.jsx';
import ProjectSlider from '../components/ProjectSlider.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { profile, typingRoles } from '../data/portfolioData.js';

export default function Home() {
  return (
    <PageWrapper>
      <section className="container-page grid min-h-[78vh] items-center gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 inline-flex rounded-full bg-blue-600/10 px-4 py-2 text-sm font-bold text-blue-600 dark:text-blue-300">Available for Internship Opportunities</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Hi, I am <span className="gradient-text">{profile.name}</span>
          </h1>
          <div className="mt-4 text-2xl font-bold text-slate-700 dark:text-slate-200">
            <Typewriter options={{ strings: typingRoles, autoStart: true, loop: true }} />
          </div>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Fresher Python/Django backend developer building practical web applications, clean database workflows, and modern frontend interfaces with React.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects" className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-xl shadow-blue-500/25">View Projects <FaArrowRight /></Link>
            <Link to="/resume" className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-bold text-white dark:bg-white dark:text-slate-900"><FaDownload /> Resume</Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="glass relative mx-auto max-w-md rounded-[2rem] p-5">
          <div className="aspect-square overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="flex h-full items-center justify-center rounded-[1.4rem] bg-slate-950 text-center text-white">
              <div>
                <p className="text-7xl font-black">DM</p>
                <p className="mt-3 text-lg font-semibold">Add your photo at public/profile.jpg</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-3xl p-5">
            <p className="text-3xl font-black">8+</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Core Skills</p>
          </div>
        </motion.div>
      </section>

      <section className="container-page mt-16">
        <SectionTitle eyebrow="Featured Work" title="Projects That Show Recruiters Your Potential" subtitle="Replace demo links with your GitHub repositories after uploading your projects." />
        <ProjectSlider />
      </section>
    </PageWrapper>
  );
}
