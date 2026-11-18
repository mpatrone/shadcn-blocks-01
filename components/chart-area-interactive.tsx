"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const description = "Daily input and output token usage"

const chartData = [
  { date: "2026-08-19", input: 333000, output: 90000 },
  { date: "2026-08-20", input: 145500, output: 108000 },
  { date: "2026-08-21", input: 250500, output: 72000 },
  { date: "2026-08-22", input: 363000, output: 156000 },
  { date: "2026-08-23", input: 559500, output: 174000 },
  { date: "2026-08-24", input: 451500, output: 204000 },
  { date: "2026-08-25", input: 367500, output: 108000 },
  { date: "2026-08-26", input: 613500, output: 192000 },
  { date: "2026-08-27", input: 88500, output: 66000 },
  { date: "2026-08-28", input: 391500, output: 114000 },
  { date: "2026-08-29", input: 490500, output: 210000 },
  { date: "2026-08-30", input: 438000, output: 126000 },
  { date: "2026-08-31", input: 513000, output: 228000 },
  { date: "2026-09-01", input: 205500, output: 132000 },
  { date: "2026-09-02", input: 180000, output: 102000 },
  { date: "2026-09-03", input: 207000, output: 114000 },
  { date: "2026-09-04", input: 669000, output: 216000 },
  { date: "2026-09-05", input: 546000, output: 246000 },
  { date: "2026-09-06", input: 364500, output: 108000 },
  { date: "2026-09-07", input: 133500, output: 90000 },
  { date: "2026-09-08", input: 205500, output: 120000 },
  { date: "2026-09-09", input: 336000, output: 102000 },
  { date: "2026-09-10", input: 207000, output: 138000 },
  { date: "2026-09-11", input: 580500, output: 174000 },
  { date: "2026-09-12", input: 322500, output: 150000 },
  { date: "2026-09-13", input: 112500, output: 78000 },
  { date: "2026-09-14", input: 574500, output: 252000 },
  { date: "2026-09-15", input: 183000, output: 108000 },
  { date: "2026-09-16", input: 472500, output: 144000 },
  { date: "2026-09-17", input: 681000, output: 228000 },
  { date: "2026-09-18", input: 247500, output: 132000 },
  { date: "2026-09-19", input: 439500, output: 186000 },
  { date: "2026-09-20", input: 370500, output: 114000 },
  { date: "2026-09-21", input: 577500, output: 252000 },
  { date: "2026-09-22", input: 721500, output: 234000 },
  { date: "2026-09-23", input: 747000, output: 312000 },
  { date: "2026-09-24", input: 582000, output: 180000 },
  { date: "2026-09-25", input: 223500, output: 126000 },
  { date: "2026-09-26", input: 340500, output: 108000 },
  { date: "2026-09-27", input: 439500, output: 198000 },
  { date: "2026-09-28", input: 502500, output: 162000 },
  { date: "2026-09-29", input: 295500, output: 144000 },
  { date: "2026-09-30", input: 295500, output: 96000 },
  { date: "2026-10-01", input: 672000, output: 294000 },
  { date: "2026-10-02", input: 709500, output: 228000 },
  { date: "2026-10-03", input: 507000, output: 240000 },
  { date: "2026-10-04", input: 748500, output: 252000 },
  { date: "2026-10-05", input: 472500, output: 210000 },
  { date: "2026-10-06", input: 352500, output: 108000 },
  { date: "2026-10-07", input: 265500, output: 138000 },
  { date: "2026-10-08", input: 123000, output: 84000 },
  { date: "2026-10-09", input: 121500, output: 72000 },
  { date: "2026-10-10", input: 378000, output: 174000 },
  { date: "2026-10-11", input: 441000, output: 132000 },
  { date: "2026-10-12", input: 301500, output: 150000 },
  { date: "2026-10-13", input: 319500, output: 102000 },
  { date: "2026-10-14", input: 630000, output: 276000 },
  { date: "2026-10-15", input: 349500, output: 114000 },
  { date: "2026-10-16", input: 117000, output: 78000 },
  { date: "2026-10-17", input: 510000, output: 168000 },
  { date: "2026-10-18", input: 267000, output: 138000 },
  { date: "2026-10-19", input: 267000, output: 120000 },
  { date: "2026-10-20", input: 705000, output: 246000 },
  { date: "2026-10-21", input: 154500, output: 96000 },
  { date: "2026-10-22", input: 658500, output: 228000 },
  { date: "2026-10-23", input: 132000, output: 84000 },
  { date: "2026-10-24", input: 441000, output: 150000 },
  { date: "2026-10-25", input: 484500, output: 222000 },
  { date: "2026-10-26", input: 577500, output: 192000 },
  { date: "2026-10-27", input: 657000, output: 288000 },
  { date: "2026-10-28", input: 232500, output: 120000 },
  { date: "2026-10-29", input: 138000, output: 90000 },
  { date: "2026-10-30", input: 738000, output: 252000 },
  { date: "2026-10-31", input: 121500, output: 78000 },
  { date: "2026-11-01", input: 639000, output: 228000 },
  { date: "2026-11-02", input: 460500, output: 210000 },
  { date: "2026-11-03", input: 556500, output: 186000 },
  { date: "2026-11-04", input: 712500, output: 312000 },
  { date: "2026-11-05", input: 160500, output: 102000 },
  { date: "2026-11-06", input: 511500, output: 174000 },
  { date: "2026-11-07", input: 612000, output: 270000 },
  { date: "2026-11-08", input: 253500, output: 126000 },
  { date: "2026-11-09", input: 475500, output: 162000 },
  { date: "2026-11-10", input: 720000, output: 318000 },
  { date: "2026-11-11", input: 198000, output: 108000 },
  { date: "2026-11-12", input: 211500, output: 114000 },
  { date: "2026-11-13", input: 651000, output: 228000 },
  { date: "2026-11-14", input: 672000, output: 294000 },
  { date: "2026-11-15", input: 223500, output: 120000 },
  { date: "2026-11-16", input: 154500, output: 96000 },
  { date: "2026-11-17", input: 669000, output: 240000 },
]

const chartConfig = {
  tokens: {
    label: "Tokens",
  },
  input: {
    label: "Input tokens",
    color: "var(--chart-1)",
  },
  output: {
    label: "Output tokens",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [selectedRange, setTimeRange] = React.useState<string | null>(null)
  // Default to a shorter range on mobile until the user picks one.
  const timeRange = selectedRange ?? (isMobile ? "7d" : "90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2026-11-17")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Token Usage</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Input and output tokens for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            multiple={false}
            value={timeRange ? [timeRange] : []}
            onValueChange={(value) => {
              setTimeRange(value[0] ?? "90d")
            }}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:px-4! @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select
            value={timeRange}
            onValueChange={(value) => {
              if (value !== null) {
                setTimeRange(value)
              }
            }}
          >
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillInput" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-input)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-input)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillOutput" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-output)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-output)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="output"
              type="natural"
              fill="url(#fillOutput)"
              stroke="var(--color-output)"
              stackId="a"
            />
            <Area
              dataKey="input"
              type="natural"
              fill="url(#fillInput)"
              stroke="var(--color-input)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
