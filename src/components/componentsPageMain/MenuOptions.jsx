"use client"

import { useState, useRef, useEffect } from 'react'
import { LayoutGrid } from 'lucide-react'

const navItems = [
  { name: 'INICIO', href: '#' },
  { name: 'TRAMITES', href: '#' },
  { name: 'MI PERFIL', href: '#' },
  { name: 'REGLAMENTOS', href: '#' },
  { name: 'SOPORTE', href: '#' },
]

export default function MenuOptions() {
  const [isExpanded, setIsExpanded] = useState(true)
  const navRef = useRef(null)

  useEffect(() => {
    if (navRef.current) {
      if (isExpanded) {
        navRef.current.style.width = `${navRef.current.scrollWidth}px`
      } else {
        navRef.current.style.width = '0px'
      }
    }
  }, [isExpanded])

  return (
      <div className="w-[80%] flex items-center justify-end  text-white py-4">
        <div 
          ref={navRef}
          className="flex space-x-6 overflow-hidden transition-all duration-300 ease-in-out "
          style={{ width: isExpanded ? 'auto' : '0px' }}
        >
          {navItems.map((item, index) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="hover:underline whitespace-nowrap font-semibold"
              style={{
                transition: `opacity 300ms ease-in-out ${index * 50}ms, transform 300ms ease-in-out ${index * 50}ms`,
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded ? 'translateX(0)' : 'translateX(100%)',
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-blue-700 rounded transition-colors duration-200 flex-shrink-0"
          aria-label="Toggle menu"
        >
          <LayoutGrid className="w-6 h-6 " strokeWidth={3}  fontWeight={5}/>
         
        </button>
      </div>
  )
}