import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">{eyebrow}</p>
      <h2 className="text-3xl font-black md:text-5xl">{title}</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300">{subtitle}</p>
    </motion.div>
  );
}
