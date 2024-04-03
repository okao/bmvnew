"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import type { NavItem } from "@/types"

import { mvAanamu, mvRasmee } from "@/config/fonts"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

interface NavigationMobileProps {
  navItems: NavItem[]
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  disabled?: boolean
  segment: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rtl text-foreground/70 transition-colors duration-300 ease-in-out hover:text-foreground dark:text-slate-100 dark:hover:text-slate-100",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}

export function NavigationMobile({ navItems }: NavigationMobileProps) {
  const segment = useSelectedLayoutSegment()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="transition-all duration-300 ease-in-out">
        <Button variant="navbarIcon" size="icon" className="md:hidden">
          <Icons.newsMenu className="size-5" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col gap-12 bg-background transition-all duration-500 ease-in-out dark:bg-slate-800"
      >
        <div className="pl-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            {/* <Icons.rocket className="mr-2 size-8" aria-hidden="true" /> */}
            {/* <span className="text-2xl font-bold leading-none tracking-wide">
              {siteConfig.name}
            </span> */}
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <div
          className={cn(
            "rtl flex flex-col gap-10 pr-8 text-center text-2xl font-medium leading-6 tracking-wider  dark:text-slate-100 dark:hover:bg-slate-900",
            mvRasmee.className
          )}
        >
          {navItems.map((item) => (
            <MobileLink
              key={item.title}
              href={item.href}
              segment={String(segment)}
              setIsOpen={setIsOpen}
            >
              {item.title}
            </MobileLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
