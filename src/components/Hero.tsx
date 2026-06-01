import { motion } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-brand-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-banner.jpg"
          alt="BLUSARTE"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <Zap className="w-5 h-5 text-brand-orange" />
            <span className="font-display text-brand-orange text-sm tracking-[0.3em] uppercase">
              Nova Coleção 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
          >
            CONFORTO E{" "}
            <span className="text-brand-orange">ATITUDE</span>
            <br />
            PARA VENCER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed"
          >
            Camisas premium que unem estilo, qualidade e conforto. Feitas para quem
            não abre mão de vencer com atitude em cada passo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-display font-semibold text-sm tracking-wider uppercase rounded-lg hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/25"
            >
              Ver Catálogo
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-display font-semibold text-sm tracking-wider uppercase rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              Conheça a Marca
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            {[
              { value: "10K+", label: "Clientes" },
              { value: "50+", label: "Modelos" },
              { value: "4.9", label: "Avaliação" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl sm:text-3xl font-bold text-brand-orange">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-brand-orange rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
