export interface Speaker {
  id: string;
  name: string;
  bio?: string;
  company?: string;
  title?: string;
  avatarUrl?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
    bluesky?: string;  // Ajout de Bluesky
  };
}

export type EventType = 'talk' | 'keynote' | 'break' | 'lunch' | 'opening' | 'closing';

export interface Talk {
  id: string;
  title: string;
  abstract: string;
  shortDescription?: string; // Ajout d'une courte description (chapeau)
  speakerId?: string; // Optional car les pauses n'ont pas de speaker
  startTime?: string;
  endTime?: string;
  day?: "morning" | "afternoon";
  track?: string;
  order?: number;
  type: EventType; // Nouveau champ pour différencier les types d'événements
}

// Les données des speakers
export const speakers: Speaker[] = [
  {
    id: "arnaud-lahaxe",
    name: "Arnaud Lahaxe",
    bio: "Fort de près de 15 ans d'expérience en tant que développeur PHP, mais pas que, il s'est toujours distingué par son amour du code bien conçu, privilégiant des solutions simples, robustes et faciles à maintenir. ",
    company: "BoursoBank",
    title: "Architecte applicatif",
    avatarUrl: "/img/speakers/arnaud-lahaxe.jpg",
    socialLinks: {
      twitter: "arnaud_lahaxe",
      linkedin: "/arnaud-⚡%EF%B8%8F-lahaxe-15837333/",
    }
  },
  {
    id: "kevin-maschtaler",
    name: "Kevin Maschtaler",
    bio: "Développeur depuis 10 ans, il s'est spécialisé dans l'architecture et la fiabilité de plateformes traitant de grands volumes. Chez Shotgun, il garanti la robustesse et la conformité de leur plateforme de paiement.",
    company: "Shotgun",
    title: "Staff Software Engineer",
    socialLinks: {
      twitter: "Kmaschta",
      github: "Kmaschta",
      linkedin: "kmaschta"
    }
  },
  {
    id: "christophe-gigax",
    name: "Christophe Gigax",
    bio: "Expert passionné des technologies Microsoft, spécialisé dans le développement Cloud, Web et Mobile. Certifié Azure Architect, DevOps Expert et Developer, il a été reconnu Microsoft MVP en Visual Studio et Technologies de Développement depuis 2017.",
    company: "Hager",
    title: "Cloud Solution Architect",
    socialLinks: {
      linkedin: "christophegigax",
    }
  },
  {
    id: "steven-martins",
    name: "Steven Martins",
    bio: "Spécialiste des technologies cloud-native et de l'orchestration conteneuriséem, ancien RSSI ayant assuré la certification ISO 27001, il partagera son expertise en modernisation d'infrastructures et pratiques DevOps pour optimiser vos plateformes.",
    company: "+Simple",
    title: "Architecte Technique",
    socialLinks: {
      linkedin: "smartins0",
    }
  },
  {
    id: "anne-flore-francois",
    name: "Anne-Flore François",
    bio: "Elle consacre une partie de son temps à détecter les risques de sécurité des infrastructures cloud de clients à l’aide d’audits et pentests. Et le reste du temps, elle démystifie pour ses clients les bonnes pratiques de sécurité cloud et implémente des correctifs de vulnérabilités et des outils de défense nécessaires à une infra robuste et sécurisée.",
    company: "Theodo Cloud",
    title: "Lead SecOps",
    socialLinks: {
      linkedin: "anne-flore-francois",
    }
  },
  {
    id: "danielle-kayumbi",
    name: "Danielle Kayumbi",
    bio: "Ingénieure logicielle depuis plus de 15 ans, elle est actuellement Managing Solution Architect chez Capgemini Group.\n\nLe partage de connaissances est sa principale motivation. Depuis 2017, elle contribue au développement de solutions open source en présentant des conférences sur des sujets techniques qui la passionnent, partout dans le monde.",
    company: "Capgemini",
    title: "Architecte solution",
    socialLinks: {
      linkedin: "danielle-kayumbi-hodieb-5450b448",
    }
  },
  {
    id: "iana-iatsun",
    name: "Iana Iatsun",
    bio: "Docteure en traitement d'images et signal et pionnière des réseaux de neurones. Après une carrière en biométrie, elle dirige depuis 5 ans une équipe MLOps dans une institution financière, tout en promouvant une IA éthique et responsable. Sa double expertise technique et éthique en fait une voix incontournable dans le domaine de l'intelligence artificielle.",
    company: "IA parle",
    title: " Artificial Intelligence Specialist",
    socialLinks: {
      linkedin: "iaiatsun",
    }
  },
  {
    id: "emmanuelle-aboaf",
    name: "Emmanuelle Aboaf",
    bio: "Sourde de naissance, bionique (deux implants cochléaires) et surtout développeuse Fullstack Angular .NET chez Shodo, elle lutte chaque jour pour l’accessibilité. Dans son monde idéal, tout doit être accessible aussi bien dans la vraie vie que sur le Web.",
    company: "SHODO",
    title: "développeuse fullstack",
    socialLinks: {
      linkedin: "emmanuelle-aboaf",
    }
  },
];

