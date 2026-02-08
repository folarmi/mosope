import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

interface JokeCardProps {
  context: string;
  punchline: string;
}

export function JokeCard({ context, punchline }: JokeCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      onClick={() => setIsRevealed(!isRevealed)}
      className="relative cursor-pointer group h-full"
    >
      <motion.div
        layout
        className={`h-full p-6 rounded-2xl border transition-all duration-300 ${
          isRevealed
            ? "bg-espresso-900 text-nude-100 border-espresso-900"
            : "bg-white/50 border-white/60 hover:border-taupe-300"
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold uppercase tracking-wider opacity-50">
            {isRevealed ? "The Meaning" : "The Context"}
          </span>
          {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
        </div>
        
        <p className={`text-lg font-medium leading-relaxed ${isRevealed ? "font-serif italic text-taupe-300" : "text-espresso-800"}`}>
          {isRevealed ? punchline : context}
        </p>
        
        <div className="mt-4 text-xs opacity-40 text-right">
            {isRevealed ? "Click to hide" : "Tap to reveal"}
        </div>
      </motion.div>
    </div>
  );
}
