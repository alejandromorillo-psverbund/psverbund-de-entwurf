export type NavSubItem = {
  label: string
  href: string
  children?: NavSubItem[]
}

export type TeaserCard = {
  title: string
  subtitle: string
  href: string
}

export type NavItem = {
  label: string
  href?: string
  children?: NavSubItem[]
  teasers?: TeaserCard[]
}

export type Brand = {
  label: string
  shortLabel: string
  href: string
  accentColor: string
}

export const brands: Brand[] = [
  {
    label: 'PS Kieswerke GmbH',
    shortLabel: 'Kieswerke',
    href: '/kieswerke',
    accentColor: '#f59e0b',
  },
  {
    label: 'PS Straßen und Tiefbau GmbH',
    shortLabel: 'Straßen & Tiefbau',
    href: '/strassen-und-tiefbau',
    accentColor: '#3b82f6',
  },
  {
    label: 'PS Infrabau GmbH',
    shortLabel: 'Infrabau',
    href: '/infrabau',
    accentColor: '#10b981',
  },
  {
    label: 'PS Bauschutt GmbH',
    shortLabel: 'Bauschutt',
    href: '/bauschutt',
    accentColor: '#ef4444',
  },
]

export const mainNavItems: NavItem[] = [
  {
    label: 'Gesellschaften',
    children: [
      { label: 'PS Kieswerke GmbH', href: '/kieswerke' },
      { label: 'PS Straßen und Tiefbau GmbH', href: '/strassen-und-tiefbau' },
      { label: 'PS Infrabau GmbH', href: '/infrabau' },
      { label: 'PS Bauschutt GmbH', href: '/bauschutt' },
    ],
    teasers: [
      { title: 'Alle Gesellschaften', subtitle: 'Unsere Unternehmen', href: '/gesellschaften' },
    ],
  },
  {
    label: 'Projekte',
    href: '/projekte',
    children: [
      { label: 'Alle Projekte', href: '/projekte' },
      { label: 'Highlights', href: '/projekte/highlights' },
      { label: 'Straßenbau', href: '/projekte/strassenbau' },
      { label: 'Erd- und Tiefbau', href: '/projekte/erd-und-tiefbau' },
      { label: 'Abriss & Recycling', href: '/projekte/abriss-recycling' },
    ],
    teasers: [
      { title: 'Alle Projekte', subtitle: 'Referenzprojekte', href: '/projekte' },
      { title: 'Unsere Highlights', subtitle: 'Ausgewählte Projekte', href: '/projekte/highlights' },
    ],
  },
  {
    label: 'Unsere Gruppe',
    children: [
      { label: 'Nachhaltigkeit / Sponsoring / Haltung und Werte', href: '/gruppe/nachhaltigkeit' },
      { label: 'Geschichte', href: '/gruppe/geschichte' },
      { label: 'Gesellschafter', href: '/gruppe/gesellschafter' },
      { label: 'Auszeichnungen', href: '/gruppe/auszeichnungen' },
      { label: 'Zertifikate', href: '/gruppe/zertifikate' },
      {
        label: 'Stellenangebote',
        href: '/karriere/stellenangebote',
        children: [
          { label: 'Alle Jobs', href: '/karriere/stellenangebote' },
          { label: 'Praktikum', href: '/karriere/praktikum' },
        ],
      },
      {
        label: 'Karriere im PS Verbund',
        href: '/karriere',
        children: [
          { label: 'Bewerbungstipps', href: '/karriere/bewerbungstipps' },
          { label: 'Für Berufserfahrene', href: '/karriere/berufserfahrene' },
          { label: 'Die PS Gruppe als Arbeitgeber', href: '/karriere/arbeitgeber' },
        ],
      },
    ],
    teasers: [
      { title: 'Alle Stellenangebote', subtitle: 'Werde ein Teil von uns', href: '/karriere/stellenangebote' },
      { title: 'Die PS Gruppe', subtitle: 'Über uns', href: '/gruppe' },
    ],
  },
  {
    label: 'Neuigkeiten',
    href: '/news',
    children: [
      { label: 'Alle News', href: '/news' },
      { label: 'Sponsoring', href: '/news/sponsoring' },
      { label: 'Events', href: '/news/events' },
      { label: 'PS Momente', href: '/news/ps-momente' },
      { label: 'Pressespiegel', href: '/news/pressespiegel' },
    ],
    teasers: [
      { title: 'Alle Neuigkeiten', subtitle: 'Aktuelles aus der PS Gruppe', href: '/news' },
    ],
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
]
