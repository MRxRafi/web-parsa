import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-legal-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tighter text-white uppercase">
                Parsa <span className="text-legal-gold">Fathi</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Excelencia personalizada e integridad profesional en el ejercicio de la abogacía. 
              Sirviendo con dedicación desde nuestro despacho en Alicante.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-legal-gold">Contacto</h4>
            <address className="not-italic text-sm text-gray-400 space-y-4">
              <p>Calle Moratin, bajo, nº 23<br />03008, Alicante</p>
              <p>T: <a href="tel:+34629390858" className="hover:text-legal-gold transition-colors">629 390 858</a></p>
              <p>E: <a href="mailto:abogados@parsafathi.com" className="hover:text-legal-gold transition-colors">abogados@parsafathi.com</a></p>
            </address>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-legal-gold">Información</h4>
            <ul className="text-sm text-gray-400 space-y-4">
              <li><Link href="/" className="hover:text-legal-gold transition-colors">Conócenos</Link></li>
              <li><Link href="/servicios" className="hover:text-legal-gold transition-colors">Servicios</Link></li>
              <li><Link href="/contacto" className="hover:text-legal-gold transition-colors">Contacto</Link></li>
              <li><a href="https://abogados-parsafathi.blogspot.com/" target="_blank" className="hover:text-legal-gold transition-colors">Blog Jurídico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-legal-gold">Legal</h4>
            <ul className="text-sm text-gray-400 space-y-4">
              <li><Link href="/aviso-legal" className="hover:text-legal-gold transition-colors">Aviso Legal</Link></li>
              <li><Link href="/politica-de-privacidad" className="hover:text-legal-gold transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-legal-gold transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[10px] uppercase tracking-widest text-gray-600 text-center md:text-left">
            © {currentYear} Parsa Fathi Mollamirzaei. Todos los derechos reservados.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="text-[10px] uppercase tracking-widest text-gray-700">Abogado Colegiado ICALI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
