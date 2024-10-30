import { ArrowLeft, ArrowRight, Download, Eye, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function PaginaTramites() {
  return (
    <div className="flex-1 flex flex-col items-center space-y-10 w-[90%] mx-auto overflow-auto">
      {/* Navigation */}
      <div className="flex gap-2 self-start mt-8">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      <div className="border-t pt-4">
        {/* Document Preview Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-medium mb-4">Trámite:</h2>
            <div className="border rounded-lg p-2 bg-gray-50">
              <Image
                src="/placeholder.svg"
                alt="Vista previa del documento"
                width={400}
                height={500}
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h2 className="font-medium mb-4">Descripción:</h2>
            <div className="border rounded-lg p-4 bg-white min-h-[200px]">
              Su trámite ha sido finalizado con éxito, puede dirigirse a secretaría de su escuela de manera presencial para el recojo de su documento
            </div>
          </div>
        </div>

        {/* Reply Section */}
        <div className="mt-6">
          <h2 className="font-medium mb-4">Responder mensaje:</h2>
          <Textarea
            placeholder="Redacte su mensaje..."
            className="min-h-[100px]"
          />
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Download className="h-4 w-4" />
              <span className="sr-only">Descargar</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Editar</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Eliminar</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Eye className="h-4 w-4" />
              <span className="sr-only">Ver</span>
            </Button>
          </div>
          
          <Button className="bg-[#1a1b2e] text-white hover:bg-[#2a2b3e]">
            Enviar
          </Button>
        </div>
      </div>
    </div>
  )
}