// Les données de tous les événements (talks et autres)
export const talks: Talk[] = [
  // Accueil
  {
    id: "opening",
    title: "Accueil des participants",
    shortDescription: "Récupération des badges",
    abstract: "Prenez le temps de récupérer votre badge et de faire connaissance avec les autres participants avant le début des conférences.",
    startTime: "8:30",
    endTime: "9:00",
    day: "morning",
    type: "opening"
  },
  
  // Keynote d'ouverture
  {
    id: "opening-keynote",
    title: "Keynote d'ouverture",
    shortDescription: "Présentation de la journée et des thématiques du Tech-f-est 2025",
    abstract: "Introduction officielle à la journée Tech-f-est 2025, présentant le programme, les intervenants et les grands thèmes qui seront abordés tout au long de cette journée riche en partage de connaissances.",
    startTime: "9:00",
    endTime: "9:10",
    day: "morning",
    type: "keynote"
  },
  
  // Conférences du matin
  {
    id: "embeddings",
    title: "Embeddings : transformation de la recherche d'information",
    shortDescription: "Découvrez comment les grands modèles de langage révolutionnent nos approches de recherche d'information.",
    abstract: "Les moteurs de recherche, basés sur des index, ont longtemps été des outils essentiels pour trouver de l'information en ligne. Cependant, l'évolution rapide des grands modèles de langage a ouvert la voie à une nouvelle génération de systèmes de recherche : les moteurs de réponse, offrant une compréhension sémantique plus approfondie des requêtes.\nCette conférence explorera les différences fondamentales entre ces deux types de moteurs. Nous discuterons de leur fonctionnement respectif et des avantages qu'offrent les moteurs de réponse par rapport aux moteurs de recherche traditionnels. Nous nous pencherons également sur les architectures à mettre en place pour combiner le meilleur des deux mondes : la rapidité des index et la compréhension sémantique des grands modèles de langage",
    speakerId: "iana-iatsun",
    startTime: "9:15",
    endTime: "9:55",
    day: "morning",
    order: 1,
    type: "talk"
  },
  {
    id: "migration-technique",
    title: "Migration Technique: un parcours du combattant",
    shortDescription: "Un retour d'expérience concret sur la migration d'un système legacy critique vieux de plus de 20 ans.",
    abstract: "Migrer un code legacy vieux de plus de 20 ans, encore massivement utilisé pour des fonctionnalités critiques au cœur du business, est un défi de taille. Entre dette technique, complexité accumulée et exigences métier incontournables, comment mener à bien une telle transformation sans mettre en péril l'activité de l'entreprise ?\n\nDans cette conférence, je partagerai mon retour d'expérience sur la migration d'un système legacy central, en abordant les méthodologies, outils et bonnes pratiques qui ont permis de minimiser les risques et d'assurer une transition en douceur. Vous découvrirez comment nous avons identifié les zones à risque, mis en place une approche progressive et embarqué progressivement les développeurs dans la migration.\n\n    Que vous soyez en pleine réflexion sur la modernisation de votre stack ou confronté à un projet de migration d’envergure, cette session vous donnera des clés concrètes pour anticiper les obstacles et maximiser vos chances de succès.",
    speakerId: "arnaud-lahaxe",
    startTime: "10:00",
    endTime: "10:40",
    day: "morning",
    order: 2,
    type: "talk"
  },
  
  // Pause café matinée
  {
    id: "morning-break",
    title: "Pause",
    shortDescription: "Rafraîchissements et collations pour favoriser les échanges entre participants",
    abstract: "Profitez de cette pause pour échanger avec les intervenants et les autres participants sur les sujets abordés durant la matinée, tout en savourant des rafraîchissements et collations.",
    startTime: "10:40",
    endTime: "11:10",
    day: "morning",
    type: "break"
  },
  
  // Suite conférences du matin
  {
    id: "accessibilite",
    title: "Comment débuter dans l'accessibilité numérique ?",
    shortDescription: "Les fondamentaux et bonnes pratiques pour rendre vos développements web accessibles à tous.",
    abstract: "Vous êtes développeuse ou développeur et vous êtes intéressés par l'accessibilité numérique mais vous ne savez pas par où commencer ? Venez découvrir les bases du développement de l'accessibilité numérique en HTML. Vous verrez que respecter la sémantique HTML permet de faciliter l'accessibilité.\nA travers mes exemples, vous pourrez sans peine appliquer les conseils que je vous donnerai dans vos développements y compris dans les frameworks JS (Angular, React et Vue).",
    speakerId: "emmanuelle-aboaf",
    startTime: "11:10",
    endTime: "11:50",
    day: "morning",
    order: 3,
    type: "talk"
  },
  {
    id: "stripe-integration",
    title: "Comment scaler une integration Stripe à large échelle : une histoire de fiabilité",
    shortDescription: "Plongez dans les défis du Reliability Engineering avec ce retour d'expérience de Shotgun.",
    abstract: "    Kévin, Staff Software Engineer à Shotgun, vous parlera des challenges et apprentissages de la mise à grande échelle d’une intégration Stripe dans un produit complexe et international.\n\nUn prétexte parfait pour s’initier au Reliability Engineering.\nAu menu : qualité de service, idempotence, atomicité, consistence de données, workers/retries, et bien d’autres.",
    speakerId: "kevin-maschtaler",
    startTime: "11:55",
    endTime: "12:35",
    day: "morning",
    order: 4,
    type: "talk"
  },
  
  // Déjeuner
  {
    id: "lunch",
    title: "Pause déjeuner",
    shortDescription: "Lunch boxes gourmandes préparées par un traiteur local avec produits de saison",
    abstract: "Savourez une pause déjeuner avec des lunch boxes gourmandes préparées spécialement pour l'événement par un traiteur local, mettant à l'honneur les produits de saison et les spécialités régionales. Une occasion de recharger vos batteries tout en continuant les discussions techniques dans un cadre convivial.",
    startTime: "12:35",
    endTime: "14:00",
    day: "morning",
    type: "lunch"
  },
  
  // Conférences de l'après-midi
  {
    id: "dapr-architecture",
    title: "Façonner les architectures du futur avec Dapr",
    shortDescription: "Explorez comment simplifier vos architectures micro-services grâce à ce projet Open Source de la CNCF.",
    abstract: "Construire son architecture distribuée en micro-service n'est jamais chose facile, et nombreuses sont les équipes faisant face aux difficultés de ce type d'architecture complexe pourtant très prometteuse.\n\nDapr est un projet Open Source - incubé par la fondation CNCF - permettant de faciliter l'élaboration d'une architecture micro-service. Agissant comme une couche d'abstraction applicatives, Dapr expose des mécanismes généraux tels que la gestion d'état ou les pub/sub via des canaux de communication standard. L'objectif est de simplifier la conception d'application en micro-service, peu importe la technologie utilisée (Node, Go, .NET, React ...)\n\nNous verrons dans cette session différentes architectures possibles avec Dapr, et quelques démo notamment avec Kubernetes permettant de faciliter l'orchestration des microservices.",
    speakerId: "christophe-gigax",
    startTime: "14:00",
    endTime: "14:40",
    day: "afternoon",
    order: 5,
    type: "talk"
  },
  {
    id: "cicd-security",
    title: "CI / CD: Correct Implementation or Continuous Deception",
    shortDescription: "Une analyse critique des failles de sécurité souvent négligées dans nos pipelines CI/CD.",
    abstract: "Des secrets volés, une récupération de votre code, une RCE (Remote Code Execution)… Voici quelques exemples de ce qui peut arriver si votre CI n’est pas correctement configurée et sécurisée. Et pourtant, la CI / CD est souvent hors scope des tests d’intrusion et personne ne prend la responsabilité de la sécuriser.\n\nLes CI / CD nous ont apporté beaucoup de sécurité et d’améliorations de qualité dans nos pratiques de code au quotidien, en apportant des standards de code et en faisant tourner des outils pour automatiser nos pratiques de sécurité. Elles font cependant partie de la surface d’attaque de nos applications et doivent être analysée, mises à jour et sécurisées au même titre que le code. Certaines configurations par défaut sont même dangereuses !\n\nDans ce talk, vous verrez comment faire des injections dans les CI / CD, récupérer des secrets ou exécuter des scripts et quels sont les bons moyens pour les sécuriser.",
    speakerId: "anne-flore-francois",
    startTime: "14:45",
    endTime: "15:25",
    day: "afternoon",
    order: 6,
    type: "talk"
  },
  
  // Pause café après-midi
  {
    id: "afternoon-break",
    title: "Pause",
    shortDescription: "Moment d'échange et de discussion autour de boissons et mignardises",
    abstract: "Cette pause est l'occasion de discuter des présentations de l'après-midi, d'échanger vos cartes de visite et de développer votre réseau professionnel tout en profitant de boissons et de délicieuses mignardises.",
    startTime: "15:25",
    endTime: "15:55",
    day: "afternoon",
    type: "break"
  },
  
  // Suite conférences de l'après-midi
  {
    id: "nomad-kubernetes",
    title: "Nomad & Co : Une alternative crédible à Kubernetes pour la transition vers le cloud ?",
    shortDescription: "Découvrez l'écosystème Nomad comme solution pragmatique pour vos infrastructures cloud.",
    abstract: "Face à la modernisation des infrastructures, la transition d’une architecture N-tiers historique vers une approche cloud-native et containerisée est un défi de taille. Kubernetes s’impose souvent comme le choix par défaut, mais est-ce la seule option viable ?\n\nDans cette session, nous explorerons Nomad, la solution d’orchestration d’HashiCorp, et son écosystème : Vault pour la gestion des secrets, Consul pour la découverte automatique des services, GitLab CI/CD pour l’automatisation des déploiements, Docker et notre factory d’images pour la gestion des conteneurs, ainsi que HAProxy pour la résilience.\n\nNous verrons comment cette stack permet de répondre aux enjeux de scalabilité, de simplification opérationnelle et de migration progressive vers le cloud public. Nomad est-il une alternative sérieuse à Kubernetes, ou une étape intermédiaire dans la transition ? Peut-être, peut-être pas… Mais c’est un choix pragmatique que nous détaillerons ensemble !",
    speakerId: "steven-martins",
    startTime: "15:55",
    endTime: "16:35",
    day: "afternoon",
    order: 7,
    type: "talk"
  },
  {
    id: "opentelemetry",
    title: "Tracez votre code applicatif avec OpenTelemetry",
    shortDescription: "Comprendre et implémenter l'observabilité distribuée avec OpenTelemetry dans vos microservices.",
    abstract: "Dans une architecture distribuée, étant donné que les microservices évoluent indépendamment, il est nécessaire de pouvoir suivre le parcours d'une requête entièrement. Cependant, en cas d'erreur dans les communications, le suivi de la requête devient fastidieux voire impossible en utilisant les techniques traditionnelles.\n\nNous devons être en mesure d'observer le système afin d'anticiper les problèmes qui pourraient engendrer des pannes du système. La collecte, le traitement et la transmission des données télémétriques deviennent donc primordiales pour répondre à ce besoin, en s'appuyant sur le framework OpenTelemetry.\n\nAu cours de cette conférence, nous verrons les principes fondamentaux de OpenTelemetry, ainsi qu'un exemple d'implémentation dans un projet en PHP.",
    speakerId: "danielle-kayumbi",
    startTime: "16:40",
    endTime: "17:20",
    day: "afternoon",
    order: 8,
    type: "talk"
  },
  
  // Keynote de clôture
  {
    id: "closing-keynote",
    title: "Keynote de clôture",
    shortDescription: "Bilan de la journée et perspectives pour l'édition 2026",
    abstract: "Récapitulation des moments forts de la journée, remerciements aux intervenants et participants, et premières annonces pour l'édition Tech-f-est 2026 avec un aperçu des thématiques qui seront explorées l'année prochaine.",
    startTime: "17:25",
    endTime: "17:35",
    day: "afternoon",
    type: "keynote"
  }
];

