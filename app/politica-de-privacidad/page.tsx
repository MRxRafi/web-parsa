export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-legal-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white italic">Política de privacidad</h1>
        
        <div className="prose prose-invert prose-gold max-w-none text-gray-400 space-y-8">
          <section>
            <p>
              PARSA FATHI MOLLAMIRZAEI en su compromiso con la Protección de los Datos Personales de sus clientes, y como máximo garante de la privacidad de los mismos, ha realizado una revisión de todos sus procesos de negocio adecuándolos a las nuevas exigencias de la normativa comunitaria, Reglamento General de Protección de Datos (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-legal-gold mb-4">Responsable de tratamiento</h2>
            <p>
              La Responsable del Tratamiento de los datos facilitados de forma voluntaria por el usuario es PARSA FATHI MOLLAMIRZAEI con domicilio profesional en C/ Moratin, bajo, nº23, Cp. 03008, Alicante.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-legal-gold mb-4">Finalidades del tratamiento</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>La tramitación y gestión de la solicitud de información y/o asesoramiento.</li>
              <li>La gestión y control de los servicios ofrecidos a través de la página Web.</li>
              <li>El envío de información comercial sobre servicios y productos de PARSA FATHI MOLLAMIRZAEI (previa aceptación).</li>
              <li>Gestionar la relación contractual o comercial establecida.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-legal-gold mb-4">Sus Derechos</h2>
            <p>
              Usted podrá ejercitarse los derechos de acceso, rectificación o supresión, limitación de su tratamiento, oposición y portabilidad mediante correo electrónico a <a href="mailto:abogados@parsafathi.com" className="text-legal-gold underline">abogados@parsafathi.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
