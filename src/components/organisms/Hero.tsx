import { motion } from "framer-motion";
import { Sparkles, Heart, ArrowDown } from "lucide-react";
import { Button } from "../atoms/Button";
import coverImage from "../../assets/coverImage.jpeg"; // Assuming this path is correct now relative to component

export function Hero({ herName }: { herName: string }) {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center px-5 pt-24 pb-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-md text-espresso-800 text-sm font-medium"
          >
            <Sparkles size={14} className="text-taupe-400" />
            <span>Happy Birthday, {herName}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-espresso-900 leading-[0.9] -ml-1"
          >
            The Art of <br />
            <span className="text-taupe-400 italic font-serif pr-2">Being You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-espresso-700/80 max-w-xl leading-relaxed text-balance"
          >
            Your specific kind of magic deserves its own digital space. Not just
            for today, but because you are worth celebrating every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button href="#gallery" withArrow>
              View Memories
            </Button>
            <Button href="#wish" variant="secondary">
              Read Letter
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-espresso-900/10 hover:rotate-0 transition-transform duration-700"
          >
            <div className="absolute inset-0 bg-taupe-200">
               <img 
                src={coverImage} 
                alt={herName} 
                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-lg">
              <div className="flex justify-between items-end text-nude-50">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">
                    Current Vibe
                  </p>
                  <p className="font-medium text-lg">Soft Life & Success</p>
                </div>
                <div className="p-2 bg-white/20 rounded-full">
                    <Heart className="text-nude-50 fill-nude-50" size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-espresso-900/20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
