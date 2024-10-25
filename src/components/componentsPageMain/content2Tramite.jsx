import React from 'react';

export default function EstadoTramites() {
  const stages = [
    { name: 'Enviado', completed: true },
    { name: 'Validado', completed: true },
    { name: 'En proceso', completed: false },
    { name: 'Finalizado', completed: false },
  ];

  return (
    <div className="w-[50%] mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Estado de mis trámites:</h2>
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: '50%' }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
          ></div>
        </div>
        <div className="flex justify-between">
          {stages.map((stage, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full mb-1 ${
                  stage.completed ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              ></div>
              <span
                className={`text-xs ${
                  stage.completed ? 'text-gray-800' : 'text-gray-400'
                }`}
              >
                {stage.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}