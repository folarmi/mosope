import { SectionHeader } from "../molecules/SectionHeader";
import { JokeCard } from "../molecules/JokeCard";
import { Smile } from "lucide-react";

const JOKES = [
  { context: "The 'I'm not hungry' glance", punchline: "Proceeds to eat half my fries." },
  { context: "That one specific song intro", punchline: "IMMEDIATE chaos mode activated." },
  { context: "Voice note speed", punchline: "2x usually, but 1x for the tea." },
  { context: "Texting back time", punchline: "3 business days or 3 seconds. No in-between." },
];

export function InsideJokesSection() {

  return (
    <section id="jokes" className="py-24 bg-espresso-900 text-nude-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeader
          title="If You Know, You Know"
          subtitle="A collection of our specific brand of chaos."
          icon={<Smile className="text-taupe-300" />}
          badgeText="Inside Jokes"
        />
      </div>

      <div className="relative w-full">
         <div className="flex gap-6 px-6 overflow-x-auto pb-8 snap-x snap-mandatory">
            {JOKES.map((joke, i) => (
                <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center">
                    <JokeCard context={joke.context} punchline={joke.punchline} />
                </div>
            ))}
         </div>
      </div>
    </section>
  );
}
