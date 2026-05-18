import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData.js';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProjectSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2800, disableOnInteraction: false }}
      breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      className="pb-12"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.title}>
          <div className="glass h-full overflow-hidden rounded-3xl">
            <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
            <div className="p-6">
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{project.category}</p>
              <h3 className="mt-2 text-xl font-black">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => <span key={item} className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-300">{item}</span>)}
              </div>
              <div className="mt-5 flex gap-3">
                <a href={project.github} className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-slate-900"><FaGithub /> Code</a>
                <a href={project.live} className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white"><FaExternalLinkAlt /> Live</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
