import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedCard from '../components/AnimatedCard.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { profile } from '../data/portfolioData.js';

export default function Contact() {
  return (
    <PageWrapper>
      <section className="container-page">
        <SectionTitle eyebrow="Contact" title="Let’s Discuss Internship Opportunities" subtitle="This form is a frontend design. Connect it with EmailJS, Formspree, or your backend later." />
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard>
            <h3 className="text-2xl font-black">Contact Details</h3>
            <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <p className="flex items-center gap-3"><FaEnvelope className="text-blue-600" /> {profile.email}</p>
              <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-blue-600" /> {profile.location}</p>
              <p className="flex items-center gap-3"><FaGithub className="text-blue-600" /> GitHub Projects</p>
              <p className="flex items-center gap-3"><FaLinkedin className="text-blue-600" /> LinkedIn Profile</p>
            </div>
          </AnimatedCard>

          <AnimatedCard>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900/70" placeholder="Your Name" />
              <input className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900/70" placeholder="Your Email" />
              <input className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900/70" placeholder="Subject" />
              <textarea rows="5" className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900/70" placeholder="Message" />
              <button className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-xl shadow-blue-500/25">Send Message</button>
            </form>
          </AnimatedCard>
        </div>
      </section>
    </PageWrapper>
  );
}
