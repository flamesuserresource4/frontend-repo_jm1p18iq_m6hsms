import { CheckCircle2, MessageCircle, Shield, Clock, Calendar, Zap, Users, BarChart, CreditCard, ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <section id="beneficios" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Partners / Funciona con */}
        <div id="servicios" className="grid gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-emerald-700">Funciona con</p>
            <h3 className="text-xl font-semibold text-gray-900">WhatsApp y tu cobro actual</h3>
            <p className="text-gray-600">
              Pagos procesados con Stripe Connect. Sin apps nuevas para el paciente. Sin migraciones pesadas.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
              <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp
            </span>
            <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
              <CreditCard className="h-4 w-4 text-indigo-600" /> Stripe Connect
            </span>
            <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
              <Shield className="h-4 w-4 text-slate-600" /> Sin apps nuevas
            </span>
          </div>
        </div>

        {/* Beneficios */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Beneficios</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Enfocados en resultados reales para tu clínica.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${b.bg}`}>
                  <b.icon className={`h-5 w-5 ${b.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mini CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white sm:flex-row">
          <div>
            <h3 className="text-xl font-semibold">¿Listo para asegurar tu agenda?</h3>
            <p className="text-emerald-100">Pilotos limitados — solicita tu propuesta.</p>
          </div>
          <div className="flex gap-3">
            <a href="#pilotos" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50">
              Solicitar piloto <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "Agenda confirmada",
    desc: "Citas realmente confirmadas. Adiós a los ‘fantasmas’.",
    icon: CheckCircle2,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    title: "Huecos llenos a tiempo",
    desc: "Ante cancelación, ofrecemos el lugar automáticamente hasta llenarlo.",
    icon: Zap,
    bg: "bg-yellow-50",
    color: "text-yellow-600",
  },
  {
    title: "Recordatorios inteligentes",
    desc: "Mensajes con Confirmar/Reagendar en un toque.",
    icon: Clock,
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    title: "Tu operación, igual",
    desc: "No cambias de sistema ni de caja; solo agregas garantía a la agenda.",
    icon: Shield,
    bg: "bg-slate-50",
    color: "text-slate-600",
  },
  {
    title: "Menos trabajo del front desk",
    desc: "Menos llamadas y persecuciones; más orden y foco en pacientes.",
    icon: Users,
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    title: "Visibilidad clara",
    desc: "Asistencia, cancelaciones y huecos recuperados en un solo panel.",
    icon: BarChart,
    bg: "bg-rose-50",
    color: "text-rose-600",
  },
];
