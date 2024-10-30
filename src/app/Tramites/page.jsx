import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { UserIcon } from "lucide-react"
import  Content1Tramite from '@/components/componentsPageMain/content1Tramite'
import  Content2Tramite from '@/components/componentsPageMain/content2Tramite'
import HeaderTramite from "@/components/componentsPageMain/navbarTramite"
import { Footer } from "@/components/componentsPageMain/HomePage"
///datos para el comboBoxs
const frameworks = [
  {
    value: "Gestion Ambiental",
    label: "Gestion Ambiental",
  },
  {
    value: "Seguimiento y Desarrollo del Graduado",
    label: "Seguimiento y Desarrollo del Graduado",
  },
  {
    value: "Proyección Social y Extensión cultural",
    label: "Proyección Social y Extensión cultural",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

// Componente de demostración de Combobox
function ComboboxDemo({data}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? data.find((data) => data.value === value)?.label
            : data[0].label.toString() }
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            
            <CommandEmpty>No se encontró ningúna sub unidad.</CommandEmpty>
            <CommandGroup>
              {data.map((framework, index) => (
                <CommandItem
                  key={index}
                  value={framework.value.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default function TramitesPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
     <HeaderTramite/>
     <div className="w-[90%] mx-auto">
     <nav className="text-sm mb-4">
        <a href="#" className="text-blue-600 hover:underline">Inicio</a> &gt;&gt; trámites
      </nav>
      <div className="bg-blue-950 h-[1px] w-full my-1" >

      </div>
     </div>
     <div className="flex-1 w-[90%] mx-auto flex h-full justify-between items-center gap-4" >
     <Content1Tramite/>
     <Content2Tramite/>
     </div>
     <Footer/>
    </div>
  )
}