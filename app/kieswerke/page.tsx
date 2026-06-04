import KieswerkeHero from "@/components/kieswerke/KieswerkeHero"
import KieswerkeOverview from "@/components/kieswerke/KieswerkeOverview"
import KieswerkeLeistungen from "@/components/kieswerke/KieswerkeLeistungen"
import KieswerkeStandort from "@/components/kieswerke/KieswerkeStandort"
import KieswerkeKennzahlen from "@/components/kieswerke/KieswerkeKennzahlen"
import KieswerkeHaltung from "@/components/kieswerke/KieswerkeHaltung"
import KieswerkeKontakt from "@/components/kieswerke/KieswerkeKontakt"

export default function KieswerkePage() {
  return (
    <main>
      <KieswerkeHero />
      <KieswerkeOverview />
      <KieswerkeLeistungen />
      <KieswerkeStandort />
      <KieswerkeKennzahlen />
      <KieswerkeHaltung />
      <KieswerkeKontakt />
    </main>
  )
}
