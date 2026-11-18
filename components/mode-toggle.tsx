"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          />
        }
      >
        <HugeiconsIcon
          icon={Sun03Icon}
          strokeWidth={2}
          className="hidden dark:block"
        />
        <HugeiconsIcon
          icon={Moon02Icon}
          strokeWidth={2}
          className="block dark:hidden"
        />
        <span className="sr-only">Toggle theme</span>
      </TooltipTrigger>
      <TooltipContent>
        Toggle theme <kbd className="ml-1 font-mono text-xs opacity-70">D</kbd>
      </TooltipContent>
    </Tooltip>
  )
}
