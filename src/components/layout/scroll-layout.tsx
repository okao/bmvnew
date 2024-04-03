import { Inter } from "next/font/google"

import {
  fontHeading,
  mvAanamu,
  mvFaseyha,
  mvRasmee,
  mvWaheed,
} from "@/config/fonts"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export default function ScrollLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={""}>
      <div
        className={cn(
          "w-full bg-background bg-gradient-to-r from-background to-pink-400/10 font-sans antialiased",
          inter.className
        )}
      >
        {children}
      </div>
    </div>
  )
}
