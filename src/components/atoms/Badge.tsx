import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "soft";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({ children, variant = "default", className, icon }: BadgeProps) {
  const styles = {
    default: "bg-taupe-100/50 text-taupe-500",
    outline: "border border-espresso-900/10 text-espresso-900",
    soft: "bg-blush-100 text-espresso-900",
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
        styles[variant],
        className
      )}
    >
      {icon && <span className="[&>svg]:w-3.5 [&>svg]:h-3.5">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
