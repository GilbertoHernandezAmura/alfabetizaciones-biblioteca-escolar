import { useState } from 'react';

const Recursos = () => {
  const [activeTab, setActiveTab] = useState('ia');

  const categorias = {
    ia: {
      titulo: 'Recursos con IA',
      items: [
        {
          nombre: 'ChatGPT (OpenAI)',
          desc: 'Asistente para consultas, generación de contenido y materiales educativos. Incluye modelo GPT-4.1 nano gratuito.',
          link: 'https://chatgpt.es/',
        },
        {
          nombre: 'Gemini',
          desc: 'Chat IA de Google diseñado para ofrecer respuestas claras y precisas. Gratuito y sin necesidad de cuenta.',
          link: 'https://gemini.google.com/app',
        },
        {
          nombre: 'ChatPDF',
          desc: 'Herramienta para interactuar con documentos PDF, facilitando su comprensión y redacción.',
          link: 'https://www.chatpdf.com/es',
        },
        {
          nombre: 'Copyscape',
          desc: 'Software online para detectar contenido duplicado y prevenir el plagio en Internet.',
          link: 'https://www.copyscape.com/',
        },
        {
          nombre: 'Consensus',
          desc: 'Motor de búsqueda con IA que ayuda a encontrar y entender ciencia de forma rápida.',
          link: 'https://consensus.app/',
        },
        {
          nombre: 'Duolingo',
          desc: 'Plataforma de aprendizaje de idiomas que adapta su ritmo al nivel del usuario mediante IA.',
          link: 'https://www.duolingo.com/',
        },
        {
          nombre: 'WordAi',
          desc: 'Utiliza aprendizaje automático para reescritura de alta calidad indistinguible del contenido humano.',
          link: 'https://wordai.com/',
        },
        {
          nombre: 'Scite',
          desc: 'Herramienta que analiza cualitativa y cuantitativamente cómo se citan las publicaciones científicas.',
          link: 'https://scite.ai/',
        },
        {
          nombre: 'Wolfram Alpha',
          desc: 'Buscador de respuestas detalladas y cálculos inmediatos basados en conceptos específicos.',
          link: 'https://www.wolframalpha.com/',
        },
        {
          nombre: 'Nearpod',
          desc: 'Permite crear contenido atractivo con elementos 3D y visitas 360° de forma guiada.',
          link: 'https://nearpod.com/',
        },
      ],
    },
    bibliotecarios: {
      titulo: 'Para Bibliotecarios (ISFD)',
      items: [
        {
          nombre: 'LibGuides',
          desc: 'Plataforma para crear guías de recursos adaptadas a la comunidad educativa argentina.',
          link: 'https://www.springshare.com/academic-libraries',
        },
        {
          nombre: 'Google Académico',
          desc: 'Motor de búsqueda especializado en literatura académica y científica en español.',
          link: 'https://scholar.google.es/',
        },
        {
          nombre: 'OverDrive',
          desc: 'Acceso a préstamos digitales de libros electrónicos y audiolibros en español.',
          link: 'https://www.overdrive.com/explore',
        },
        {
          nombre: 'Zotero',
          desc: 'Gestor de referencias bibliográficas gratuito y de código abierto. Imprescindible para nivel terciario.',
          link: 'https://www.zotero.org/',
        },
        {
          nombre: 'Trello',
          desc: 'Herramienta de gestión de proyectos para organizar tareas, eventos y actividades de la biblioteca.',
          link: 'https://trello.com/planner',
        },
        {
          nombre: 'Canva',
          desc: 'Diseño visual intuitivo para promocionar actividades y recursos bibliotecarios.',
          link: 'https://www.canva.com/',
        },
        {
          nombre: 'Kahoot!',
          desc: 'Plataforma de cuestionarios interactivos ideal para gamificación educativa.',
          link: 'https://kahoot.com/',
        },
        {
          nombre: 'LanguageTool',
          desc: 'Corrector ortográfico y gramatical multilingüe que ayuda a parafrasear textos.',
          link: 'https://languagetool.org/es',
        },
        {
          nombre: 'Padlet',
          desc: 'Muro colaborativo digital para compartir recursos e ideas entre alumnos y docentes.',
          link: 'https://padlet.com/',
        },
        {
          nombre: 'Khan Academy',
          desc: 'Organización sin fines de lucro con educación gratuita de primer nivel para todos.',
          link: 'https://es.khanacademy.org',
        },
      ],
    },
    imprescindibles: {
      titulo: 'Imprescindibles',
      items: [
        {
          nombre: 'BNM',
          desc: 'Biblioteca Nacional de Maestros: Preservación de la memoria educativa y propuestas pedagógicas.',
          link: 'http://www.bnm.me.gov.ar/',
        },
        {
          nombre: 'Humadoc Repositorio',
          desc: 'Producción intelectual de la Facultad de Humanidades de la UNMDP.',
          link: 'http://humadoc.mdp.edu.ar/site/',
        },
        {
          nombre: 'e-LIS',
          desc: 'Repositorio abierto de literatura científica en bibliotecología y ciencias de la información.',
          link: 'http://eprints.rclis.org',
        },
        {
          nombre: 'Universo Abierto',
          desc: 'Blog de referencia profesional para el mundo de las bibliotecas y la documentación.',
          link: 'https://universoabierto.org/',
        },
        {
          nombre: 'Bibliopos',
          desc: 'Recurso online con noticias, artículos y bibliografía para profesionales de la información.',
          link: 'https://www.bibliopos.es/',
        },
        {
          nombre: 'Biblioteca Digital Mundial',
          desc: 'Acceso gratuito a materiales culturales y fuentes primarias de todo el mundo.',
          link: 'https://www.wdl.org',
        },
        {
          nombre: 'Europeana',
          desc: 'Biblioteca digital europea con millones de recursos culturales y académicos.',
          link: 'https://www.europeana.eu',
        },
        {
          nombre: 'DSpace',
          desc: 'Plataforma estándar para gestionar repositorios digitales universitarios.',
          link: 'https://dspace.lyrasis.org',
        },
        {
          nombre: 'RedIAB',
          desc: 'Red Interuniversitaria Argentina de Bibliotecas dentro del Consejo Interuniversitario Nacional.',
          link: 'https://rediab.cin.edu.ar/',
        },
        {
          nombre: 'DOI (CrossRef)',
          desc: 'Servicios para asignación de identificadores digitales a publicaciones institucionales.',
          link: 'https://www.doi.org/',
        },
      ],
    },
  };

  return (
    <section id="recursos" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-blue-900 mb-4 uppercase">
            Recursos
          </h2>
          <div className="h-1.5 w-32 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600">
            Guía de 30 recursos electrónicos educativos en Bibliotecas Escolares
          </p>
        </div>

        {/* Tabs de Navegación */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(categorias).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeTab === key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {categorias[key].titulo}
            </button>
          ))}
        </div>

        {/* Grid de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias[activeTab].items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h4 className="text-xl font-bold text-blue-800 mb-2">
                  {item.nombre}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2 bg-blue-50 text-blue-700 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Visitar sitio
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Fuente:{' '}
            <a
              href="https://padlet.com/nazarenoarrietana/gu-a-de-30-recursos-electr-nicos-educativos-r09ejlv493u8vk0u"
              className="underline"
            >
              Padlet de Nazareno Arrieta
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recursos;
