export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  sizes: string[];
  category: string;
  badge?: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Camisa Premium Preta",
    description: "Camisa de alta qualidade em algodão egípcio, caimento perfeito e toque macio. Ideal para qualquer ocasião.",
    price: 89.90,
    originalPrice: 119.90,
    image: "/images/camisa1.jpg",
    colors: ["Preto", "Branco", "Cinza"],
    sizes: ["P", "M", "G", "GG", "XG"],
    category: "Básicos",
    badge: "MAIS VENDIDO",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Camisa Premium Branca",
    description: "A camisa branca essencial que não pode faltar no seu guarda-roupa. Tecido premium com tecnologia anti-odor.",
    price: 89.90,
    originalPrice: 119.90,
    image: "/images/camisa2.jpg",
    colors: ["Branco", "Preto", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    category: "Básicos",
    badge: "NOVO",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Camisa Laranja Energy",
    description: "A cor da energia e da atitude. Camisa em tecido respirável, perfeita para quem não passa despercebido.",
    price: 99.90,
    originalPrice: 129.90,
    image: "/images/camisa3.jpg",
    colors: ["Laranja", "Preto", "Branco"],
    sizes: ["P", "M", "G", "GG"],
    category: "Cores",
    badge: "EDIÇÃO LIMITADA",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Camisa Cinza Urban",
    description: "Estilo urbano e sofisticado. Tecido com elastano para máximo conforto e liberdade de movimento.",
    price: 94.90,
    originalPrice: 124.90,
    image: "/images/camisa4.jpg",
    colors: ["Cinza", "Preto", "Branco"],
    sizes: ["P", "M", "G", "GG", "XG"],
    category: "Urban",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Camisa Azul Marinho Classic",
    description: "Elegância atemporal na cor azul marinho. Acabamento impecável e durabilidade garantida.",
    price: 99.90,
    originalPrice: 129.90,
    image: "/images/camisa5.jpg",
    colors: ["Azul Marinho", "Preto", "Branco"],
    sizes: ["P", "M", "G", "GG"],
    category: "Classic",
    badge: "TOP RATED",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Camisa Vermelha Bold",
    description: "Para quem tem atitude. Camisa vermelha em tecido premium, cor vibrante que não desbota.",
    price: 94.90,
    originalPrice: 124.90,
    image: "/images/camisa6.jpg",
    colors: ["Vermelho", "Preto", "Branco"],
    sizes: ["P", "M", "G", "GG", "XG"],
    category: "Cores",
    rating: 4.7,
  },
];

export const categories = ["Todos", "Básicos", "Cores", "Urban", "Classic"];
