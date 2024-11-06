'use client'
import { Bell, FileText, Home, HelpCircle, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import clsx from "clsx";
export default function Component() {
  const pathName = usePathname();


  return (
    <div className=" bg-[#1a1b2e]" >
      <nav className="flex justify-between items-center h-16 w-[90%] text-white border-t border-gray-800 mx-auto ">
          <div className="font-bold text-xl" >
          MESA DE PARTES - EPIS
          </div>
          <Link href="/MisTramites" className={clsx(
            'flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors',{
              'text-gray-700 p-2': '/MisTramites' == pathName,
            }
          )} >
            <Home className="h-6 w-6" />
          </Link>
          
          <Link href="/MisTramites/BandejaEntrada" className={clsx(
            'flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors',{
              'text-gray-700 b p-2': '/MisTramites/BandejaEntrada' == pathName,
            }
          )}>
            <Bell className="h-6 w-6 visited:text-gray-700 "   />
          </Link>
          
          <Link href="#" className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors">
            <FileText className="h-6 w-6"  />
          </Link>
          
          <Link href="#" className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors">
            <HelpCircle className="h-6 w-6"   />
          </Link>
          
          <Link href="#" className="flex flex-col items-end justify-center flex-1 h-full hover:text-white transition-colors">
            <User className="h-6 w-6"   />
          </Link>
      </nav>
    </div>


  )
}