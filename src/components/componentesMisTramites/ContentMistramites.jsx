import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { FilePlus } from "lucide-react"
import { Button } from "@/components/ui/button"

import { Eye, Pencil, Trash2 } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
  const procedures = [
    {
      code: "Practicas profesionales",
      type: "Solicitud",
      date: "01-01-2024",
      status: "Finalizado"
    },
    {
      code: "SGL/102-2024-EPIS",
      type: "Solicitud",
      date: "01-01-2024",
      status: "Finalizado"
    },
    {
      code: "Practicas profesionales",
      type: "Solicitud",
      date: "01-01-2024",
      status: "Finalizado"
    },
  ]

export const Header = ({titulo}) =>{
    return(
    <div className="flex items-center justify-between w-full mt-6  ">
      <h1 className="text-lg font-medium">{titulo}:</h1>
      <div className="relative max-w-sm w-full">
        <Input
          type="search"
          placeholder="Buscar mis trámites"
          className="w-full pl-3 pr-10 rounded-full border-gray-200"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label="Buscar"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
      <Button 
      className="bg-[#1a1b2e] text-white hover:bg-[#2a2b3e] rounded-full flex items-center gap-2 px-4 py-2"
    >
      <span>Redactar nuevo trámite</span>
      <FilePlus className="h-4 w-4" />
      </Button>
    </div>
    )
}
 export const ListaMisTramites = () =>{
    return(
        <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="font-medium">Código/Trámite</TableHead>
              <TableHead className="font-medium">Tipo de Documento</TableHead>
              <TableHead className="font-medium">Fecha de Trámite</TableHead>
              <TableHead className="font-medium">Estado</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {procedures.map((procedure, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <TableCell>{procedure.code}</TableCell>
                <TableCell>{procedure.type}</TableCell>
                <TableCell>{procedure.date}</TableCell>
                <TableCell>{procedure.status}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    )
 }

export const Line =  () =>{
    return(
        <div className="w-full h-1 bg-gray-700" >

        </div>
    )
} 

const ContenidoMisTramites = ()=>{
    return(
        <div className="flex-1 flex flex-col items-center space-y-10 w-[90%] mx-auto " >
        <Header titulo = "Mis trámites" />
        <Line/>
        <ListaMisTramites/>


        </div>
    )
}

export default ContenidoMisTramites;