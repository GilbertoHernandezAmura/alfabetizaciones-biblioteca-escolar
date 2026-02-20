const PropuestaAlfabetizacion = () => {
  return (
    <section id="propuesta" className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado de Sección */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-2 uppercase tracking-wide">
            Propuesta de Alfabetización
          </h2>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Alfabetización Informacional en Colegio Secundario
          </h3>
          <div className="h-1.5 w-32 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Bloque: Fundamentación */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-10">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-blue-200 pb-2 inline-block">
            Fundamentación
          </h4>
          <div className="space-y-4 text-lg leading-relaxed text-justify">
            <p>
              La alfabetización informacional (ALFIN) ha evolucionado con el
              avance de la tecnología y la incorporación de la inteligencia
              artificial (IA) en diversas áreas de la vida cotidiana. La IA, a
              través de algoritmos y modelos matemáticos, replica procesos
              cognitivos humanos permitiendo a las máquinas analizar datos,
              reconocer patrones, hacer predicciones, aprender y tomar
              decisiones autónomas. Esta capacidad de la IA se ve reflejada en
              herramientas como ChatGPT y otras plataformas similares, que
              ofrecen interacciones intuitivas y útiles con IA para diversos
              propósitos.
            </p>
            <p>
              En el ámbito educativo, la IA también juega un papel importante al
              ayudar a los docentes a crear contenido educativo, analizar el
              progreso de los estudiantes y adaptar las estrategias de
              enseñanza. La formación en IA en un colegio secundario no solo
              proporciona habilidades técnicas, sino que también desarrolla en
              los estudiantes una comprensión crítica de cómo estas tecnologías
              están transformando el mundo. La capacitación en IA los prepara
              para ser ciudadanos responsables en una sociedad digitalizada y
              contribuir al futuro laboral con confianza y creatividad. Es
              importante destacar que, al igual que en cualquier otra área de la
              educación, la formación en IA debe incluir marcos éticos y
              asegurar un acceso equitativo para todos los estudiantes.
              Asimismo, la formación de usuarios en el uso de herramientas con
              IA en bibliotecas o entornos educativos también es clave para
              maximizar su utilidad y efectividad.
            </p>
            <p>
              En conclusión, la integración de la inteligencia artificial en la
              alfabetización informacional en un colegio secundario no solo
              enriquece el proceso de aprendizaje de los estudiantes, sino que
              también los prepara para desenvolverse en un mundo cada vez más
              tecnológico y digitalizado. La formación en IA les brinda las
              habilidades necesarias para ser parte activa de la sociedad del
              futuro, fomentando el desarrollo personal y profesional de manera
              integral.
            </p>
          </div>
        </div>

        {/* Bloque: Ficha Técnica (Destinatarios, Responsables y Objetivos) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-blue-900 text-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold mb-3">Destinatarios</h4>
              <p className="text-lg">
                Estudiantes de tercer año, de un Colegio Secundario
              </p>
            </div>

            <div className="bg-blue-700 text-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold mb-3">Responsables</h4>
              <p className="text-lg">Bibliotecarios del colegio.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-3">Objetivos del Programa</h4>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Fomentar habilidades de investigación y análisis crítico de la
                información.
              </li>
              <li>
                Introducir conceptos básicos de IA y su aplicación en la
                búsqueda de información.
              </li>
              <li>
                Capacitar a los usuarios para utilizar herramientas digitales y
                recursos de IA en su proceso de aprendizaje.
              </li>
              <li>
                Promover el pensamiento ético y responsable respecto al uso de
                la información y la tecnología.
              </li>
            </ul>
          </div>
        </div>

        {/* Bloque: Cronograma de Clases */}
        <div className="space-y-8">
          <h4 className="text-2xl font-bold text-center text-gray-800 mb-6 underline decoration-blue-500 underline-offset-8">
            Planificación de Clases
          </h4>

          {/* Clase 1 */}
          <div className="bg-white border-t-4 border-blue-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-xl text-blue-700 mb-2">
              ● Primera clase: Introducción a la Alfabetización Informacional
              con IA
            </h5>
            <p className="mb-4 text-gray-600">
              <strong>Duración:</strong> 2 horas
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h6 className="font-bold text-blue-900 mb-2">Contenidos:</h6>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  <li>Definición de alfabetización informacional.</li>
                  <li>
                    Importancia de la alfabetización digital en nivel medio.
                  </li>
                  <li>Fuentes de información: tipos y características.</li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-blue-900 mb-2">
                  Actividades de inicio:
                </h6>
                <p className="text-sm text-gray-700">
                  Dinámica de grupo sobre experiencias previas con la búsqueda
                  de información.
                </p>
              </div>
              <div>
                <h6 className="font-bold text-blue-900 mb-2">
                  Actividades de cierre:
                </h6>
                <p className="text-sm text-gray-700">
                  Identificación de fuentes confiables y fiables en Internet.
                </p>
              </div>
            </div>
          </div>

          {/* Clase 2 */}
          <div className="bg-white border-t-4 border-indigo-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-xl text-indigo-700 mb-2">
              ● Segunda clase: Fundamentos de la Inteligencia Artificial
            </h5>
            <p className="mb-4 text-gray-600">
              <strong>Duración:</strong> 2 horas
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h6 className="font-bold text-indigo-900 mb-2">Contenidos:</h6>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  <li>¿Qué es la inteligencia artificial?</li>
                  <li>Breve historia y evolución de la IA.</li>
                  <li>
                    Aplicaciones de la IA en la vida cotidiana y educación.
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-indigo-900 mb-2">
                  Actividades inicio:
                </h6>
                <p className="text-sm text-gray-700">
                  Video introductorio sobre IA.
                </p>
              </div>
              <div>
                <h6 className="font-bold text-indigo-900 mb-2">
                  Actividades de cierre:
                </h6>
                <p className="text-sm text-gray-700">
                  Discusión grupal sobre ejemplos de IA en su entorno y
                  aplicación escolar.
                </p>
              </div>
            </div>
          </div>

          {/* Clase 3 */}
          <div className="bg-white border-t-4 border-purple-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-xl text-purple-700 mb-2">
              ● Tercera clase: Herramientas de Búsqueda Inteligente
            </h5>
            <p className="mb-4 text-gray-600">
              <strong>Duración:</strong> 2 horas
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h6 className="font-bold text-purple-900 mb-2">Contenidos:</h6>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  <li>Motores de búsqueda y algoritmos de IA.</li>
                  <li>
                    Uso de herramientas (Gemini, Copilot, Perplexity, etc).
                  </li>
                  <li>Optimización con palabras clave.</li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-purple-900 mb-2">
                  Actividades inicio:
                </h6>
                <p className="text-sm text-gray-700">
                  Ejercicio práctico de búsqueda y evaluación de relevancia.
                  Derechos de autor.
                </p>
              </div>
              <div>
                <h6 className="font-bold text-purple-900 mb-2">
                  Actividades de cierre:
                </h6>
                <p className="text-sm text-gray-700">
                  Búsqueda con IA para detección de fake news y análisis de
                  sesgos algorítmicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropuestaAlfabetizacion;
