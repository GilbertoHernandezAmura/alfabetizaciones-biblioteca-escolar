const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Imagen de Fondo con Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Biblioteca Moderna e IA"
          className="w-full h-full object-cover opacity-50 bg-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-gray-900/60 to-gray-900"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.3em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/30 rounded-full">
          Innovación & Educación
        </span>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
          EL FUTURO DE LA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
            ALFABETIZACIÓN
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Explorando la integración de la Inteligencia Artificial, la
          multialfabetización y la accesibilidad en las Bibliotecas Escolares
          del siglo XXI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#propuesta"
            className="px-8 py-4 bg-white text-blue-900 font-black rounded-xl hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1"
          >
            VER PROPUESTA
          </a>
          <a
            href="#recursos"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-black rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            EXPLORAR RECURSOS
          </a>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
