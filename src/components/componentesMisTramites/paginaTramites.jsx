import { ArrowLeft, ArrowRight, Download, Eye, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

// Componente principal para la visualización y acción de trámites.
export default function PaginaTramites() {
  return (
    <div className="flex-1 flex flex-col items-center space-y-10 w-[90%] mx-auto overflow-auto">
      
      {/** //////////////////////////////////////////////////////////////////////////
      /// Sección de navegación con botones de "Anterior" y "Siguiente".
      /// - Permite al usuario navegar entre las páginas de trámites.
      //////////////////////////////////////////////////////////////////////////*/}
      <div className="flex gap-2 self-start mt-8">
        {/* Botón para navegar a la página anterior */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span> {/* Descripción accesible para lectores de pantalla */}
        </Button>

        {/* Botón para navegar a la siguiente página */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Siguiente</span> {/* Descripción accesible para lectores de pantalla */}
        </Button>
      </div>

      <div className="border-t pt-4">
        
       {/* //////////////////////////////////////////////////////////////////////////
        /// Sección de vista previa del documento.
        /// - Muestra una imagen del documento relacionado con el trámite.
        //////////////////////////////////////////////////////////////////////////*/}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-medium mb-4">Trámite:</h2>
            <div className="border rounded-lg p-2 bg-gray-50">
              <Image
                src="/placeholder.svg" // Ruta de la imagen de vista previa
                alt="Vista previa del documento" // Texto alternativo accesible
                width={400}
                height={500}
                className="w-full object-contain"
              />
            </div>
          </div>

          {/*//////////////////////////////////////////////////////////////////////////
          /// Sección de descripción del trámite.
          /// - Proporciona información sobre el estado y detalles del trámite.
          //////////////////////////////////////////////////////////////////////////*/}
          <div>
            <h2 className="font-medium mb-4">Descripción:</h2>
            <div className="border rounded-lg p-4 bg-white min-h-[200px]">
              Su trámite ha sido finalizado con éxito, puede dirigirse a secretaría de su escuela de manera presencial para el recojo de su documento
            </div>
          </div>
        </div>

        {/*//////////////////////////////////////////////////////////////////////////
        /// Sección para responder el mensaje relacionado con el trámite.
        /// - Permite al usuario redactar una respuesta.
        //////////////////////////////////////////////////////////////////////////*/}
        <div className="mt-6">
          <h2 className="font-medium mb-4">Responder mensaje:</h2>
          <Textarea
            placeholder="Redacte su mensaje..." // Texto de ayuda para el usuario
            className="min-h-[100px]"
          />
        </div>

        {/*//////////////////////////////////////////////////////////////////////////
        /// Sección de acciones: botones para descargar, editar, eliminar y ver.
        /// - Permite realizar diversas acciones sobre el trámite.
        //////////////////////////////////////////////////////////////////////////*/}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {/* Botón para descargar el documento */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <Download className="h-4 w-4" />
              <span className="sr-only">Descargar</span> {/* Descripción accesible para lectores de pantalla */}
            </Button>

            {/* Botón para editar el trámite */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Editar</span> {/* Descripción accesible para lectores de pantalla */}
            </Button>

            {/* Botón para eliminar el trámite */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Eliminar</span> {/* Descripción accesible para lectores de pantalla */}
            </Button>

            {/* Botón para ver detalles del trámite */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <Eye className="h-4 w-4" />
              <span className="sr-only">Ver</span> {/* Descripción accesible para lectores de pantalla */}
            </Button>
          </div>
          
          {/* Botón para enviar la respuesta */}
          <Button className="bg-[#1a1b2e] text-white hover:bg-[#2a2b3e]">
            Enviar
          </Button>
        </div>
      </div>
    </div>
  )
}
