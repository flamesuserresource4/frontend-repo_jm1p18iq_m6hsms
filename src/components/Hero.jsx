import { MessageCircle, Play, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Clínicas piloto activas en MX
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Menos ausencias. Más citas atendidas.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Asegura tus citas por WhatsApp: confirmación en un toque, recordatorios automáticos y huecos llenos en minutos. Sin cambiar tu sistema ni tu forma de cobrar.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pilotos"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
            >
              <Rocket className="h-5 w-5" />
              Quiero un piloto
            </a>
            <a
              id="demo"
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              <MessageCircle className="h-5 w-5" />
              Ver demo en WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -mb-20">
        <svg viewBox="0 0 1440 320" className="w-full text-emerald-50" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,96L80,122.7C160,149,320,203,480,224C640,245,800,235,960,197.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
