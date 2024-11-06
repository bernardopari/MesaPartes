import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Header, Line } from "@/components/componentesMisTramites/ContentMistramites"
  
  export function ListaDocuments() {
    const procedures = [
      {
        code: "Practicas profesionales",
        description: "Su documento de solicitud de practicas esta en revision",
        date: "01-01-2024"
      },
      {
        code: "Practicas profesionales",
        description: "Su documento de solicitud de practicas esta en revision",
        date: "01-01-2024"
      },
      {
        code: "Apertura de curso",
        description: "La solicitud esta en estado finalizado, puede ir a recoger a secretaria de su escuela",
        date: "01-02-2024"
      },
      {
        code: "Practicas profesionales",
        description: "Su documento de solicitud de practicas esta en revision",
        date: "01-01-2024"
      },
      {
        code: "Practicas profesionales",
        description: "Su documento de solicitud de practicas esta en revision",
        date: "01-01-2024"
      },
      {
        code: "Apertura de curso",
        description: "La solicitud esta en estado finalizado, puede ir a recoger a secretaria de su escuela",
        date: "01-02-2024"
      },
    ]
  
    return (
      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="font-medium">Trámite/Código</TableHead>
              <TableHead className="font-medium">Descripción</TableHead>
              <TableHead className="font-medium w-[100px]">Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {procedures.map((procedure, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <TableCell className="font-medium">{procedure.code}</TableCell>
                <TableCell>{procedure.description}</TableCell>
                <TableCell>{procedure.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  const ContenidoBandejaEntrada = ()=>{
    return(
        <div className="flex-1 flex flex-col items-center space-y-10 w-[90%] mx-auto " >
        <Header titulo="Bandeja de entrada"/>
        <Line/>
        <ListaDocuments/>
        </div>
    )
}

export default ContenidoBandejaEntrada;