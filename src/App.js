import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import RouteList from './components/RouteList';
import RouteDetails from './components/RouteDetails';
import routes from './mock/routes';

const App = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <LayoutHeader />
      <main className="max-w-6xl mx-auto py-8 px-4">
        {!selectedRoute ? (
          <RouteList routes={routes} onSelectRoute={setSelectedRoute} />
        ) : (
          <RouteDetails 
            route={selectedRoute} 
            onBack={() => setSelectedRoute(null)} 
          />
        )}
      </main>
    </div>
  );
};

export default App;