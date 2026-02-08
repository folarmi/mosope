import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Camera,
  Music2,
  Gift,
  Stars,
  Cake,
  MapPin,
  Film,
} from "lucide-react";

type Memory = { title: string; detail: string; tag: string };
type Photo = { caption: string };

export default function App() {
  const herName = "Mosopefuoluwa";
  const yourName = "Folasayo";

  const memories: Memory[] = useMemo(
    () => [
      {
        title: "Abeokuta trip",
        detail:
          "The kind of trip that wasn’t just “travel” — it was us being us, moving through the day like a small team.",
        tag: "Abeokuta",
      },
      {
        title: "Your signing out day",
        detail:
          "Showing up wasn’t a question. I just knew I needed to be there — because you deserve people who celebrate you loudly.",
        tag: "proud of you",
      },
      {
        title: "Our movie moments",
        detail:
          "We don’t just watch films. We react, we gist, we pause, we rewind, we quote it later like it’s scripture.",
        tag: "cinema",
      },
      {
        title: "The everyday softness",
        detail:
          "Even on normal days, you make life feel less heavy — like there’s always something gentle to look forward to.",
        tag: "real",
      },
    ],
    [],
  );

  // Replace placeholders with real images later (public/photos)
  const photoPlaceholders: Photo[] = useMemo(
    () => [
      { caption: "Abeokuta — the day we became a travel duo" },
      { caption: "Signing out day — showing up is love" },
      { caption: "Movie night — the laughs, the commentary, the vibe" },
      { caption: "A random picture that still feels like home" },
      { caption: "One of those “we look good” moments" },
      { caption: "A soft memory I keep replaying" },
    ],
    [],
  );

  return (
    <div id="top" className="relative min-h-screen overflow-hidden grain">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blush-200 blur-3xl opacity-70" />
        <div className="absolute -bottom-48 -left-28 h-[520px] w-[520px] rounded-full bg-mauve-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -right-28 h-[520px] w-[520px] rounded-full bg-blush-300 blur-3xl opacity-35" />
      </div>

      {/* Top Nav */}
      <header className="relative mx-auto max-w-6xl px-5 pt-6">
        <div className="flex items-center justify-between rounded-xl bg-white/55 px-4 py-3 shadow-soft ring-1 ring-cocoa-900/5 backdrop-blur">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-blush-200 text-cocoa-900 ring-1 ring-cocoa-900/10">
              <Sparkles size={18} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-cocoa-900">
                {herName}'s Birthday
              </p>
              <p className="text-xs text-cocoa-700/70">
                made by {yourName}, with love
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {["About", "Us", "Moments", "Gallery", "Wish"].map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-cocoa-700/80 hover:bg-blush-100 hover:text-cocoa-900 transition"
              >
                {t}
              </a>
            ))}
          </div>

          <a
            href="#wish"
            className="inline-flex items-center gap-2 rounded-xl bg-cocoa-900 px-3.5 py-2 text-sm font-semibold text-blush-50 shadow-glow hover:translate-y-[-1px] transition"
          >
            <Gift size={16} />
            Open the message
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-2 text-sm font-semibold text-cocoa-900 ring-1 ring-cocoa-900/5 backdrop-blur"
            >
              <Cake size={16} className="text-taupe-400" />
              <span>Happy Birthday, {herName} ✨</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="mt-5 text-4xl font-semibold tracking-tight text-cocoa-900 md:text-6xl"
            >
              Your favorite color,
              <span className="block text-cocoa-700/80">
                turned into a whole website.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-cocoa-700/80 md:text-lg"
            >
              Not because you asked. Because you deserve thoughtful things.
              Because you’re the kind of person that makes people want to do
              extra — happily.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl bg-cocoa-900 px-5 py-3 text-sm font-semibold text-blush-50 shadow-glow hover:translate-y-[-1px] transition"
              >
                <Heart size={16} />
                Start here
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-xl bg-white/65 px-5 py-3 text-sm font-semibold text-cocoa-900 ring-1 ring-cocoa-900/10 backdrop-blur hover:bg-white/80 transition"
              >
                <Camera size={16} />
                Jump to memories
              </a>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-cocoa-700/70">
              {[
                { icon: <Stars size={14} />, label: "soft aesthetic" },
                { icon: <Music2 size={14} />, label: "nostalgia" },
                { icon: <MapPin size={14} />, label: "our moments" },
                { icon: <Film size={14} />, label: "movie nights" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/55 px-3 py-2 ring-1 ring-cocoa-900/5 backdrop-blur"
                >
                  {b.icon}
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative"
          >
            <div className="rounded-2xl bg-white/60 p-5 shadow-soft ring-1 ring-cocoa-900/10 backdrop-blur">
              <div className="rounded-2xl bg-gradient-to-b from-blush-100 to-mauve-200/70 p-5 ring-1 ring-cocoa-900/10">
                <p className="text-sm font-semibold text-cocoa-900">
                  A quick note
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-700/80">
                  Mosopefuoluwa, you’re easy to love and hard to forget. This
                  page is just proof that your life deserves celebration — not
                  only on the big days.
                </p>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <MiniStat title="Energy" value="soft + premium" />
                  <MiniStat title="Vibe" value="main character" />
                  <MiniStat title="Us" value="real friendship" />
                  <MiniStat title="Today" value="celebration" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-cocoa-900/10">
                <div className="leading-tight">
                  <p className="text-xs text-cocoa-700/70">From</p>
                  <p className="text-sm font-semibold text-cocoa-900">
                    {yourName}
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-blush-300 ring-1 ring-cocoa-900/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Her */}
      <Section
        id="about"
        title="About her"
        subtitle="The parts that make you… you."
        icon={<Sparkles size={18} />}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Soft power"
            text="Gentle, but never unsure. You move with quiet certainty."
          />
          <FeatureCard
            title="Heart"
            text="You love in a way that feels safe. People breathe easier around you."
          />
          <FeatureCard
            title="Taste"
            text="Even your “simple” choices look intentional. Always."
          />
        </div>

        <div className="mt-5 rounded-2xl bg-white/60 p-5 ring-1 ring-cocoa-900/10 shadow-soft backdrop-blur">
          <p className="text-sm font-semibold text-cocoa-900">
            If I had to describe you in one line
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cocoa-700/80">
            You make life feel calmer and more beautiful — like everything
            finally found the right shade.
          </p>
        </div>
      </Section>

      {/* About Us */}
      <Section
        id="us"
        title="About us"
        subtitle="A small timeline of a big friendship."
        icon={<Heart size={18} />}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BigCard
            title="How we are"
            text="We can gist, laugh, go deep, and still end with a movie recommendation."
            bullets={[
              "We show up",
              "We laugh out loud",
              "We keep each other steady",
            ]}
          />
          <BigCard
            title="What I love about us"
            text="It’s not performative. It’s not convenience. It’s real care, on regular days."
            bullets={[
              "Support without noise",
              "Joy without pressure",
              "Honesty with softness",
            ]}
          />
        </div>
      </Section>

      {/* Moments */}
      <Section
        id="moments"
        title="Moments"
        subtitle="Little scenes. Big meaning."
        icon={<Camera size={18} />}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {memories.map((m) => (
            <motion.div
              key={m.title}
              whileHover={{ y: -3 }}
              className="rounded-2xl bg-white/60 p-5 ring-1 ring-cocoa-900/10 shadow-soft backdrop-blur"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-cocoa-900">
                    {m.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-700/80">
                    {m.detail}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-blush-100 px-3 py-1 text-xs font-semibold text-cocoa-900 ring-1 ring-cocoa-900/10">
                  {m.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section
        id="gallery"
        title="Gallery"
        subtitle="Drop your photos in /public/photos and this becomes a mini museum."
        icon={<Stars size={18} />}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photoPlaceholders.map((p, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white/60 p-4 ring-1 ring-cocoa-900/10 shadow-soft backdrop-blur"
            >
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-cocoa-900/10">
                {/* Replace with <img src="/photos/01.jpg" ... /> */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blush-200 via-white/50 to-mauve-200" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-t from-cocoa-900/25 to-transparent" />
              </div>
              <p className="mt-3 text-sm font-semibold text-cocoa-900">
                Memory #{idx + 1}
              </p>
              <p className="mt-1 text-xs text-cocoa-700/75">{p.caption}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Wish */}
      <Section
        id="wish"
        title="A birthday wish"
        subtitle="The part that matters most."
        icon={<Gift size={18} />}
      >
        <div className="rounded-2xl bg-white/65 p-6 ring-1 ring-cocoa-900/10 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold text-cocoa-900">
            Dear Mosopefuoluwa,
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cocoa-700/85 md:text-base">
            I hope this year feels like ease and alignment. Like doors opening
            without you forcing them. Like joy that doesn’t ask you to shrink.
            <br />
            <br />
            Thank you for being you — steady, kind, brilliant. Thank you for
            letting me be part of your life. I’m proud of you. I’m grateful for
            you. And I’m always in your corner.
            <br />
            <br />
            Happy birthday, my girl. 🥂✨
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-xl bg-cocoa-900 px-5 py-3 text-sm font-semibold text-blush-50 shadow-glow hover:translate-y-[-1px] transition"
            >
              <Sparkles size={16} />
              Replay the magic
            </a>

            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  "Happy birthday Mosopefuoluwa 🥂✨ — Love, Folasayo",
                )
              }
              className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-5 py-3 text-sm font-semibold text-cocoa-900 ring-1 ring-cocoa-900/10 backdrop-blur hover:bg-white/85 transition"
              type="button"
            >
              <Heart size={16} />
              Copy a message
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-cocoa-700/70">
          Theme inspired by her favorite nail shade: blush nude + warm taupe.
        </p>
      </Section>

      {/* Footer */}
      <footer className="relative mx-auto max-w-6xl px-5 pb-10">
        <div className="rounded-2xl bg-white/55 p-5 ring-1 ring-cocoa-900/10 shadow-soft backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold text-cocoa-900">
              Built with love. And good taste.
            </p>
            <p className="text-xs text-cocoa-700/70">
              © {new Date().getFullYear()} — Folasayo for Mosopefuoluwa
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section(props: {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={props.id} className="relative mx-auto max-w-6xl px-5 py-12">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-cocoa-900 md:text-3xl">
            {props.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cocoa-700/80 md:text-base">
            {props.subtitle}
          </p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/60 ring-1 ring-cocoa-900/10 shadow-soft backdrop-blur text-taupe-400">
          {props.icon}
        </div>
      </div>
      {props.children}
    </section>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-cocoa-900/10">
      <p className="text-xs text-cocoa-700/70">{title}</p>
      <p className="mt-1 text-sm font-semibold text-cocoa-900">{value}</p>
    </div>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl bg-white/60 p-5 ring-1 ring-cocoa-900/10 shadow-soft backdrop-blur"
    >
      <p className="text-base font-semibold text-cocoa-900">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-cocoa-700/80">{text}</p>
    </motion.div>
  );
}

function BigCard({
  title,
  text,
  bullets,
}: {
  title: string;
  text: string;
  bullets: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl bg-white/60 p-6 ring-1 ring-cocoa-900/10 shadow-soft backdrop-blur"
    >
      <p className="text-lg font-semibold text-cocoa-900">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-cocoa-700/80">{text}</p>

      <div className="mt-4 grid gap-2">
        {bullets.map((b) => (
          <div
            key={b}
            className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-cocoa-900/10"
          >
            <span className="h-2 w-2 rounded-full bg-taupe-400" />
            <p className="text-sm text-cocoa-900">{b}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
