import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const colorMap: Record<string, string> = {
    Preto: "#1A1A1A",
    Branco: "#FFFFFF",
    Cinza: "#9E9E9E",
    Laranja: "#F57C00",
    "Azul Marinho": "#1A237E",
    Vermelho: "#C62828",
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-brand-orange text-white text-xs font-display font-bold tracking-wider uppercase rounded-full">
            {product.badge}
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-brand-black text-white text-xs font-display font-bold tracking-wider rounded-full">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-400 ml-1">({Math.floor(Math.random() * 200) + 50} avaliações)</span>
        </div>

        <h3 className="font-display text-lg font-bold text-brand-black mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Colors */}
        <div className="mb-3">
          <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Cor</span>
          <div className="flex gap-2 mt-1.5">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? "border-brand-orange scale-110"
                    : "border-gray-200 hover:border-gray-400"
                }`}
                style={{ backgroundColor: colorMap[color] || color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Tamanho</span>
          <div className="flex gap-2 mt-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 rounded-lg text-xs font-display font-bold transition-all ${
                  selectedSize === size
                    ? "bg-brand-orange text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-brand-orange">
                R$ {product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  R$ {product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-400">
              ou 3x de R$ {(product.price / 3).toFixed(2)}
            </span>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-display text-xs font-bold tracking-wider uppercase transition-all ${
              isAdded
                ? "bg-green-500 text-white"
                : "bg-brand-black text-white hover:bg-brand-orange"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Adicionado
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Comprar
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
