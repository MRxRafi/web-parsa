export default function PoliticaCookiesPage() {
  return (
    <div className="bg-legal-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white italic">Política de cookies</h1>
        
        <div className="prose prose-invert prose-gold max-w-none text-gray-400 space-y-8">
          <section>
            <p>
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-legal-gold mb-4">¿Qué son las cookies?</h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-legal-gold mb-4">Gestión de cookies</h2>
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
