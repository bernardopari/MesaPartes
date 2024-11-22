import { Search, FilePlus, Eye, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Datos de ejemplo para trámites
const procedures = [
  {
    code: "Prácticas profesionales",
    type: "Solicitud",
    date: "01-01-2024",
    status: "Finalizado",
  },
  {
    code: "SGL/102-2024-EPIS",
    type: "Solicitud",
    date: "01-01-2024",
    status: "Finalizado",
  },
  {
    code: "Prácticas profesionales",
    type: "Solicitud",
    date: "01-01-2024",
    status: "Finalizado",
  },
];

//////////////////////////////////////////////////////////////////////////
/// Componente de encabezado con título, barra de búsqueda y botón.
/// - `titulo`: Prop que define el texto del encabezado.
/// - Incluye un input para buscar trámites y un botón para redactar nuevos.
//////////////////////////////////////////////////////////////////////////
export const Header = ({ titulo }) => {
  return (
    <div className="flex items-center justify-between w-full mt-6">
      {/* Título */}
      <h1 className="text-lg font-medium">{titulo}:</h1>

      {/* Barra de búsqueda */}
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

      {/* Botón para nuevo trámite */}
      <Button className="bg-[#1a1b2e] text-white hover:bg-[#2a2b3e] rounded-full flex items-center gap-2 px-4 py-2">
        <span>Redactar nuevo trámite</span>
        <FilePlus className="h-4 w-4" />
      </Button>
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////
/// Componente para la lista de trámites en tabla.
/// - Muestra las columnas principales: código, tipo, fecha, estado.
/// - Controles de acción en cada fila: Ver, Editar, Eliminar.
//////////////////////////////////////////////////////////////////////////
export const ListaMisTramites = () => {
  return (
    <div className="w-full">
      <Table>
        {/* Encabezado de la tabla */}
        <TableHeader>
          <TableRow className="bg-gray-100 hover:bg-gray-100">
            <TableHead className="font-medium">Código/Trámite</TableHead>
            <TableHead className="font-medium">Tipo de Documento</TableHead>
            <TableHead className="font-medium">Fecha de Trámite</TableHead>
            <TableHead className="font-medium">Estado</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>

        {/* Cuerpo de la tabla */}
        <TableBody>
          {procedures.map((procedure, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {/* Columnas de datos */}
              <TableCell>{procedure.code}</TableCell>
              <TableCell>{procedure.type}</TableCell>
              <TableCell>{procedure.date}</TableCell>
              <TableCell>{procedure.status}</TableCell>

              {/* Acciones (ver, editar, eliminar) */}
              <TableCell>
                <div className="flex items-center gap-2">
                  {/* Ver detalles */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    aria-label="Ver detalles"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  {/* Editar */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    aria-label="Editar"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>

                  {/* Eliminar */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-700"
                    aria-label="Eliminar"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////
/// Línea divisoria horizontal.
/// - Se utiliza para separar secciones visualmente.
//////////////////////////////////////////////////////////////////////////
export const Line = () => {
  return <div className="w-full h-1 bg-gray-700"></div>;
};
