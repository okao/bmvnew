import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"

import { Suspense } from "react"

import { Toaster } from "@/components/ui/toaster"
import { Layout, LayoutBody, LayoutHeader } from "@/components/custom/layout"
import AppShell from "@/components/layout/app-shell"
import Loading from "@/components/layout/loading"
import { Search } from "@/components/layout/search"
import { ThemeProvider } from "@/components/layout/theme-provider"
import ThemeSwitch from "@/components/layout/theme-switch"
import { TopNav } from "@/components/layout/top-nav"
import { UserNav } from "@/components/layout/user-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Suspense fallback={<Loading />}>
          <AppShell>
            <Layout>
              <LayoutHeader>
                <TopNav links={topNav} />
                <div className="ml-auto flex items-center space-x-4">
                  <Search />
                  <ThemeSwitch />
                  <UserNav />
                </div>
              </LayoutHeader>
              {/* <LayoutBody className="space-y-4">{children}</LayoutBody> */}

              <div>{children}</div>
            </Layout>
          </AppShell>
        </Suspense>
      </ThemeProvider>
      <Toaster />
    </>
  )
}

const topNav = [
  {
    title: "Overview",
    href: "dashboard/overview",
    isActive: true,
  },
  {
    title: "Customers",
    href: "dashboard/customers",
    isActive: false,
  },
  {
    title: "Products",
    href: "dashboard/products",
    isActive: false,
  },
  {
    title: "Settings",
    href: "dashboard/settings",
    isActive: false,
  },
]
