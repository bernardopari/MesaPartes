import React from 'react';
import { UserRound } from 'lucide-react';

const HomePage = () => {
  
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-[#14132F] text-white p-4 flex justify-between items-center">
        {/* Logo e Ingeniería de Sistemas */}
        <div className="flex items-center space-x-3">
          <img src="https://pbs.twimg.com/profile_images/2137261758/episunap_400x400.png" alt="Logo" className="w-10 h-10" />
          <div className="text-xl font-bold">Ingeniería de Sistemas</div>
        </div>

        {/* Enlaces de navegación */}
        <div className="flex-grow"></div> {/* Esto empuja los enlaces hacia la derecha */}
        <div className="flex items-center space-x-10">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Trámites</a>
          <a href="#" className="hover:underline">Ayuda</a>
        </div>

        {/* Ícono de usuario con Lucide React */}
        <div>
          <a href="/login" className="hover:underline flex items-center ml-8">
            <UserRound className="w-8 h-8 text-white" /> 
          </a>
        </div>
      </nav>

      {/* Main Section */}
      <section className="flex justify-between items-center p-8">
        <div>
          <h1 className="text-6xl font-bold text-[#14132F]">BIENVENIDO</h1>
          <p className="mt-6 text-lg text-gray-600">
          Te damos la bienvenida al sistema de gestión de trámites de la Escuela de Ingeniería de Sistemas. A través de esta
          plataforma, podrás presentar y seguir tus trámites de manera digital, agilizando el proceso de gestión de documentos.
            <br/><br/>
            Gracias por utilizar nuestro sistema. ¡Estamos aquí para ayudarte!
          </p>
          <button className="mt-8 bg-[#14132F] text-white py-2 px-6 rounded-md text-lg hover:bg-purple-700">
            Iniciar mi trámite
          </button>
        </div>

        {/* Carousel */}
        <div className="w-1/2">
          <div className="carousel relative">
            <div className="carousel-images">
              <img src="https://sistemas.unap.edu.pe/sites/sistemas.dev.unap.edu.pe/files/2024-05/20240217_143014.jpg" className="rounded-lg" alt="School Building" />
              <img src="https://sistemas.unap.edu.pe/sites/sistemas.dev.unap.edu.pe/files/2024-05/20240217_142948.jpg" className="rounded-lg" alt="School Building" />
              {/* Agrega más imágenes aquí si es necesario */}
            </div>
            <div className="carousel-controls absolute top-1/2 left-0 transform -translate-y-1/2">
              <button className="bg-[#14132F] text-white px-2 py-1 rounded-full">
                &#9664;
              </button>
              <button className="bg-[#14132F] text-white px-2 py-1 rounded-full ml-2">
                &#9654;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14132F] text-white text-center p-4">
        2024 Mesa de Partes - Escuela de Ingeniería de Sistemas. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default HomePage;

