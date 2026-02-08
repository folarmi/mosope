import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../molecules/SectionHeader";
import { Camera, X, Play } from "lucide-react";
import signOut from "../../assets/signOut.jpeg"; 
import feelsLikeHome from "../../assets/feelsLikeHome.jpeg"; 
import justUs from "../../assets/justUs.jpeg"; 
import signOutVideo from "../../assets/videos/signOut.mp4"; 
import firstMeet from "../../assets/videos/firstMeet.mp4"; 
import yapSessions from "../../assets/videos/yapSessions.mp4"; 
import yapThumbnail from "../../assets/videos/yapThumbnail.jpeg"; 
import firstMeetThumbNail from "../../assets/videos/firstMeetThumbNail.jpeg"; 
import thumbNailTwo from "../../assets/videos/thumbNailTwo.jpeg"; 

// Define the structure for Gallery Items
type GalleryItem = {
  id: number;
  type: "image" | "video";
  caption: string;
  src: string;
  thumbnail?: string; 
  color: string;
};

// Updated data based on user request
const GALLERY_ITEMS: GalleryItem[] = [
  { 
    id: 1, 
    type: "video", 
    caption: "The first time we physically met", 
    src: firstMeet,
    color: "bg-taupe-300",
    thumbnail: firstMeetThumbNail 
  },
  { 
    id: 2, 
    type: "video", 
    caption: "Typical yap sessions 😂", 
    src: yapSessions, 
    color: "bg-taupe-400",
    thumbnail: yapThumbnail
  },
  { 
    id: 3, 
    type: "video", 
    caption: "Had to come sign you out 😎", 
    src: signOutVideo, 
    color: "bg-espresso-700",
    thumbnail: thumbNailTwo
  },
  { 
    id: 4, 
    type: "image", 
    caption: "A random picture that feels like home 🏠", 
    src: feelsLikeHome, 
    color: "bg-mauve-grey"
  },
  { 
    id: 5, 
    type: "image", 
    caption: "I am not a bully i promise 🙃", 
    src: signOut, 
    color: "bg-taupe-200"
  },
  { 
    id: 6, 
    type: "image", 
    caption: "Us. Just us. 💕", 
    src: justUs, 
    color: "bg-espresso-800"
  },
];

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="px-5 max-w-7xl mx-auto">
        <SectionHeader 
            title="Captured Moments"
            subtitle="Snapshots of joy, growth, and everything in between."
            icon={<Camera size={18} />}
            badgeText="The Archives"
            centered
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_ITEMS.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden break-inside-avoid"
                    onClick={() => setSelectedItem(item)}
                >
                    <div className={`aspect-[3/4] w-full ${item.color} relative`}>
                         {/* Display thumbnail or image */}
                         <img 
                            src={item.type === 'video' ? (item.thumbnail || item.src) : item.src} 
                            alt={item.caption} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                         />
                         
                         {/* Video Indicator */}
                         {item.type === 'video' && (
                             <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                 <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50">
                                     <Play fill="white" className="text-white ml-1" size={20} />
                                 </div>
                             </div>
                         )}

                         {/* Overlay Gradient */}
                         <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                        <p className="text-nude-50 font-medium text-sm leading-snug drop-shadow-md">
                          {item.caption}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

       <AnimatePresence>
        {selectedItem !== null && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso-900/95 backdrop-blur-md p-4"
                onClick={() => setSelectedItem(null)}
            >
                <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                    <button 
                        onClick={() => setSelectedItem(null)}
                        className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={32} />
                    </button>
                    
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="w-full aspect-[4/3] md:aspect-video rounded-xl shadow-2xl overflow-hidden bg-black relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedItem.type === 'video' ? (
                            <div className="w-full h-full flex items-center justify-center text-white">
                                {/* Actual Video Player logic would go here. For now, using controls */}
                                {selectedItem.src ? (
                                    <video 
                                        src={selectedItem.src} 
                                        controls 
                                        autoPlay 
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div className="text-center p-4">
                                        <Play size={48} className="mx-auto mb-2 opacity-50" />
                                        <p>Video placeholder (Add src to code)</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <img 
                                src={selectedItem.src} 
                                alt={selectedItem.caption} 
                                className="w-full h-full object-contain" 
                            />
                        )}
                    </motion.div>
                    
                    <p className="text-white/80 mt-6 text-lg font-medium text-center">
                        {selectedItem.caption}
                    </p>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
