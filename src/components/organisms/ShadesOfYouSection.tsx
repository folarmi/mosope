import { SectionHeader } from "../molecules/SectionHeader";
import { ShadeCard } from "../molecules/ShadeCard";
import { Palette } from "lucide-react";
import mycommandant from "../../assets/myCommandant.jpeg"
import myFavoriteNurse from "../../assets/myFavoriteNurse.jpeg"
import igiIwe from "../../assets/igiIwe.jpeg"
import proudOfYou from "../../assets/proudOfYou.jpeg"
import coverImageTwo from "../../assets/coverImageTwo.jpeg"
import skinCare from "../../assets/skinCare.jpeg"

const SHADES = [
  { title: "My Commandant", description: "Handling business like it’s nothing.", color: "bg-espresso-800"  ,imageSrc: mycommandant},
  { title: "My Favorite Nurse", description: "Always ready to save the day.", color: "bg-taupe-400", imageSrc: myFavoriteNurse },
  { title: "My Hype Woman", description: "Nobody celebrates me louder.", color: "bg-mauve-dark", imageSrc: proudOfYou },
  { title: "The Literal Igi Iwe", description: "Degree na water. ", color: "bg-espresso-700", imageSrc: igiIwe },
  { title: "The Soft Life", description: "Skincare, and Beauty.", color: "bg-taupe-200", imageSrc: skinCare },
  { title: "The Vibe", description: "Just existing is a flex.", color: "bg-taupe-300", imageSrc: coverImageTwo },
];

export function ShadesOfYouSection() {
  return (
    <section id="shades" className="py-32 px-5 max-w-7xl mx-auto">
      <SectionHeader
        title="Different Shades of You"
        subtitle="Because you’re not just one thing. You’re a whole spectrum."
        icon={<Palette size={18} />}
        badgeText="The Range"
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {SHADES.map((shade, i) => (
          <div key={i} className="transform md:nth-child(2n):translate-y-12 transition-transform">
             <ShadeCard title={shade.title} description={shade.description} color={shade.color} delay={i * 0.1} imageSrc={shade?.imageSrc}/>
          </div>
        ))}
      </div>
    </section>
  );
}
