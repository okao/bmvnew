import {
  fontHeading,
  mvAanamu,
  mvFaseyha,
  mvRasmee,
  mvWaheed,
} from "@/config/fonts"
import { cn } from "@/lib/utils"

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
          fontHeading.variable,
          mvAanamu.variable,
          mvFaseyha.variable,
          mvRasmee.variable,
          mvWaheed.variable
        )}
      >
        {children}
      </div>
    </div>
  )
}
