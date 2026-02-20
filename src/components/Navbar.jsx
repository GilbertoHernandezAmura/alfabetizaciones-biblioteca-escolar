import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Propuesta', href: '#propuesta' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Aprendizaje', href: '#aprendizaje' },
    { name: 'Recomendados', href: '#recomendados' },
    { name: 'Artículos', href: '#articulos' },
    { name: 'Innovación', href: '#innovacion' },
  ];

  return (
    <nav
      className={`fixed w-full z-[150] transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero">
          <div
            className={`font-black text-2xl tracking-tighter transition-colors ${
              scrolled ? 'text-blue-900' : 'text-white'
            }`}
          >
            ALFA<span className="text-blue-500">BE</span>
          </div>
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest hover:text-blue-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#encuesta"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:scale-105"
        >
          Encuesta
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
