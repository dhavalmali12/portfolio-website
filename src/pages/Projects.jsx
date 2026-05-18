import PageWrapper from '../components/PageWrapper.jsx';
import ProjectSlider from '../components/ProjectSlider.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Projects() {
  return (
    <PageWrapper>
      <section className="container-page">
        <SectionTitle eyebrow="Projects" title="Recruiter-Friendly Project Showcase" subtitle="These project cards are written for fresher/internship applications. Edit the data file to add your real GitHub and live links." />
        <ProjectSlider />
      </section>
    </PageWrapper>
  );
}