// Fonction utilitaire pour récupérer un speaker à partir d'un speakerId
export function getSpeakerById(id: string | undefined): Speaker | undefined {
  if (!id) return undefined;
  return speakers.find(speaker => speaker.id === id);
}

// Fonction utilitaire pour récupérer un talk à partir d'un talkId
export function getTalkById(id: string): Talk | undefined {
  return talks.find(talk => talk.id === id);
}

// Fonction utilitaire pour récupérer tous les talks d'un speaker
export function getTalksBySpeakerId(speakerId: string): Talk[] {
  return talks.filter(talk => talk.speakerId === speakerId);
}

// Fonction helper pour convertir l'heure format "HH:MM" en minutes
function parseTimeToMinutes(time: string): number {
  const parts = time.split(':').map(Number);
  const hours = parts[0] || 0;
  const minutes = parts[1] || 0;
  return hours * 60 + minutes;
}

/**
 * Récupère tous les événements de la journée, triés chronologiquement
 * @param eventTypes Types d'événements à récupérer (optionnel)
 */
export function getAllEvents(eventTypes?: EventType[]): Talk[] {
  let filteredEvents = [...talks];
  
  // Si des types d'événements sont spécifiés, on filtre
  if (eventTypes && eventTypes.length > 0) {
    filteredEvents = filteredEvents.filter(event => eventTypes.includes(event.type));
  }
  
  // Tri par heure de début
  return filteredEvents.sort((a, b) => {
    // Convertir les temps en minutes pour permettre la comparaison
    const timeA = a.startTime ? parseTimeToMinutes(a.startTime) : 0;
    const timeB = b.startTime ? parseTimeToMinutes(b.startTime) : 0;
    
    return timeA - timeB;
  });
}

// Fonction pour récupérer uniquement les talks (pour la page speakers)
export function getAllTalks(): Talk[] {
  return talks.filter(talk => talk.type === 'talk');
}

// Fonction pour récupérer l'URL d'un talk avec son ancre
export function getTalkUrl(talkId: string): string {
  return `/planning#talk-${talkId}`;
}

// Fonction pour obtenir l'URL du speaker
export function getSpeakerUrl(speakerId: string): string {
  return `/speakers#speaker-${speakerId}`;
}
