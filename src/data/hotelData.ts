export interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export const roomsData: Room[] = [
  {
    id: 1,
    title: "Chambre Supérieure",
    description: "Confort moderne, décoration soignée, vue latérale sur la ville et équipements haut de gamme.",
    price: "85 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=600&q=80",
    tag: "Populaire"
  },
  {
    id: 2,
    title: "Suite Exécutive",
    description: "Espace spacieux, salon séparé, bureau de travail et literie luxueuse pour un séjour d'exception.",
    price: "140 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
    tag: "Vue Océan"
  },
  {
    id: 3,
    title: "Villa Privée avec Piscine",
    description: "Expérience unique, service de majordome dédié, piscine privée et terrasse face à l'Atlantique.",
    price: "320 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
    tag: "Luxe Ultime"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "L'art de vivre à Dakar : Entre traditions et modernité",
    excerpt: "Découvrez les plus beaux sites culturels et artistiques à explorer à deux pas de notre hôtel.",
    date: "12 Octobre 2026",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Gastronomie dakaroise : Les saveurs de la mer",
    excerpt: "Rencontre avec notre chef exécutif qui revisite les classiques de la cuisine locale avec raffinement.",
    date: "02 Octobre 2026",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
  }
];