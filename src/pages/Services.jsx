import AnimatedCard from '../components/AnimatedCard.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { services } from '../data/portfolioData.js';

export default function Services() {
  return (
    <PageWrapper>
      <section className="container-page">
        <SectionTitle eyebrow="Services" title="What I Can Help With" subtitle="Simple, practical services that match fresher developer skills and internship tasks." />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedCard key={service.title}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">{index + 1}</div>
              <h3 className="text-2xl font-black">{service.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{service.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
