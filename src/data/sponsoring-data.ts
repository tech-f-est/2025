export interface SponsorPack {
  id: string;
  name: string;
  price: number;
  places: number;
  messages: number;
  tables: number;
  logo: boolean;
  talk: boolean;
  isSpecial?: boolean; // Indicateur pour les packs qui ne sont pas des offres standard
}

export interface Sponsor {
  id: string;
  name: string;
  description?: string;
  website: string;
  logoPath?: string; // Chemin optionnel pour des cas particuliers
  packId: string;
  isHost?: boolean; // Indicateur pour le lieu d'accueil
}

// Packs de sponsoring disponibles
export const sponsorPacks: SponsorPack[] = [
  {
    id: "jaumont",
    name: "Jaumont",
    price: 600,
    places: 0,
    messages: 3,
    tables: 0,
    logo: true,
    talk: false
  },
  {
    id: "bergamote",
    name: "Bergamote",
    price: 1800,
    places: 3,
    messages: 4,
    tables: 1,
    logo: true,
    talk: false
  },
  {
    id: "stanislas",
    name: "Stanislas",
    price: 4500,
    places: 5,
    messages: 6,
    tables: 2,
    logo: true,
    talk: true
  },
  {
    id: "venue",
    name: "hébergement",
    price: 0,
    places: 2,
    messages: 0,
    tables: 0,
    logo: true,
    talk: false,
    isSpecial: true
  }
];

// Liste des sponsors
export const sponsors: Sponsor[] = [
  {
    id: "tdutrion-solution",
    name: "Tdutrion Solution",
    description: "Experts en développement web et solutions digitales",
    website: "https://www.tdutrion-solution.com",
    logoPath: "/img/sponsors/tdutrion.png",
    packId: "jaumont"
  },
  {
    id: "darkmira",
    name: "Darkmira",
    description: "Solutions technologiques avancées et cybersécurité",
    website: "https://www.darkmira.fr",
    logoPath: "/img/sponsors/darkmira.png",
    packId: "bergamote"
  },
  {
    id: "2le",
    name: "2LE",
    description: "Développement de logiciels sur mesure et solutions agiles",
    website: "https://www.2le.net",
    logoPath: "/img/sponsors/2le.png",
    packId: "jaumont"
  },
  {
    id: "tiime",
    name: "Tiime",
    description: "Services financiers et comptables nouvelle génération",
    website: "https://www.tiime.fr",
    logoPath: "/img/sponsors/tiime.png",
    packId: "bergamote"
  },
  {
    id: "iut-charlemagne",
    name: "IUT Nancy-Charlemagne",
    description: "L'IUT Nancy-Charlemagne nous accueille dans ses locaux pour cet événement. Un grand merci à eux pour leur soutien essentiel à la réussite de Tech F'Est 2025.",
    website: "https://iut-charlemagne.univ-lorraine.fr/",
    logoPath: "/img/sponsors/iut-charlemagne.png",
    packId: "venue",
  }
];

// Fonctions utilitaires
export function getSponsorsByPackId(packId: string): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.packId === packId);
}

export function getPackById(packId: string): SponsorPack | undefined {
  return sponsorPacks.find(pack => pack.id === packId);
}

export function getStandardPacks(): SponsorPack[] {
  return sponsorPacks.filter(pack => !pack.isSpecial);
}

// Fonction utilitaire pour obtenir le chemin du logo
export function getSponsorLogoPath(sponsor: Sponsor): string {
  // Si un chemin personnalisé est défini, l'utiliser
  if (sponsor.logoPath) {
    return sponsor.logoPath;
  }
  
  // Essayer d'abord avec .png
  return `/img/sponsors/${sponsor.id}.png`;
}
