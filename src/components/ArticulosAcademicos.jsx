const ArticulosAcademicos = () => {
  const bibliografia = [
    {
      autor: 'Frontera, C. (2021)',
      titulo:
        'La multialfabetización, una formación educativa integral necesaria para el siglo XXI',
      fuente: 'Infobae',
      link: 'https://www.infobae.com/educacion/2021/11/29/la-multialfabetizacion-una-formacion-educativa-integral-necesaria-para-el-siglo-xxi/',
    },
    {
      autor: 'Sulkunen, S. (2024)',
      titulo:
        'Multialfabetización: la nueva competencia básica para el aula del siglo XXI',
      fuente: 'Plataforma Europea de Educación Escolar',
      link: 'https://school-education.ec.europa.eu/en/discover/expert-views/multiliteracy-new-basic-skill-21st-century-classroom',
    },
    {
      autor: 'Wrodowicz, M. (2024)',
      titulo: 'La multialfabetización, sus tipos y características',
      fuente: 'Aithor',
      link: 'https://aithor.com/essay-examples/multi-literacy-its-types-and-characteristics',
    },
    {
      autor: 'Cataldo, S. (2024)',
      titulo: 'De la alfabetización a la multialfabetización',
      fuente: 'Learningteam',
      link: 'https://learningteam.net/de-la-alfabetizacion-a-la-multialfabetizacion/',
    },
    {
      autor: 'Alonso Varela, L. (2023)',
      titulo:
        'Alfabetización en información: una propuesta de abordaje desde la multialfabetización',
      fuente: 'Informatio',
      link: 'https://doi.org/10.35643/info.28.2.16',
    },
    {
      autor: 'Plataforma Guacurarí+',
      titulo: '¿Cuál es la importancia de la multialfabetización?',
      fuente: 'Blog Guacurarí',
      link: 'https://blog.plataformaguacurari.com/el-desafio-de-la-multialfabetizacion/',
    },
    {
      autor: 'Mónaco, J., & Herrera, D. (2022)',
      titulo: 'La educación en la época de las plataformas',
      fuente: 'La educación en debate (UNIPE)',
      link: 'https://editorial.unipe.edu.ar/la-educacion-en-debate/numeros-98-al-107-ano-2022/item/145-la-educacion-en-la-epoca-de-las-plataformas',
    },
    {
      autor: 'González, V. (2024)',
      titulo: '¿Qué son los cursos MOOC?',
      fuente: 'Infobae',
      link: 'https://www.infobae.com/educacion/2024/01/10/que-son-los-cursos-mooc-las-herramientas-en-linea-que-facilitan-el-aprendizaje-a-lo-largo-de-la-vida/',
    },
    {
      autor: 'Herranz, C. (2026)',
      titulo: '¿Es importante formar al alumnado en el uso de la IA?',
      fuente: 'Educación 3.0',
      link: 'https://www.educaciontrespuntocero.com/noticias/formar-en-ia/',
    },
    {
      autor: 'Desueza-Delgado, A. et al. (2023)',
      titulo:
        'Los entornos virtuales de aprendizaje (EVA) de educación secundaria',
      fuente: 'Revista Retos de la Ciencia',
      link: 'https://doi.org/10.53877/rc.7.15.2023070103',
    },
  ];

  return (
    <section id="articulos" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Parte 1: Listado de Artículos */}
        <div className="mb-20">
          <h2 className="text-3xl text-center font-black text-blue-900 mb-8 uppercase tracking-tight  ">
            Artículos Académicos / Periodísticos
          </h2>
          <div className="h-1.5 w-32 bg-indigo-500 mx-auto rounded-full mb-6"></div>

          <div className="grid gap-4">
            {bibliografia.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <p className="text-sm text-gray-500 font-mono">{item.autor}</p>
                <h4 className="text-lg font-bold text-gray-800 my-1">
                  {item.titulo}
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded uppercase tracking-wider">
                    {item.fuente}
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm font-bold flex items-center"
                  >
                    Leer artículo <span className="ml-1">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parte 2: Nota Periodística */}
        <div className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100">
          <article className="prose prose-blue max-w-none">
            <header className="mb-8">
              <span className="text-blue-600 font-black tracking-widest uppercase text-sm">
                Nota periodística
              </span>
              <h3 className="text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
                Más allá de leer y escribir: La Multialfabetización como un
                derecho en el siglo XXI
              </h3>
            </header>

            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-2/3 text-gray-700 text-lg leading-relaxed space-y-6 text-justify">
                <p>
                  En un mundo donde la información se presenta en múltiples
                  formatos y a través de diversas plataformas, la tradicional
                  concepción de alfabetización centrada en la lectura y la
                  escritura se ha quedado corta.
                </p>

                {/* Contenedor para la Imagen de Nube de Palabras */}
                <div className="my-8 bg-white p-4 rounded-xl shadow-inner border-2 border-dashed border-blue-200">
                  <img
                    src="/nube-palabras.png"
                    alt="Nube de palabras sobre multialfabetización"
                    className="w-full h-auto rounded-lg mx-auto"
                  />
                  <p className="text-center text-xs text-gray-400 mt-2 italic">
                    Representación visual de los conceptos clave de la
                    Multialfabetización
                  </p>
                </div>

                <p>
                  La <strong>multialfetización</strong> considerada un derecho
                  se refiere a la capacidad de acceder, interpretar, comunicar y
                  participar en los diversos entornos sociales y digitales. Este
                  concepto reconoce la importancia de las competencias en
                  múltiples lenguajes y medios para una plena participación en
                  la sociedad.
                </p>

                <h4 className="text-2xl font-bold text-blue-900">
                  ¿Por qué es fundamental la Multialfabetización?
                </h4>
                <p>
                  La vida cotidiana nos expone constantemente a mensajes
                  multimodales; desde un video en redes sociales hasta una
                  infografía en un periódico digital. Quienes dominan la
                  Multialfabetización son capaces de navegar, evaluar y crear
                  contenidos en los diversos formatos existentes.
                </p>

                <p>
                  La escuela es el espacio clave. Esto implica repensar las
                  prácticas pedagógicas e integrar el análisis de imágenes
                  publicitarias, narrativas visuales y presentaciones
                  multimedia. El desafío para los docentes es formarse e
                  incorporar estas competencias, contando con recursos adecuados
                  en las instituciones.
                </p>

                <h4 className="text-2xl font-bold text-blue-900 text-left">
                  La IA y el rol del bibliotecario
                </h4>
                <p>
                  La IA facilita la producción multimodal (subtítulos,
                  imágenes), pero exige nuevas habilidades para evaluar la{' '}
                  <strong>calidad y autenticidad</strong> de los contenidos.
                  Aquí, el bibliotecario escolar evoluciona: deja de ser solo el
                  guardián de los libros para ser un guía en el laberinto
                  digital y un colaborador en el diseño de experiencias de
                  aprendizaje.
                </p>
              </div>

              {/* Sidebar de puntos clave (opcional para romper la densidad) */}
              <div className="lg:w-1/3 bg-white p-6 rounded-2xl shadow-sm border border-blue-100 h-fit sticky top-10">
                <h5 className="font-bold text-blue-900 mb-4 border-b pb-2">
                  Conceptos Clave
                </h5>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">●</span>
                    <span>
                      Derecho humano fundamental a la educación digital.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">●</span>
                    <span>
                      Reducción de la brecha digital y acceso equitativo.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">●</span>
                    <span>Análisis crítico de sesgos en la IA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">●</span>
                    <span>El bibliotecario como facilitador multimodal.</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ArticulosAcademicos;
