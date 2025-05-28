import React from 'react';

const RouteList = ({ routes, onSelectRoute }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">Rutas de Transporte en Manizales</h2>
      {routes.map((routeGroup) => (
        <div key={routeGroup.id} className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">{routeGroup.name}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {routeGroup.routes.map((route, index) => (
              <div 
                key={index}
                onClick={() => onSelectRoute({...route, group: routeGroup.name})}
                className="bg-gray-700 hover:bg-gray-600 rounded-lg p-4 cursor-pointer transition-colors"
              >
                <h4 className="font-medium text-white">{route.name}</h4>
                <div className="flex justify-between mt-2 text-gray-300">
                  <span>{route.distance}</span>
                  <span>{route.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RouteList;