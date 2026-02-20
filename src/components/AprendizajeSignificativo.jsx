import { useState } from 'react';

const AprendizajeSignificativo = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="aprendizaje" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Encabezado */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-blue-900 mb-4 uppercase tracking-tighter">
            Aprendizaje Significativo
          </h2>
          <div className="h-1.5 w-32 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Esquema conceptual sobre la estructura, actores y servicios que
            definen la labor de la Biblioteca Escolar.
          </p>
        </div>

        {/* Contenedor de la Imagen con trigger de Zoom */}
        <div
          className="relative group cursor-zoom-in max-w-4xl mx-auto"
          onClick={() => setIsZoomed(true)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-700"></div>

          <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
            <img
              src="mapa-biblioteca.jpg"
              alt="Esquema Conceptual Biblioteca Escolar"
              className="w-full h-auto rounded-xl shadow-inner"
            />
            {/* Overlay sutil al pasar el mouse */}
            <div className="absolute inset-0 bg-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
              <span className="bg-white/90 px-4 py-2 rounded-full text-blue-900 font-bold shadow-lg">
                Click para ampliar
              </span>
            </div>
          </div>
        </div>

        {/* Modal / Zoom View */}
        {isZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 animate-in fade-in duration-300"
            onClick={() => setIsZoomed(false)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors cursor-pointer"
              onClick={() => setIsZoomed(false)}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src="mapa-biblioteca.jpg"
              alt="Zoom Esquema"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AprendizajeSignificativo;
