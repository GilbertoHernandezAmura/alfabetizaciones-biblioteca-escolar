import AprendizajeSignificativo from './components/AprendizajeSignificativo';
import ArticulosAcademicos from './components/ArticulosAcademicos';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InnovacionAccesibilidad from './components/InnovacionAccesibilidad';
import Navbar from './components/Navbar';
import NosPreguntamos from './components/NosPreguntamos';
import Poster from './components/Poster';
import PropuestaAlfabetizacion from './components/PropuestaAlfabetizacion';
import Recursos from './components/Recursos';
import SitiosRecomendados from './components/SitiosRecomendados';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PropuestaAlfabetizacion />
      <Recursos />
      <AprendizajeSignificativo />
      <SitiosRecomendados />
      <ArticulosAcademicos />
      <NosPreguntamos />
      <Poster />
      <InnovacionAccesibilidad />
      <Footer />
    </>
  );
}
