import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData.js';

export default function SkillsTabs() {
  const tabs = Object.keys(skills);
  const [active, setActive] = useState(tabs[0]);
  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)} className={`rounded-full px-6 py-3 font-bold transition ${active === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'glass'}`}>{tab}</button>
        ))}
      </div>
      <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills[active].map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="glass rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-2xl bg-blue-600/10 p-4 text-3xl text-blue-600 dark:text-blue-300"><Icon /></div>
                <div>
                  <h3 className="text-xl font-black">{skill.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Current confidence: {skill.level}%</p>
                </div>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
