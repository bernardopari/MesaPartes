'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Log from "@/components/componentsPageMain/login"; // Componente de login
import Register from '@/components/componentsPageMain/register'; // Componente de registro
import React from 'react';
import { UserRound } from 'lucide-react'; // Ícono de usuario de Lucide
import Carrusel from '@/components/componentsPageMain/carrusell'; // Componente del carrusel
import Link from 'next/link';
//////////////////////////////////////////////////////////////////////////
// Datos de imágenes para el componente Carrusel
//////////////////////////////////////////////////////////////////////////
const datos = [
  {
    src: "/images/Fondo.png",
    alt: "First slide",
    heading: "GENSEG",
    description: "Dpsec",
  },
  {
    src: "/images/ImagenEscuela.png",
    alt: "Second slide",
    heading: "Gestion Ambiental",
    description: "Evidencia de la actividad de la que nosotros nos encontramos con todos",
  },
  {
    src: "images/LogoEscuela.png",
    alt: "Third slide",
    heading: "Seguimiento al egresado",
  }
];
//////////////////////////////////////////////////////////////////////////
// Componente Footer que se muestra en la parte inferior de la página.
//////////////////////////////////////////////////////////////////////////
export const Footer = () => {
  return (
    <footer className="bg-[#14132F] text-white text-center p-4 absolute bottom-0 left-0 w-full">
      @ 2024 Mesa de Partes - Escuela de Ingeniería de Sistemas. Todos los derechos reservados.
    </footer>
  );
};

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado que controla si se muestra el login o el registro.
  const [activo, setActivo] = useState(true); // Estado que alterna entre el contenido principal y el login/registro.
  const router = useRouter();

  //////////////////////////////////////////////////////////////////////////
  /// Función para cambiar el estado de 'activo', alternando entre contenido.
  //////////////////////////////////////////////////////////////////////////
  function cambiar() {
    setActivo(!activo); // Alterna entre true y false para mostrar login o contenido principal
  }

  return (
    <div className="bg-white w-full flex flex-col h-screen text-gray-800 ">
      {/* Navbar - Barra de navegación */}
      <nav className="bg-[#14132F] text-white">
        <div className=" w-[90%] p-4 flex justify-between items-center mx-auto">
          
          {/*//////////////////////////////////////////////////////////////////////////
          /// Logo e Información de la Escuela de Ingeniería de Sistemas
          /////////////////////////////////////////////////////////////////////////*/}
          <div className="flex items-center space-x-3">
            <img src="/images/LogoEscuela.png" alt="Logo" className="w-10 h-10" />
            <div className="text-xl font-bold">Ingeniería de Sistemas</div>
          </div>

         { /*//////////////////////////////////////////////////////////////////////////
          /// Enlaces de navegación
          /////////////////////////////////////////////////////////////////////////*/}
          <div className="flex-grow"></div> {/* Empuja los enlaces hacia la derecha */}
          <div className="flex items-center space-x-10">
            <Link href='/' className="hover:underline">Inicio</Link>
            <Link href='/Tramites' className="hover:underline">Trámites</Link>
            <Link href='/' className="hover:underline">Ayuda</Link>
          </div>

        {/*  //////////////////////////////////////////////////////////////////////////
          /// Ícono de usuario con Lucide React
          //////////////////////////////////////////////////////////////////////////*/}
          <div>
            <Link href="/" className="hover:underline flex items-center ml-8" onClick={cambiar}>
              <UserRound className="w-8 h-8 text-white" />
            </Link>
          </div>

        </div>
      </nav>

     { /*//////////////////////////////////////////////////////////////////////////
      /// Contenido principal o login
      /// Si 'activo' es true, muestra el contenido principal y el carrusel.
      /// Si 'activo' es false, alterna entre la vista de login o registro.
      /////////////////////////////////////////////////////////////////////////*/}
      {activo ? (
        <section className="flex-1 flex mx-auto w-[90%] justify-center items-center gap-4">
          <div className="w-[60%] mb-8 pr-60">
            <h1 className="text-6xl text-[#14132F] font-rubik">BIENVENIDO</h1>
            <p className="mt-6 text-lg text-gray-600">
              Te damos la bienvenida al sistema de gestión de trámites de la Escuela de Ingeniería de Sistemas. A través de esta
              plataforma, podrás presentar y seguir tus trámites de manera digital, agilizando el proceso de gestión de documentos.
              <br /><br />
              Gracias por utilizar nuestro sistema. ¡Estamos aquí para ayudarte!
            </p>
          </div>

          {/*/////////////////////////////////////////////////////////////////////////
          /// Carrusel con imágenes y descripción
          /////////////////////////////////////////////////////////////////////////*/}
          <div className="flex-1 h-full flex flex-col justify-center items-end gap-4">
            <Carrusel data={datos} />

            {/*/////////////////////////////////////////////////////////////////////////
            /// Botón para iniciar el trámite o cambiar al login/registro
            /////////////////////////////////////////////////////////////////////////*/}
            <button
              className="mt-8 bg-[#14132F] text-white py-2 mr-[18%] px-6 rounded-md text-lg hover:bg-[#312f5a]"
              onClick={cambiar}
            >
              Iniciar mi trámite
            </button>
          </div>
        </section>
      ) : isLogin ? (
        //////////////////////////////////////////////////////////////////////////
        /// Componente de Login
        //////////////////////////////////////////////////////////////////////////
        <Log isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        //////////////////////////////////////////////////////////////////////////
        /// Componente de Registro
        //////////////////////////////////////////////////////////////////////////
        <Register isLogin={isLogin} setIsLogin={setIsLogin} />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
