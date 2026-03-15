import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-mesh">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10" data-aos="fade-up">
            <span className="block text-legal-gold font-medium tracking-widest uppercase mb-6">Discreción. Precisión. Resultados.</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
              Defensa <br />
              <span className="italic font-normal text-legal-gold">Personalizada</span> <br />
              de sus intereses.
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              Combinamos años de experiencia jurídica con un enfoque a medida para proteger sus derechos y resolver desafíos complejos.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contacto"
                className="px-10 py-5 bg-legal-gold text-legal-black text-sm font-bold tracking-widest uppercase hover:bg-legal-gold-hover transition-all shadow-xl text-center"
              >
                Consulta Privada
              </Link>
              <Link
                href="/servicios"
                className="px-10 py-5 border border-white/10 text-white text-sm font-medium tracking-widest uppercase hover:border-legal-gold transition-all text-center"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="aspect-[4/5] bg-legal-dark-gray overflow-hidden relative shadow-2xl border border-white/5">
              <Image
                src="/hero.png"
                alt="Despacho Parsa Fathi"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-legal-gold opacity-40 hidden md:block"></div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="section-padding bg-legal-charcoal" id="filosofia">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12 mb-8">
              <span className="text-legal-gold font-bold uppercase tracking-[0.2em] text-xs">Principios</span>
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ética profesional y trabajo bien hecho.</h2>
              <div className="w-20 h-1 bg-legal-gold mb-8"></div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                En Parsa Fathi asesores y abogados, ofrecemos un asesoramiento legal personalizado, a la medida de nuestros clientes y atendiendo siempre a sus circunstancias.
              </p>
              <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h3 className="text-legal-gold font-bold mb-2">Honestidad</h3>
                  <p className="text-sm text-gray-500">Actuamos siempre con lealtad y total transparencia.</p>
                </div>
                <div>
                  <h3 className="text-legal-gold font-bold mb-2">Atención</h3>
                  <p className="text-sm text-gray-500">Atención personalizada y constante en cada proceso.</p>
                </div>
                <div>
                  <h3 className="text-legal-gold font-bold mb-2">Flexibilidad</h3>
                  <p className="text-sm text-gray-500">Nos adaptamos a las necesidades de cada cliente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Parsa Fathi Section */}
      <section className="section-padding bg-legal-black" id="equipo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] bg-legal-dark-gray overflow-hidden relative shadow-2xl border border-white/5">
                <Image
                  src="/parsa-hero.png"
                  alt="Parsa Fathi Mollamirzaei"
                  fill
                  className="object-cover transition-all duration-500 brightness-[0.8] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-legal-black via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-legal-gold font-bold uppercase tracking-[0.2em] text-xs block mb-4">El Fundador</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Parsa Fathi Mollamirzaei</h2>
              <div className="prose prose-invert max-w-none text-gray-400 space-y-4">
                <p>
                  Fundador del Despacho y abogado colegiado en el Ilustre Colegio de Abogados de Alicante.
                  Graduado en Derecho en Madrid, culminó su trayectoria académica con el Máster de Acceso a la Abogacía en la Universidad de Alicante.
                </p>
                <p>
                  Tras años de experiencia en prestigiosos despachos nacionales, fundó su propia firma con la vocación de ofrecer un servicio basado en el respeto máximo a los derechos del cliente y la diligencia máxima.
                </p>
                <p className="text-white italic">
                  "Ejerzo la abogacía con vocación, entrega y respeto, con la finalidad de obtener los resultados más favorables para mis clientes."
                </p>
                <p className="text-sm flex items-center text-legal-gold">
                  <span className="mr-2">🌍</span> Especialista en Derecho Internacional y fluidez en Persa (Iraní).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="section-padding bg-legal-charcoal" id="expertise">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Áreas de Especialización</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Servicios legales especializados diseñados para proteger los intereses de nuestros clientes en diversas ramas del derecho.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Derecho Civil", desc: "Bancario, sucesiones, arrendamientos y reclamaciones." },
              { title: "Derecho de Familia", desc: "Divorcios, custodias y medidas paterno-filiales." },
              { title: "Derecho Laboral", desc: "Despidos, reclamaciones de salarios y sanciones." },
              { title: "Administrativo", desc: "Multas, sanciones y procesos contenciosos." },
            ].map((area, i) => (
              <div key={i} className="p-10 border border-white/5 bg-legal-black hover:border-legal-gold transition-all group">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-legal-gold transition-colors">{area.title}</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">{area.desc}</p>
                <Link href="/servicios" className="text-[10px] uppercase font-bold tracking-widest text-legal-gold">Ver más →</Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/servicios" className="text-sm font-bold uppercase tracking-widest text-white border-b border-legal-gold pb-1 hover:text-legal-gold transition-colors">
              Explorar todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-legal-navy py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-legal-gold opacity-[0.02] rounded-full -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 italic">¿Necesita asesoramiento legal?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
            Póngase en contacto hoy mismo para programar una consulta confidencial sobre sus requisitos legales.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contacto"
              className="px-12 py-6 bg-legal-gold text-legal-black font-bold uppercase tracking-widest hover:bg-legal-gold-hover transition-all shadow-2xl"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
