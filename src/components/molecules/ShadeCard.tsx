import { motion } from "framer-motion";

interface ShadeCardProps {
  title: string;
  imageSrc?: string; // Optional for now, allows color fallback
  color?: string; // Fallback color
  description: string;
  delay?: number;
}

export function ShadeCard({
  title,
  imageSrc,
  color = "bg-taupe-200",
  description,
  delay = 0,
}: ShadeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
    >
      {/* Background/Image */}
      <div className={`absolute inset-0 ${color}`}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
        <h3 className="text-2xl font-bold text-nude-50 font-serif mb-1">
          {title}
        </h3>
        <p className="text-nude-200 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
