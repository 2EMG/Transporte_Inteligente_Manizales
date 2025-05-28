import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="bg-gray-900 py-4 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc02ZIw76OYUHc08RlPKQxI3XZ4t6JgMojATizq" 
            alt="Logo Transporte Manizales" 
            className="h-12 mr-3"
          />
          <h1 className="text-2xl font-bold text-white">Transporte Inteligente</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Inicio</a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Rutas</a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Horarios</a>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;