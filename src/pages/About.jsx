import AnimatedCard from '../components/AnimatedCard.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <PageWrapper>
      <section className="container-page">
        <SectionTitle eyebrow="About Me" title="Fresher Developer With Backend Focus" subtitle="I am learning by building projects and improving my Python, Django, frontend, database, and GitHub skills every day." />
        <div className="grid gap-6 lg:grid-cols-3">
          <AnimatedCard className="lg:col-span-2">
            <h3 className="text-2xl font-black">Who I Am</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              My name is Dhaval Mali. I am a Python/Django backend developer and frontend learner looking for internship opportunities. I enjoy creating practical projects, understanding backend logic, writing clean code, and connecting frontend designs with real data.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              As a fresher, my goal is to join a team where I can learn from real projects, improve problem-solving skills, and contribute with dedication, consistency, and strong fundamentals.
            </p>
          </AnimatedCard>
          <AnimatedCard>
            <h3 className="text-2xl font-black">Focus Areas</h3>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✅ Python programming</li>
              <li>✅ Django backend development</li>
              <li>✅ SQL database basics</li>
              <li>✅ React frontend learning</li>
              <li>✅ GitHub project presentation</li>
            </ul>
          </AnimatedCard>
        </div>
      </section>
    </PageWrapper>
  );
}
