import clsx from "clsx";
import { ChevronRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  withArrow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  className,
  href,
  withArrow,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 group";

  const variants = {
    primary:
      "bg-espresso-900 text-nude-100 hover:bg-espresso-800 shadow-lg shadow-espresso-900/10",
    secondary:
      "bg-white/50 text-espresso-900 border border-espresso-900/10 hover:bg-white/80 backdrop-blur-sm",
    outline:
      "border border-espresso-900/20 text-espresso-900 hover:bg-espresso-900/5",
  };

  const content = (
    <>
      {children}
      {withArrow && (
        <ChevronRight
          size={18}
          className="transition-transform group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={clsx(baseStyles, variants[variant], className)}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}




// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SectionHeader } from "../molecules/SectionHeader";
// import { Camera, X } from "lucide-react";
// import signOut from "../../assets/signOut.jpeg"

// // Placeholder photos - replace with real imports/urls
// const PHOTOS = [
//   { id: 1, color: "bg-taupe-300", caption: "Abeokuta — the day we became a travel duo" ,img:signOut },
//   { id: 2, color: "bg-taupe-400 video", caption: "Signing out day — showing up is love" ,img:signOut},
//   { id: 3, color: "bg-espresso-700", caption: "Movie night — the laughs, the commentary" ,img:signOut},
//   { id: 4, color: "bg-mauve-grey", caption: "A random picture that still feels like home" ,img:signOut},
//   { id: 5, color: "bg-taupe-200", caption: "One of those “we look good” moments" ,img:signOut},
//   { id: 6, color: "bg-espresso-800", caption: "A soft memory I keep replaying" ,img:signOut},
// ];

// export function GallerySection() {
//   const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

//   return (
//     <>
//       <div className=" px-5 max-w-7xl mx-auto">
//         <SectionHeader 
//             title="Captured Moments"
//             subtitle="Snapshots of joy, growth, and everything in between."
//             icon={<Camera size={18} />}
//             badgeText="The Archives"
//             centered
//         />

//         <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
//             {PHOTOS.map((photo, index) => (
//                 <motion.div
//                     key={photo.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     className="group cursor-pointer relative rounded-2xl overflow-hidden break-inside-avoid"
//                     onClick={() => setSelectedPhoto(index)}
//                 >
//                     <div className={`aspect-[3/4] w-full ${photo.color}`}>
//                          {/* Image/Video goes here */}
//                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
//                          <img src={photo.img} alt={photo.caption} className="w-full h-full object-cover" />
//                     </div>

//                           <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
//         <h3 className="text-2xl font-bold text-nude-50 font-serif mb-1">
//           {photo.caption}
//         </h3>
//         <p className="text-nude-200 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
//           {photo.caption}
//         </p>
//       </div>
//                 </motion.div>
//             ))}
//         </div>
//       </div>

//        <AnimatePresence>
//         {selectedPhoto !== null && (
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso-900/95 backdrop-blur-md p-4"
//                 onClick={() => setSelectedPhoto(null)}
//             >
//                 <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
//                     <button 
//                         onClick={() => setSelectedPhoto(null)}
//                         className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
//                     >
//                         <X size={32} />
//                     </button>
                    
//                     <motion.div
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         exit={{ scale: 0.9, opacity: 0 }}
//                         className={`w-full aspect-[4/3] rounded-xl shadow-2xl ${PHOTOS[selectedPhoto].color}`}
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         {/* Real image would be here */}
//                     </motion.div>
                    
//                     <p className="text-white/80 mt-6 text-lg font-medium">
//                         {PHOTOS[selectedPhoto].caption}
//                     </p>
//                 </div>
//             </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
