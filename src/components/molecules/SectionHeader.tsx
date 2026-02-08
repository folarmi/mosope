
interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  badgeText?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  icon,
  badgeText,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 space-y-4 ${centered ? "text-center mx-auto max-w-2xl" : "flex items-start justify-between gap-4"}`}
    >
      <div className={centered ? "space-y-4" : ""}>
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-taupe-100/50 text-taupe-500 text-xs font-bold uppercase tracking-wider mb-2">
            {icon && <span className="[&>svg]:w-3.5 [&>svg]:h-3.5">{icon}</span>}
            <span>{badgeText}</span>
          </div>
        )}
        <h2 className="text-4xl md:text-5xl font-bold text-espresso-900 font-serif">
          {title}
        </h2>
        <p className="text-espresso-700/70 text-lg leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      {!centered && icon && !badgeText && (
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/60 ring-1 ring-cocoa-900/10 shadow-soft backdrop-blur text-taupe-400">
          {icon}
        </div>
      )}
    </div>
  );
}
