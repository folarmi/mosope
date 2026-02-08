import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all"
    >
      {icon && <div className="mb-4 text-taupe-400">{icon}</div>}
      <h3 className="text-xl font-bold text-espresso-900 mb-2">{title}</h3>
      <p className="text-espresso-700/80 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}
