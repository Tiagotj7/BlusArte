import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  const handleWhatsAppCheckout = () => {
    const phone = "5575981482035"; // Número do vendedor
    let message = "*Olá! Quero finalizar minha compra na BLUSARTE*\n\n";
    message += "*Itens do pedido:*\n";
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   Cor: ${item.selectedColor}\n`;
      message += `   Tamanho: ${item.selectedSize}\n`;
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Preço: R$ ${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });
    message += `*Total: R$ ${totalPrice.toFixed(2)}*\n\n`;
    message += "Aguardo instruções para pagamento!";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-brand-orange" />
                <h2 className="font-display text-lg font-bold text-brand-black">
                  SEU CARRINHO
                </h2>
                <span className="px-2 py-0.5 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                  <p className="font-display text-lg text-gray-400 mb-2">
                    Carrinho vazio
                  </p>
                  <p className="text-sm text-gray-400">
                    Adicione camisas ao seu carrinho
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 px-6 py-2.5 bg-brand-orange text-white font-display text-xs font-bold tracking-wider uppercase rounded-lg hover:bg-brand-orange-dark transition-colors"
                  >
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 p-3 bg-gray-50 rounded-xl"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm font-bold text-brand-black truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.selectedColor} / {item.selectedSize}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.selectedColor,
                                  item.selectedSize,
                                  item.quantity - 1
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-md hover:border-brand-orange transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-display text-sm font-bold w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.selectedColor,
                                  item.selectedSize,
                                  item.quantity + 1
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-md hover:border-brand-orange transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-display text-sm font-bold text-brand-orange">
                              R$ {(item.product.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() =>
                                removeFromCart(
                                  item.product.id,
                                  item.selectedColor,
                                  item.selectedSize
                                )
                              }
                              className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-gray-100 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-display text-xl font-bold text-brand-black">
                    R$ {totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-4 text-center">
                  Frete calculado na conversa com o vendedor
                </p>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-display font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25 animate-pulse-glow"
                >
                  <MessageCircle className="w-5 h-5" />
                  Finalizar no WhatsApp
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-3 py-3 text-gray-500 font-display text-xs tracking-wider uppercase hover:text-brand-orange transition-colors"
                >
                  Continuar Comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
