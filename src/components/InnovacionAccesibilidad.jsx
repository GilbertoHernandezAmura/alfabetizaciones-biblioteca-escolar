const InnovacionAccesibilidad = () => {
  return (
    <section id="innovacion" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* BLOQUE 1: INNOVACIÓN */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 uppercase">
              Innovación en la Biblioteca Escolar
            </h2>
            <div className="flex-1 h-1 bg-blue-100 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700 italic border-l-4 border-green-500 pl-6">
                "La innovación es un medio para conseguir un fin: mejorar el
                servicio para los usuarios."
                <span className="block text-sm font-bold mt-2">— Riaza</span>
              </p>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌱</span> Biblioteca Verde
                </h4>
                <p className="text-gray-700">
                  Gestión sostenible de recursos, reducción del uso de papel y
                  creación de colecciones enfocadas en la educación ambiental.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📱</span> Servicios Digitales
                </h4>
                <p className="text-gray-700">
                  Suscripción a bibliotecas digitales (eLibro, BIDI, etc.) y
                  servicios de mensajería para mantener informados a los
                  usuarios sobre novedades y actividades.
                </p>
              </div>
            </div>

            {/* Tipos de Innovación */}
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
              <h4 className="text-xl font-bold mb-6 text-blue-400">
                Modelos de Innovación
              </h4>
              <div className="space-y-8">
                <div>
                  <h5 className="font-black uppercase text-sm tracking-widest mb-1 text-gray-400">
                    Incremental
                  </h5>
                  <p>Pequeños cambios o mejoras en algo ya existente.</p>
                </div>
                <div className="border-t border-gray-800 pt-4">
                  <h5 className="font-black uppercase text-sm tracking-widest mb-1 text-gray-400">
                    Semirradical
                  </h5>
                  <p>
                    Cambio significativo en una tecnología o en el modelo de
                    biblioteca.
                  </p>
                </div>
                <div className="border-t border-gray-800 pt-4">
                  <h5 className="font-black uppercase text-sm tracking-widest mb-1 text-gray-400">
                    Radical
                  </h5>
                  <p>
                    Algo completamente nuevo, nunca antes visto, apoyado en
                    tecnología de vanguardia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE 2: ACCESIBILIDAD */}
        <div className="bg-blue-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-black mb-12 text-center">
            Accesibilidad desde la Biblioteca Escolar
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Física */}
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                ♿ Física y Espacial
              </h4>
              <ul className="text-sm space-y-3 opacity-90">
                <li>
                  • <strong>Diseño sin barreras:</strong> Rampas, puertas
                  fáciles y pasillos amplios.
                </li>
                <li>
                  • <strong>Mobiliario adaptable:</strong> Estanterías y mesas a
                  alturas accesibles.
                </li>
                <li>
                  • <strong>Señalética inclusiva:</strong> Pictogramas y colores
                  (TEA/Aprendizaje).
                </li>
                <li>
                  • <strong>Braille:</strong> Etiquetas en relieve para personas
                  con discapacidad visual.
                </li>
              </ul>
            </div>

            {/* Colecciones */}
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                📚 Colecciones Accesibles
              </h4>
              <ul className="text-sm space-y-3 opacity-90">
                <li>
                  • <strong>Formatos alternativos:</strong> Audiolibros, Lectura
                  Fácil y macrotipos (14-18 pts).
                </li>
                <li>
                  • <strong>Materiales táctiles:</strong> Para una experiencia
                  sensorial inclusiva.
                </li>
                <li>
                  • <strong>Plataformas digitales:</strong> Promoción de la
                  Biblioteca Digital Accesible.
                </li>
              </ul>
            </div>

            {/* Prácticas */}
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                🤝 Dinamización Pedagógica
              </h4>
              <ul className="text-sm space-y-3 opacity-90">
                <li>
                  • <strong>Citas a ciegas con libros:</strong> Fomentar la
                  curiosidad sin prejuicios estéticos.
                </li>
                <li>
                  • <strong>Juegos de rol:</strong> Circuitos de movilidad para
                  generar empatía.
                </li>
                <li>
                  • <strong>Clubes de Lectura Fácil:</strong> Participación
                  garantizada para todos los niveles.
                </li>
                <li>
                  • <strong>Asesoramiento:</strong> Guía a docentes para crear
                  materiales accesibles.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovacionAccesibilidad;
