const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <div className="font-black text-xl tracking-tighter text-white mb-2 uppercase">
            ALF<span className="text-blue-500">IN</span>
          </div>
          <p className="text-sm max-w-md mx-auto">
            Hacia una integración ética y efectiva de la tecnología y la
            información en el ámbito escolar.
          </p>
        </div>

        <div className="h-px w-16 bg-blue-600 mx-auto my-6 opacity-50"></div>

        {/* <div className="space-y-2">
          <p className="text-sm font-medium tracking-wide">
            Trabajo final de{' '}
            <span className="text-white font-bold">Nazareno Arrieta</span>
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Materia: <span className="text-blue-400">Ejemplo de Materia</span> —
            Carrera: <span className="text-blue-400">Ejemplo de Carrera</span>
          </p>
        </div> */}

        <div className="mt-8 pt-8 border-t border-gray-800/50 text-[10px] uppercase tracking-widest opacity-30">
          © {new Date().getFullYear()} — Villa de Merlo, San Luis.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
