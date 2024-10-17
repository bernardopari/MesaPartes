import Link from 'next/link'
import { Building2 } from 'lucide-react'
import { Mail, Phone, Twitter, Facebook, Linkedin } from 'lucide-react'
import Header from '@/components/ui/BotonTheme'
import { useContext } from 'react'
import Image from 'next/image'
import { themeContext } from '@/app/context/ThemeContext'
import MenuOptions from '@/components/componentsPageMain/MenuOptions'
export function Contacto() {
  return (
    <div className="w-full bg-gray-900 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span className="text-sm">info@example.edu.pe  /</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span className="text-sm">+1234567890   /</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-gray-300">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
export default function Navbar() {

  return (
    <nav className=" bg-[#14132f] shadow-md w-full">
  
        <div className="flex w-[95%] mx-auto justify-between h-16 py-4">
          <div className="flex items-center">
            <Image src="/images/LogoEscuela.png" width={54} height={54}  />
            
          </div>
          <MenuOptions/>
         
        </div>
    </nav>
  )
}