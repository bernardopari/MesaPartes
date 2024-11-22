'use client';

import { Bell, FileText, Home, HelpCircle, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";

//////////////////////////////////////////////////////////////////////////
/// Componente de navegación principal
/// Este componente crea una barra de navegación superior con varios enlaces:
/// - Muestra un título.
/// - Cambia dinámicamente la apariencia de los enlaces según la ruta activa.
/// - Los iconos utilizados son de la librería "lucide-react".
//////////////////////////////////////////////////////////////////////////

export default function Component() {
  const pathName = usePathname(); // Obtiene la ruta actual de la aplicación.

  //////////////////////////////////////////////////////////////////////////
  ////// Renderizado del componente
  //////////////////////////////////////////////////////////////////////////
  return (
    <div className="bg-[#1a1b2e]">
      <nav className="flex justify-between items-center h-16 w-[90%] text-white border-t border-gray-800 mx-auto">
        {/* Título del sistema */}
        <div className="font-bold text-xl">
          MESA DE PARTES - EPIS
        </div>

        {/* Enlace a la página principal */}
        <Link
          href="/MisTramites"
          className={clsx(
            'flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors',
            { 'text-gray-700 p-2': '/MisTramites' === pathName } // Estilo dinámico para la ruta activa.
          )}
        >
          <Home className="h-6 w-6" />
        </Link>

        {/* Enlace a la bandeja de entrada */}
        <Link
          href="/MisTramites/BandejaEntrada"
          className={clsx(
            'flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors',
            { 'text-gray-700 p-2': '/MisTramites/BandejaEntrada' === pathName } // Estilo dinámico para la ruta activa.
          )}
        >
          <Bell className="h-6 w-6 visited:text-gray-700" />
        </Link>

        {/* Enlace a documentos (por definir) */}
        <Link
          href="#"
          className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors"
        >
          <FileText className="h-6 w-6" />
        </Link>

        {/* Enlace a ayuda (por definir) */}
        <Link
          href="#"
          className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors"
        >
          <HelpCircle className="h-6 w-6" />
        </Link>

        {/* Enlace a perfil de usuario (por definir) */}
        <Link
          href="#"
          className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors"
        >
          <User className="h-6 w-6" />
        </Link>
      </nav>
    </div>
  );
}
