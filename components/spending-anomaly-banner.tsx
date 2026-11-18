"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert01Icon,
  AlertCircleIcon,
  ArrowRight01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons"
import { cn } from "cn"
import { Button } from "@/components/ui/button"
type Severity = "default" | "critical"
type Stat = { label: string; value?: string }
const styles = {
  default: {
    root: "border-amber-500/30 before:bg-amber-500",
    icon: "border-amber-500/40 bg-amber-500/10 text-amber-500 dark:text-amber-400",
    badge:
      "border-amber-500/50 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    footer: "border-amber-500/20",
  },
  critical: {
    root: "border-destructive/40 before:bg-destructive",
    icon: "border-destructive/40 bg-destructive/10 text-destructive",
    badge: "border-destructive/50 bg-destructive/10 text-destructive",
    footer: "border-destructive/20",
  },
} satisfies Record<Severity, Record<string, string>>
export function SpendingAnomalyBanner({
  severity = "default",
  title,
  badge,
  description,
  stats,
  actionLabel = "Review usage",
  onAction,
  className,
}: {
  severity?: Severity
  title: string
  badge: string
  description: React.ReactNode
  stats: Stat[]
  actionLabel?: string
  onAction?: () => void
  className?: string
}) {
  const [dismissed, setDismissed] = React.useState(false)
  const s = styles[severity]
  if (dismissed) return null
  return (
    <div
      role={severity === "critical" ? "alert" : "status"}
      data-slot="spending-anomaly-banner"
      data-severity={severity}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-xs before:absolute before:inset-y-0 before:left-0 before:w-0.5",
        s.root,
        className
      )}
    >
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start sm:gap-4 sm:px-6 sm:py-5">
        <div
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-md border",
            s.icon
          )}
        >
          <HugeiconsIcon
            icon={severity === "critical" ? AlertCircleIcon : Alert01Icon}
            strokeWidth={2}
            className="size-4"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <h2 className="text-sm font-medium">{title}</h2>
            <span
              className={cn(
                "inline-flex h-[18px] items-center rounded-sm border px-1.5 text-[0.625rem] font-medium tracking-wide uppercase",
                s.badge
              )}
            >
              {badge}
            </span>
          </div>
          <p className="text-xs/relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:ml-auto">
          <Button
            variant="outline"
            size="lg"
            className="h-8 px-3"
            onClick={onAction}
          >
            {actionLabel}
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              strokeWidth={2}
              data-icon="inline-end"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Dismiss"
            className="text-muted-foreground"
            onClick={() => setDismissed(true)}
          >
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </Button>
        </div>
      </div>
      <dl
        className={cn(
          "flex flex-wrap items-center gap-x-4 gap-y-1 border-t px-4 py-2.5 text-[0.6875rem] text-muted-foreground sm:pl-[4.5rem]",
          s.footer
        )}
      >
        {stats.map((stat, i) => (
          <React.Fragment key={stat.label}>
            {i > 0 && (
              <span
                aria-hidden
                className="hidden h-3 w-px bg-border sm:block"
              />
            )}
            <div className="flex gap-1">
              <dt>{stat.label}</dt>
              {stat.value && (
                <dd className="font-medium text-foreground">{stat.value}</dd>
              )}
            </div>
          </React.Fragment>
        ))}
      </dl>
    </div>
  )
}