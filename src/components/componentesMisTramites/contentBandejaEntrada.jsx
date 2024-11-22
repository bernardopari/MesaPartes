import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Header, Line } from "./ContentMistramites";

//////////////////////////////////////////////////////////////////////////
/// Componente para mostrar la lista de documentos/trámites.
/// Utiliza un componente `Table` para representar los datos en filas y columnas.
/// - Datos ficticios incluidos en un arreglo `procedures`.
/// - El diseño de filas alterna entre dos colores para mayor legibilidad.
//////////////////////////////////////////////////////////////////////////

export function ListaDocuments() {
  // Datos de ejemplo para los trámites/documentos
  const procedures = [
    {
      code: "Prácticas profesionales",
      description: "Su documento de solicitud de prácticas está en revisión",
      date: "01-01-2024",
    },
    {
      code: "Prácticas profesionales",
      description: "Su documento de solicitud de prácticas está en revisión",
      date: "01-01-2024",
    },
    {
      code: "Apertura de curso",
      description:
        "La solicitud está en estado finalizado. Puede ir a recogerla en secretaría de su escuela",
      date: "01-02-2024",
    },
    {
      code: "Prácticas profesionales",
      description: "Su documento de solicitud de prácticas está en revisión",
      date: "01-01-2024",
    },
    {
      code: "Prácticas profesionales",
      description: "Su documento de solicitud de prácticas está en revisión",
      date: "01-01-2024",
    },
    {
      code: "Apertura de curso",
      description:
        "La solicitud está en estado finalizado. Puede ir a recogerla en secretaría de su escuela",
      date: "01-02-2024",
    },
  ];

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100 hover:bg-gray-100">
            {/* Encabezados de la tabla */}
            <TableHead className="font-medium">Trámite/Código</TableHead>
            <TableHead className="font-medium">Descripción</TableHead>
            <TableHead className="font-medium w-[100px]">Fecha</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Renderizado de los trámites desde el arreglo `procedures` */}
          {procedures.map((procedure, index) => (
            <TableRow
              key={index} // Índice como clave única
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"} // Alternar colores de filas
            >
              <TableCell className="font-medium">{procedure.code}</TableCell>
              <TableCell>{procedure.description}</TableCell>
              <TableCell>{procedure.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

//////////////////////////////////////////////////////////////////////////
/// Componente principal de la bandeja de entrada.
/// Combina un encabezado, una línea divisoria y una tabla de trámites.
/// Diseñado para mantener una estructura visual clara y espaciosa.
//////////////////////////////////////////////////////////////////////////

const ContenidoBandejaEntrada = () => {
  return (
    <div className="flex-1 flex flex-col items-center space-y-10 w-[90%] mx-auto">
      <Header titulo="Bandeja de entrada" /> {/* Encabezado de la sección */}
      <Line /> {/* Línea divisoria */}
      <ListaDocuments /> {/* Tabla de trámites */}
    </div>
  );
};

export default ContenidoBandejaEntrada;
