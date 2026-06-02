import { Shirt, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <Shirt className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white tracking-wider">
                BLUSARTE
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Conforto e atitude para vencer. Camisas premium feitas para quem não abre mão de qualidade e estilo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/blusarte"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-brand-orange hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
      {  /*      
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-brand-orange hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
        */}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {["Início", "Catálogo", "Sobre Nós", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/50 text-sm hover:text-brand-orange transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase mb-4">
              Categorias
            </h4>
            <ul className="space-y-3">
              {["Básicos", "Cores", "Urban", "Classic"].map((cat) => (
                <li key={cat}>
                  <a
                    href="#catalogo"
                    className="text-white/50 text-sm hover:text-brand-orange transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                Alagoinhas, BA - Brasil
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                (75) 98148-2035
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                useblusarte@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 BLUSARTE. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs font-display tracking-wider">
            CONFORTO E ATITUDE PARA VENCER!
          </p>
        </div>
      </div>
    </footer>
  );
}
