import React from 'react';

const RouteDetails = ({ route, onBack }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <button 
        onClick={onBack}
        className="flex items-center text-blue-400 mb-6 hover:text-blue-300 transition-colors"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver a todas las rutas
      </button>
      
      <div className="mb-6">
        <span className="inline-block bg-blue-900 text-blue-300 text-sm px-3 py-1 rounded-full mb-2">
          {route.group}
        </span>
        <h2 className="text-2xl font-bold text-white">{route.name}</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="font-semibold text-white mb-3">Detalles del trayecto</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-300">
              <span>Distancia:</span>
              <span className="text-white">{route.distance}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Tiempo estimado:</span>
              <span className="text-white">{route.time}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="font-semibold text-white mb-3">Paradas principales</h3>
          <div className="space-y-2">
            {route.name.includes('Centro') && (
              <>
                <div className="text-gray-300">• Plaza de Bolívar</div>
                <div className="text-gray-300">• Terminal de Transportes</div>
              </>
            )}
            {route.name.includes('Palogrande') && (
              <>
                <div className="text-gray-300">• Universidad de Caldas</div>
                <div className="text-gray-300">• Estadio Palogrande</div>
              </>
            )}
            {/* Puedes agregar más condiciones para otras rutas */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;

// DONE