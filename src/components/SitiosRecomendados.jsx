const SitiosRecomendados = () => {
  const sitios = [
    {
      nombre: 'Portal Educ.ar',
      url: 'https://www.educ.ar/',
      desc: 'El portal educar es muy didáctico e ideal para Bibliotecas Escolares.',
      tag: 'Educación',
    },
    {
      nombre: 'Catálogos BNM',
      url: 'http://www.bnm.me.gov.ar/catalogos/',
      desc: 'Todos los docentes consultan este sitio con muchos materiales para Bibliotecas Escolares.',
      tag: 'Catálogo',
    },
    {
      nombre: 'Khan Academy',
      url: 'https://es.khanacademy.org/',
      desc: 'Proporciona educación gratuita de nivel mundial a cualquier persona, permitiendo un aprendizaje personalizado.',
      tag: 'Aprendizaje',
    },
    {
      nombre: 'Aprende.org',
      url: 'https://aprende.org/',
      desc: 'Plataforma gratuita con contenidos educativos, capacitación laboral y salud para todas las edades.',
      tag: 'Capacitación',
    },
    {
      nombre: 'UNESCO',
      url: 'https://www.unesco.org/es',
      desc: 'Organismo que promueve la educación y la formación técnica a nivel global.',
      tag: 'Institucional',
    },
    {
      nombre: 'Fundación Leer',
      url: 'https://www.leer.org/',
      desc: 'ONG argentina dedicada a fomentar la lectura y distribuir libros para mejorar habilidades lectoras.',
      tag: 'Lectura',
    },
    {
      nombre: 'iLovePDF',
      url: 'https://www.ilovepdf.com/es',
      desc: 'Ideal para trabajar con material digital: unir PDF, cambiar formatos y gestionar documentos.',
      tag: 'Utilidad',
    },
    {
      nombre: 'Didactalia',
      url: 'https://didactalia.net/comunidad/materialeducativo',
      desc: 'Plataforma online con una vasta cantidad de recursos didácticos para la comunidad educativa.',
      tag: 'Recursos',
    },
  ];

  return (
    <section id="recomendados" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl text-center font-extrabold text-blue-900 mb-4 uppercase">
            Sitios Recomendados
          </h2>
          <div className="h-1.5 w-32 bg-indigo-500 mx-auto rounded-full mb-6"></div>

          <p className="text-lg text-gray-600 border-l-4 border-blue-500 pl-4">
            Selección de plataformas externas esenciales para el apoyo docente y
            bibliotecario.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sitios.map((sitio, index) => (
            <a
              key={index}
              href={sitio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-500"
            >
              {/* Previsualización del Sitio */}
              <div className="md:w-64 h-48 md:h-auto overflow-hidden bg-gray-200 relative">
                <img
                  // Usamos el servicio gratuito de mshots de WordPress para generar la captura
                  src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(sitio.url)}?w=400`}
                  alt={`Previsualización de ${sitio.nombre}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-3">
                  <span className="text-xs font-black text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                    {sitio.tag}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {sitio.nombre}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {sitio.desc}
                </p>
                <div className="flex items-center text-sm font-bold text-blue-900 group-hover:gap-3 transition-all">
                  Explorar sitio <span className="ml-2">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitiosRecomendados;
