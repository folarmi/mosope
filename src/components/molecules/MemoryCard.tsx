import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";

interface MemoryCardProps {
  title: string;
  detail: string;
  tag: string;
  delay?: number;
}

export function MemoryCard({ title, detail, tag, delay = 0 }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white p-8 rounded-3xl shadow-soft border border-white/60 hover:border-taupe-200 transition-colors group"
    >
      <Badge className="mb-4 bg-taupe-50 text-taupe-600 group-hover:bg-taupe-100 transition-colors">
        {tag}
      </Badge>
      <h3 className="text-xl font-bold text-espresso-900 mb-3">{title}</h3>
      <p className="text-espresso-700/80 leading-relaxed">{detail}</p>
    </motion.div>
  );
}
