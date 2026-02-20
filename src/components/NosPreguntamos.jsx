const NosPreguntamos = () => {
  return (
    <section className="py-20 px-6 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icono decorativo */}
        <div className="mb-6 inline-block p-4 bg-blue-800 rounded-full shadow-inner">
          <svg
            className="w-12 h-12 text-blue-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">
          Nos preguntamos
        </h2>

        <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
          Con este estudio/encuesta lo que se pretende es conocer los gustos y
          preferencias de los usuarios de la biblioteca y además conocer las
          sugerencias. ¡Tu opinión es fundamental para nosotros!
        </p>

        {/* Botón de Acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://docs.google.com/forms/d/1yqXgmz16CZJ1sjCkNNUwpPkBto9sAOO-3jpTK3BFwiE"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-blue-900 font-black rounded-full text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 uppercase tracking-wider"
          >
            Completar Encuesta
          </a>
        </div>

        <p className="mt-8 text-sm text-blue-300 italic">
          * La encuesta es anónima y toma menos de 3 minutos.
        </p>
      </div>
    </section>
  );
};

export default NosPreguntamos;
