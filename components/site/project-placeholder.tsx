import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type ProjectPlaceholderProps = {
  label: string
  title: string
  meta?: string
  variant?: "residential" | "commercial" | "process" | "company" | "contact"
  className?: string
  decorative?: boolean
}

const variantStyles: Record<NonNullable<ProjectPlaceholderProps["variant"]>, string> = {
  residential:
    "bg-[linear-gradient(140deg,rgba(17,26,40,0.96),rgba(82,97,108,0.76)_48%,rgba(226,231,227,0.18)),radial-gradient(circle_at_top_left,rgba(18,133,131,0.28),transparent_28%)] text-white",
  commercial:
    "bg-[linear-gradient(135deg,rgba(20,34,51,0.94),rgba(78,90,98,0.72)_52%,rgba(227,231,227,0.22)),radial-gradient(circle_at_top_right,rgba(18,133,131,0.24),transparent_26%)] text-white",
  process:
    "bg-[linear-gradient(135deg,rgba(245,244,240,0.98),rgba(227,231,227,0.78)),radial-gradient(circle_at_top_left,rgba(18,133,131,0.18),transparent_32%)] text-foreground",
  company:
    "bg-[linear-gradient(140deg,rgba(241,239,233,0.98),rgba(226,230,226,0.82)),radial-gradient(circle_at_top_right,rgba(18,133,131,0.12),transparent_28%)] text-foreground",
  contact:
    "bg-[linear-gradient(135deg,rgba(247,246,242,0.98),rgba(230,234,230,0.78)),radial-gradient(circle_at_bottom_right,rgba(18,133,131,0.16),transparent_28%)] text-foreground",
}

export function ProjectPlaceholder({
  label,
  title,
  meta,
  variant = "residential",
  className,
  decorative = false,
}: ProjectPlaceholderProps) {
  const lightText = variant === "residential" || variant === "commercial"

  return (
    <figure
      className={cn(
        "jeyul-content-frame relative min-h-[260px] overflow-hidden p-6 sm:min-h-[320px]",
        variantStyles[variant],
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-8 bottom-8 top-20 border",
          lightText ? "border-white/16 bg-white/6" : "border-foreground/8 bg-white/18"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute left-8 top-8 h-px w-24",
          lightText ? "bg-white/24" : "bg-foreground/12"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute bottom-8 right-8 h-24 w-24 border",
          lightText ? "border-white/12" : "border-foreground/10"
        )}
      />
      {!decorative ? (
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <Badge
              variant={lightText ? "secondary" : "outline"}
              className={cn(
                "w-fit",
                lightText
                  ? "border-0 bg-white/12 text-white backdrop-blur-sm"
                  : "border-border/70 bg-background/78"
              )}
            >
              {label}
            </Badge>
            <p className={cn("text-[10px] uppercase tracking-[0.28em]", lightText ? "text-white/72" : "text-muted-foreground")}>
              Placeholder Visual
            </p>
          </div>

          <div className="max-w-md space-y-3">
            <p className={cn("text-2xl font-semibold tracking-[-0.04em] sm:text-4xl", lightText ? "text-white" : "text-foreground")}>
              {title}
            </p>
            {meta ? (
              <p className={cn("text-sm leading-6", lightText ? "text-white/78" : "text-muted-foreground")}>
                {meta}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </figure>
  )
}
