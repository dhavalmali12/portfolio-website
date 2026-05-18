import { FaDownload } from 'react-icons/fa';
import AnimatedCard from '../components/AnimatedCard.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { profile, resumeHighlights } from '../data/portfolioData.js';

export default function Resume() {
  return (
    <PageWrapper>
      <section className="container-page">
        <SectionTitle eyebrow="Resume" title="Internship-Ready Profile" subtitle="Add your PDF resume in the public folder and update the resume path in portfolioData.js." />
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard>
            <h3 className="text-2xl font-black">Career Objective</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              To start my career as a Python/Django developer intern where I can apply backend development fundamentals, learn from real-world projects, and grow into a strong full-stack developer.
            </p>
            <a href={profile.resume} className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white"><FaDownload /> Download Resume</a>
          </AnimatedCard>
          <AnimatedCard>
            <h3 className="text-2xl font-black">Highlights</h3>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
              {resumeHighlights.map((item) => <li key={item}>✅ {item}</li>)}
            </ul>
          </AnimatedCard>
        </div>
      </section>
    </PageWrapper>
  );
}
