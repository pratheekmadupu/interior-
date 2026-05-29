import { motion } from 'framer-motion';

export function SectionHeader({ title, subtitle, italicWord, center = true, dark = false }) {
  const parts = title.split(italicWord);

  return (
    <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-[0.65rem] font-semibold uppercase tracking-[0.3em] block mb-3 ${
          dark ? 'text-gold' : 'text-gold-dark'
        }`}
      >
        {subtitle}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`font-serif text-3xl sm:text-5xl font-light leading-tight ${
          dark ? 'text-white' : 'text-primary'
        }`}
      >
        {italicWord ? (
          <>
            {parts[0]}
            <span className="italic text-gold font-normal">{italicWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`w-12 h-[1px] bg-gold mt-6 ${center ? 'mx-auto' : 'mr-auto'}`}
      />
    </div>
  );
}
