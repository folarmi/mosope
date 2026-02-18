
import { motion } from "framer-motion";

interface BirthdayCakeProps {
  variant?: 1 | 2 | 3;
  candleCount?: 1 | 3;
}

export function BirthdayCake({ variant = 1, candleCount = 1 }: BirthdayCakeProps) {
  // Define color palettes based on variant
  const getColors = () => {
    switch (variant) {
      case 2: // Peach & Gold
        return {
          plate: "#D4AF37", // Gold
          plateStroke: "#C5A028",
          bottomLayer: "#FFCCB0", // Richer Peach
          bottomDetail: "#E8B89C",
          topLayer: "#FFD9C2", // Lighter Peach
          topDetail: "#E8C2AC",
          icing: "#FFF8F0", // Warm White
          icingStroke: "#E6C200", // Goldish stroke
          decorations: "#FFD700", // Gold
          candle: "#FFB7B2", // Pinkish candle
        };
      case 3: // Ombre Peach
        return {
          plate: "#E5E5E5",
          plateStroke: "#D4D4D4",
          bottomLayer: "#FF9E80", // Darkest Peach
          bottomDetail: "#E68A6B",
          topLayer: "#FFBC9D", // Medium Peach
          topDetail: "#E6A587",
          icing: "#FFDAC1", // Lightest Peach Icing
          icingStroke: "#FFF",
          decorations: "#FF6B6B", // Coral
          candle: "#FFCCB0",
        };
      case 1: // Soft Peach (Default)
      default:
        return {
          plate: "#E5E5E5",
          plateStroke: "#D4D4D4",
          bottomLayer: "#FFDAC1", // Pastel Peach
          bottomDetail: "#E8C2AC",
          topLayer: "#FFE5D9", // Very Light Peach
          topDetail: "#EAD0C6",
          icing: "#FFF", // White
          icingStroke: "#FFE5D9", // Subtle blend
          decorations: "#FFB7B2", // Soft Pink/Peach
          candle: "#B2F7EF", // Soft Mint (Contrast)
        };
    }
  };

  const colors = getColors();

  return (
    <div className="relative w-64 h-64 mx-auto my-8">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        {/* Cake Stand */}
        <path
          d="M40 160 L160 160 L150 180 L50 180 Z"
          fill={colors.plate}
          stroke={colors.plateStroke}
          strokeWidth="2"
        />
        <path
          d="M95 180 L105 180 L105 195 L95 195 Z"
          fill={colors.plate}
          stroke={colors.plateStroke}
          strokeWidth="2"
        />
        <ellipse cx="100" cy="195" rx="20" ry="5" fill={colors.plate} />

        {/* Bottom Layer */}
        <motion.path
          d="M50 120 L150 120 L150 160 L50 160 Z"
          fill={colors.bottomLayer}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <rect x="50" y="120" width="100" height="10" fill={colors.bottomDetail} />

        {/* Middle Layer Details/Icing Drips */}
        <path
           d="M50 120 Q60 130 70 120 T90 120 T110 120 T130 120 T150 120" 
           fill="none" 
           stroke={colors.icing} 
           strokeWidth="8" 
           strokeLinecap="round"
        />

        {/* Top Layer */}
        <motion.path
          d="M60 80 L140 80 L140 120 L60 120 Z"
          fill={colors.topLayer}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
         <rect x="60" y="80" width="80" height="8" fill={colors.topDetail} />

        {/* Top Icing */}
        <path
           d="M60 80 Q70 90 80 80 T100 80 T120 80 T140 80" 
           fill="none" 
           stroke={colors.icing} 
           strokeWidth="6" 
           strokeLinecap="round"
        />
        
        {/* Decorations */}
        <circle cx="70" cy="80" r="4" fill={colors.decorations} />
        <circle cx="90" cy="80" r="4" fill={colors.decorations} />
        <circle cx="110" cy="80" r="4" fill={colors.decorations} />
        <circle cx="130" cy="80" r="4" fill={colors.decorations} />



        {/* Candles */}
        {Array.from({ length: candleCount === 3 ? 3 : 1 }).map((_, i) => {
          // Calculate offset for 3 candles: -20, 0, 20
          const offset = candleCount === 3 ? (i - 1) * 20 : 0;
          
          return (
            <motion.g key={i} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 + i * 0.2 }}>
              {/* Candle Stick */}
              <rect
                x={97 + offset}
                y="50"
                width="6"
                height="30"
                fill={colors.candle}
              />
              
              {/* Flame */}
              <motion.path
                d={`M${100 + offset} 30 Q${105 + offset} 40 ${100 + offset} 50 Q${95 + offset} 40 ${100 + offset} 30`}
                fill="#F59E0B"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.3, // Stagger animations
                }}
              />
              <motion.path
                 d={`M${100 + offset} 35 Q${102 + offset} 40 ${100 + offset} 45 Q${98 + offset} 40 ${100 + offset} 35`}
                 fill="#FEF3C7"
                 animate={{
                  scale: [1, 1.1, 1],
                 }}
                 transition={{
                  duration: 0.6,
                   repeat: Infinity,
                   repeatType: "reverse",
                   delay: i * 0.3,
                 }}
              />
            </motion.g>
          );
        })}

      </motion.svg>
      
      {/* Floating sparkles */}
      <motion.div 
        className="absolute top-0 right-10 text-xl"
        animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        ✨
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-4 text-lg"
        animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      >
        ✨
      </motion.div>
    </div>
  );
}
