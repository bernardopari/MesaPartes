import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function TramitesForm() {
  return (
    <div className="w-[50%] mx-auto h-full bg-white p-6 rounded-lg shadow-md">

      <form className="space-y-4">
        <button
          type="file"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
        >
          Subir documento
        </button>
        
        <div className="relative">
          <select
            className="w-full bg-white border border-gray-300 rounded py-2 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Tipo de trámite</option>
            <option value="1">Trámite 1</option>
            <option value="2">Trámite 2</option>
            <option value="3">Trámite 3</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <input
          type="text"
          placeholder="Nombres y Apellidos"
          className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="relative">
          <select
            className="w-full bg-white border border-gray-300 rounded py-2 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Fecha</option>
            <option value="1">Fecha 1</option>
            <option value="2">Fecha 2</option>
            <option value="3">Fecha 3</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <button
          type="button"
          className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
        >
          Elegir archivos
        </button>
        
        <div className="relative">
          <select
            className="w-full bg-gray-900 text-white py-2 px-4 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Mis trámites</option>
            <option value="1">Trámite 1</option>
            <option value="2">Trámite 2</option>
            <option value="3">Trámite 3</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
        </div>
      </form>
    </div>
  );
}