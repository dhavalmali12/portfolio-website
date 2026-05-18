import PageWrapper from '../components/PageWrapper.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import SkillsTabs from '../components/SkillsTabs.jsx';

export default function Skills() {
  return (
    <PageWrapper>
      <section className="container-page">
        <SectionTitle eyebrow="Skills" title="Technical Skills For Internship Roles" subtitle="Backend-first skillset with frontend learning, database knowledge, and GitHub workflow." />
        <SkillsTabs />
      </section>
    </PageWrapper>
  );
}
