import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-legal-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-legal-gold font-bold uppercase tracking-[0.2em] text-xs block mb-4">Actualidad Jurídica</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 italic">Nuestro Blog</h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Manténgase informado sobre las últimas novedades legislativas y jurisprudenciales a través de nuestro blog jurídico oficial.
          </p>
        </div>

        <div className="bg-legal-charcoal p-16 border border-white/5 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Blog Jurídico de Parsa Fathi</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Publicamos regularmente artículos de interés, análisis de sentencias y consejos legales prácticos para ayudarle a entender mejor el marco jurídico actual.
          </p>
          <a 
            href="https://www.parsafathi.com/blog" 
            target="_blank"
            className="inline-block px-12 py-5 bg-legal-gold text-legal-black font-bold uppercase tracking-widest hover:bg-legal-gold-hover transition-all"
          >
            Visitar Blog Jurídico
          </a>
        </div>
      </div>
    </div>
  );
}
