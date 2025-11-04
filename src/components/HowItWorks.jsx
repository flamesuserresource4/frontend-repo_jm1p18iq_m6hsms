import { useState } from "react";
import { Shield, CheckCircle2, Calendar, Smartphone, CreditCard, ArrowRight, MessageCircle, BadgeCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="funciona" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Cómo funciona?</h2>
          <p className="mt-3 text-gray-600">Configuración exprés, confirmación por WhatsApp y control total el día de la cita.</p>
        </div>

        {/* Steps */}
        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${s.bg}`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>

        {/* Why buy */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Por qué comprar / Cómo ayuda</h3>
            <ul className="space-y-3">
              {why.map((w) => (
                <li key={w} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilot offer */}
          <div id="pilotos" className="rounded-2xl bg-white p-6 ring-1 ring-emerald-200">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
              <BadgeCheck className="h-4 w-4" /> Pilotos limitados
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Solicita tu propuesta</h3>
            <p className="mt-2 text-gray-600">
              Incluye implementación guiada, configuración de reglas, mensajes y panel de resultados.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Garantía primer mes: si no recuperas al menos lo que inviertes, bonificamos la diferencia o aplicamos –50% el mes siguiente.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                Quiero ser clínica piloto <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                Compartir cotización en llamada
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonios" className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Testimonios</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
                <blockquote className="text-gray-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-gray-900">— {t.author}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">Sustituir por testimonios reales conforme avancen los pilotos.</p>
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">FAQ</h3>
          <div className="mt-6 divide-y divide-gray-200 rounded-2xl bg-white ring-1 ring-gray-200">
            {faqs.map((f, idx) => (
              <AccordionItem key={idx} question={f.q} answer={f.a} />)
            )}
          </div>
        </div>

        {/* Final CTA */}
        <div id="contacto" className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-10 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold">Asegura tu agenda este mes.</h3>
            <p className="mt-2 text-emerald-100">Reduce ausencias, llena huecos y gana claridad—sin cambiar tu operación.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#pilotos" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50">
                Solicitar piloto <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/5215555555555" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                <MessageCircle className="h-5 w-5" /> Hablar por WhatsApp
              </a>
            </div>
            <p className="mt-4 text-xs text-emerald-100">
              Al confirmar una cita, el paciente acepta la política visible en el chat. Los cargos solo aplican si no asiste según dichas reglas.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
          <p className="text-sm font-semibold">
            <span className="text-emerald-600">Show</span>
            <span className="text-gray-900">Up</span>
          </p>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <a href="#contacto" className="hover:text-gray-900">Contacto</a>
            <a href="#" className="hover:text-gray-900">Términos</a>
            <a href="#" className="hover:text-gray-900">Privacidad</a>
          </nav>
          <p className="text-sm text-gray-500">© 2025 ShowUp. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-6">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-gray-900"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && <div className="pb-4 text-sm text-gray-600">{answer}</div>}
    </div>
  );
}

const steps = [
  {
    title: "1) Configuración exprés (1 min)",
    desc: "Definimos tus reglas: qué servicios piden confirmación estricta, ventanas de aviso y cargos. No tocas tu EMR/POS.",
    icon: Shield,
    bg: "bg-slate-50",
    color: "text-slate-600",
  },
  {
    title: "2) Agenda por WhatsApp",
    desc: "El paciente recibe la política clara y confirma su cita (tarjeta en garantía cuando aplique). Puede reagendar sin llamar.",
    icon: Smartphone,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    title: "3) Día de la cita (tap NFC)",
    desc: "El paciente marca asistencia con un tap. Si asiste, se libera la garantía; si no llega según tu política, se aplica el cargo. Si alguien cancela tarde, ofrecemos el lugar y llenamos el hueco rápido.",
    icon: Calendar,
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
];

const why = [
  "Sube tu show-rate sin pedir prepagos.",
  "Recupera ingresos de no-shows y huecos de último minuto.",
  "Cero fricción para el paciente (todo por WhatsApp).",
  "Cero estrés para tu equipo (menos llamadas, más claridad).",
  "Todo medible en un panel sencillo.",
];

const testimonials = [
  { quote: "Dejamos de perder horas por ausencias y el equipo respira mejor.", author: "Dirección Administrativa, fisioterapia" },
  { quote: "Los huecos se llenan solos. Antes los dábamos por perdidos.", author: "Coordinación de Agenda, dental" },
  { quote: "Por fin tenemos números claros de asistencia y cancelaciones.", author: "Contabilidad, grupo de clínicas" },
];

const faqs = [
  { q: "¿Tengo que cambiar mi sistema de agenda o mi caja?", a: "No. Se integra a lo que ya usas y sigues cobrando como siempre." },
  { q: "¿Cómo se confirma la cita?", a: "Por WhatsApp con autorización sencilla. Si asiste, no se cobra nada." },
  { q: "¿Qué pasa si cancela a tiempo?", a: "Se respeta tu política y no hay cargos. Si cancela tarde, aplica lo acordado." },
  { q: "¿Y si el paciente no llega?", a: "Se realiza el cargo por no-show definido por tu clínica." },
  { q: "¿Puedo elegir qué servicios piden confirmación estricta?", a: "Sí. Por servicio, sede o tipo de paciente (primera vez, VIP, etc.)." },
  { q: "¿Cuánto tarda en arrancar?", a: "Días, no semanas. Hacemos la puesta a punto contigo." },
  { q: "¿Necesita el paciente descargar una app?", a: "No. Todo sucede por WhatsApp." },
  { q: "¿Cómo cotizan?", a: "En llamada breve. Sin precios públicos mientras estamos en pilotos." },
  { q: "¿Qué pasa si se cobra por error o hay disputa?", a: "Contamos con evidencia completa (política visible, timestamps, check-in) y procesamos reembolsos cuando corresponda." },
];
