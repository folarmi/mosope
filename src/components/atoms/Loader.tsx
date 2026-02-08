import { motion } from "framer-motion";
import { Cake } from "lucide-react";

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-nude-50"
    >
      <div className="relative">
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="absolute inset-[-20px] border-2 border-dashed border-espresso-900/10 rounded-full w-32 h-32"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative z-10 p-6 bg-white rounded-full shadow-soft"
        >
          <Cake size={40} className="text-earth-600" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-center space-y-2"
      >
        <h2 className="text-2xl font-serif font-bold text-espresso-900">
          Loading the celebration...
        </h2>
        <div className="flex gap-1 justify-center">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 h-2 rounded-full bg-taupe-400"
                />
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
