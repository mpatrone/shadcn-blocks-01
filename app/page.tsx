import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"
import { SpendingAnomalyBanner } from "@/components/spending-anomaly-banner";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <div className="px-4 lg:px-6">
                <SpendingAnomalyBanner
                  title="Spending anomaly detected"
                  badge="Action needed"
                  description={
                    <>
                      API spend increased by{" "}
                      <strong>42% in the last 24 hours</strong>. The Production
                      chatbot key generated $486.20 in unexpected usage.
                    </>
                  }
                  stats={[
                    { label: "Current spend", value: "$3,482.90" },
                    { label: "Monthly budget", value: "$5,000.00" },
                    { label: "Detected 4 minutes ago" },
                  ]}
                />
              </div>
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
                            <div className="px-4 lg:px-6">
                <SpendingAnomalyBanner
                  severity="critical"
                  title="Monthly budget almost exhausted"
                  badge="Critical"
                  description={
                    <>
                      At the current rate you will exceed your budget in{" "}
                      <strong>under 2 days</strong>. Consider pausing the
                      Production chatbot key to avoid overage charges.
                    </>
                  }
                  actionLabel="Manage keys"
                  stats={[
                    { label: "Current spend", value: "$4,812.40" },
                    { label: "Monthly budget", value: "$5,000.00" },
                    { label: "Detected just now" },
                  ]}
                />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
