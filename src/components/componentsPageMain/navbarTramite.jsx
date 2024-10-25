import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <h1 className="text-lg font-semibold">MESA DE PARTES - EPIS</h1>
      </div>
      <Button variant="outline" className="text-black font-bold border-white hover:bg-gray-800">
        Plantillas de trámites
      </Button>
    </header>
  )
}