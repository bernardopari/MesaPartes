import Link from 'next/link'
import { Building2 } from 'lucide-react'
import { Mail, Phone, Twitter, Facebook, Linkedin } from 'lucide-react'

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
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">INGENIERÍA DE SISTEMAS</span>
          </div>
          <div className="flex items-center w-2/4">
            <Contacto/>
          </div>
        </div>
      </div>
    </nav>
  )
}