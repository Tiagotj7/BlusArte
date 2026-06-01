import { motion } from "framer-motion";
import { Shield, Truck, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Tecidos premium selecionados e costura reforçada para máxima durabilidade.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Enviamos para todo o Brasil com rastreamento em tempo real.",
  },
  {
    icon: Headphones,
    title: "Atendimento VIP",
    description: "Suporte personalizado via WhatsApp para tirar todas as suas dúvidas.",
  },
  {
    icon: Award,
    title: "Satisfação Garantida",
    description: "Troca fácil em até 7 dias se não ficar do jeito que você esperava.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-brand-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-brand-orange text-sm tracking-[0.3em] uppercase">
            Por que escolher a BLUSARTE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">
            A DIFERENÇA ESTÁ NOS DETALHES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-brand-orange/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="font-display text-brand-orange text-sm tracking-[0.3em] uppercase">
              Nossa História
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-3 mb-6">
              NASCEMOS DA ATITUDE DE QUEM NÃO DESISTE
            </h3>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                A BLUSARTE nasceu com um propósito claro: criar camisas que não são apenas peças de roupa,
                mas sim uma extensão da atitude de quem as veste. Cada costura, cada tecido, cada detalhe
                foi pensado para quem acredita que o conforto e o estilo andam juntos.
              </p>
              <p>
                Nossas camisas são produzidas com materiais de alta qualidade, garantindo não apenas
                um visual impecável, mas também a durabilidade que você precisa no dia a dia.
                Acreditamos que quando você se veste bem, se sente bem — e quando se sente bem,
                está pronto para vencer.
              </p>
              <p>
                <span className="text-brand-orange font-display font-bold">
                  "Conforto e atitude para vencer!"
                </span>{" "}
                — Esse é o nosso lema e o que buscamos entregar em cada peça.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/camisa3.jpg"
                alt="BLUSARTE"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-orange rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-3xl font-black text-white">5+</div>
                <div className="text-white/80 text-xs font-display">Anos no mercado</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
