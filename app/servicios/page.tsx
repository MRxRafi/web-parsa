import Link from "next/link";

const services = [
  {
    category: "Derecho Civil",
    items: [
      "Derecho bancario e hipotecario.",
      "Procedimiento monitorio.",
      "Arrendamientos, propiedad horizontal y desahucios.",
      "Obligaciones y contratos.",
      "Reclamaciones de cantidad.",
      "Sucesiones y donaciones.",
      "Accidentes de tráfico.",
      "Tarjetas Revolving"
    ]
  },
  {
    category: "Derecho Matrimonial y Familiar",
    items: [
      "Divorcios y Separaciones de mutuo acuerdo.",
      "Divorcios y Separaciones Contenciosos.",
      "Parejas de hecho.",
      "Medidas paterno filiales.",
      "Incapacidad.",
      "Reclamación de pensiones y gastos.",
      "Custodia y régimen de visitas."
    ]
  },
  {
    category: "Derecho Laboral",
    items: [
      "Acciones de despido",
      "Reclamación de salarios",
      "Infracciones y sanciones",
      "Acciones indemnizatorias",
      "Extinción de contrato por causas objetivas, económicas, etc.",
      "Movilidad geográfica y funcional.",
      "Tramitación de expedientes de crisis (ERE)."
    ]
  },
  {
    category: "Derecho Administrativo",
    items: [
      "Impugnación de resoluciones administrativas.",
      "Oposición a procedimientos sancionadores.",
      "Procesos contenciosos administrativos.",
      "Responsabilidad patrimonial de las Administraciones.",
      "Gestiones ante Organismos Públicos.",
      "Multas de tráfico."
    ]
  }
];

export default function ServiciosPage() {
  return (
    <div className="bg-legal-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <span className="text-legal-gold font-bold uppercase tracking-[0.2em] text-xs block mb-4">Nuestra Experiencia</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 italic">Servicios Jurídicos</h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Ofrecemos un asesoramiento integral en diversas áreas del derecho, siempre con un enfoque personalizado y orientado a la excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-legal-charcoal p-12 border border-white/5 hover:border-legal-gold/50 transition-all duration-500 group"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-serif font-bold text-white group-hover:text-legal-gold transition-colors">
                  {service.category}
                </h2>
                <div className="w-12 h-px bg-legal-gold" />
              </div>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-400 text-sm">
                    <span className="text-legal-gold mr-3 mt-1 text-[10px]">■</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-legal-navy p-12 text-center border border-white/5">
          <h3 className="text-2xl font-serif font-bold text-white mb-6 italic">¿No encuentra el servicio que busca?</h3>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Cada caso es único. Le invitamos a consultarnos su situación particular sin compromiso.
          </p>
          <Link 
            href="/contacto" 
            className="inline-block px-12 py-5 bg-legal-gold text-legal-black font-bold uppercase tracking-widest hover:bg-legal-gold-hover transition-all"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
