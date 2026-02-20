import { useState } from 'react';

const Poster = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título de la sección */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-blue-900 mb-4 uppercase tracking-tight">
            Poster Informativo
          </h2>
          <div className="h-1.5 w-32 bg-indigo-500 mx-auto rounded-full mb-6"></div>

          {/* <p className="text-gray-600 font-medium italic">
            Visualización gráfica de los conceptos clave del proyecto.
          </p> */}
        </div>

        {/* Contenedor del Poster */}
        <div
          className="relative group cursor-zoom-in inline-block"
          onClick={() => setIsZoomed(true)}
        >
          {/* Efecto de sombra y marco */}
          <div className="relative bg-white p-3 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-200 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src="poster.png"
              alt="Poster del proyecto de alfabetización"
              className="w-full h-auto max-h-[700px] rounded shadow-inner object-contain"
            />

            {/* Badge de interacción */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-900/20 rounded">
              <div className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
                Ampliar Poster
              </div>
            </div>
          </div>
        </div>

        {/* Modal / Zoom View */}
        {isZoomed && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
            onClick={() => setIsZoomed(false)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors z-[110]"
              onClick={() => setIsZoomed(false)}
            >
              <svg
                className="w-12 h-12"
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
              src="poster.png"
              alt="Poster en alta resolución"
              className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Poster;
