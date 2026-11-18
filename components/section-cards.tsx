"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChartUpIcon, ChartDownIcon } from "@hugeicons/core-free-icons"

const stats = [
  {
    label: "Total Tokens",
    value: "48.2M",
    change: "+18.4%",
    trend: ChartUpIcon,
    footer: "Usage up this month",
    detail: "Input + output across all models",
  },
  {
    label: "API Requests",
    value: "1.26M",
    change: "+9.1%",
    trend: ChartUpIcon,
    footer: "Steady request growth",
    detail: "Last 30 days, all API keys",
  },
  {
    label: "Spend",
    value: "$3,482.90",
    change: "+12.7%",
    trend: ChartUpIcon,
    footer: "70% of monthly budget",
    detail: "Budget: $5,000.00 / month",
  },
  {
    label: "Avg. Latency",
    value: "842 ms",
    change: "-6.3%",
    trend: ChartDownIcon,
    footer: "Faster than last month",
    detail: "p50 time to first token",
  },
]

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      {stats.map((stat) => (
        <Card key={stat.label} className="@container/card">
          <CardHeader>
            <CardDescription>{stat.label}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {stat.value}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <HugeiconsIcon icon={stat.trend} strokeWidth={2} />
                {stat.change}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {stat.footer}{" "}
              <HugeiconsIcon
                icon={stat.trend}
                strokeWidth={2}
                className="size-4"
              />
            </div>
            <div className="text-muted-foreground">{stat.detail}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
