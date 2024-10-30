import { Bell, FileText, Home, HelpCircle, User } from "lucide-react"
import Link from "next/link"

export default function Component({cambiar}) {
  return (
    <div className=" bg-[#1a1b2e]" >
      <nav className="flex justify-between items-center h-16 w-[90%] text-white border-t border-gray-800 mx-auto ">
          <div className="font-bold text-xl" >
          MESA DE PARTES - EPIS
          </div>
          <Link href="#" className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors">
            <Home className="h-6 w-6"  onClick={() => cambiar(0)} />
          </Link>
          
          <Link href="#" className="flex flex-col items-end justify-center  flex-1 h-full hover:text-white transition-colors">
            <Bell className="h-6 w-6 visited:text-gray-700 "  onClick={() => cambiar(1)} />
          </Link>
          
          <Link href="#" className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors">
            <FileText className="h-6 w-6" onClick={() => cambiar(2)} />
          </Link>
          
          <Link href="#" className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors">
            <HelpCircle className="h-6 w-6"  onClick={() => cambiar(3)} />
          </Link>
          
          <Link href="#" className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors">
            <User className="h-6 w-6"  onClick={() => cambiar(4)} />
          </Link>
      </nav>
    </div>


  )
}