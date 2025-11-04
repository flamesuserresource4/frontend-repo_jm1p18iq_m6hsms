import { MessageCircle, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-emerald-600">Show</span>
              <span className="text-gray-900">Up</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#servicios" className="hover:text-gray-900">Servicios</a>
            <a href="#funciona" className="hover:text-gray-900">Cómo funciona</a>
            <a href="#beneficios" className="hover:text-gray-900">Beneficios</a>
            <a href="#pilotos" className="hover:text-gray-900">Pilotos</a>
            <a href="#testimonios" className="hover:text-gray-900">Testimonios</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <a href="#contacto" className="hover:text-gray-900">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Phone className="h-4 w-4" />
              Hablar
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              Ver demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
