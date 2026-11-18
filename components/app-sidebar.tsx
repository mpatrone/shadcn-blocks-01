"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Activity01Icon,
  AiBrain01Icon,
  Analytics01Icon,
  ApiIcon,
  BookOpen01Icon,
  CreditCardIcon,
  DashboardSquare01Icon,
  HelpCircleIcon,
  Key01Icon,
  SearchIcon,
  Settings05Icon,
  SparklesIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons"

const data = {
  user: {
    name: "Ada Lovelace",
    email: "ada@tokenly.dev",
    avatar: "",
  },
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
    },
    {
      title: "Usage",
      url: "#",
      icon: <HugeiconsIcon icon={Activity01Icon} strokeWidth={2} />,
    },
    {
      title: "Models",
      url: "#",
      icon: <HugeiconsIcon icon={AiBrain01Icon} strokeWidth={2} />,
    },
    {
      title: "API Keys",
      url: "#",
      icon: <HugeiconsIcon icon={Key01Icon} strokeWidth={2} />,
    },
    {
      title: "Team",
      url: "#",
      icon: <HugeiconsIcon icon={UserMultipleIcon} strokeWidth={2} />,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />,
    },
    {
      title: "Get Help",
      url: "#",
      icon: <HugeiconsIcon icon={HelpCircleIcon} strokeWidth={2} />,
    },
    {
      title: "Search",
      url: "#",
      icon: <HugeiconsIcon icon={SearchIcon} strokeWidth={2} />,
    },
  ],
  documents: [
    {
      name: "Billing",
      url: "#",
      icon: <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />,
    },
    {
      name: "Reports",
      url: "#",
      icon: <HugeiconsIcon icon={Analytics01Icon} strokeWidth={2} />,
    },
    {
      name: "API Reference",
      url: "#",
      icon: <HugeiconsIcon icon={ApiIcon} strokeWidth={2} />,
    },
    {
      name: "Docs",
      url: "#",
      icon: <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={2} />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              <HugeiconsIcon
                icon={SparklesIcon}
                strokeWidth={2}
                className="size-5!"
              />
              <span className="text-base font-semibold">Tokenly</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
