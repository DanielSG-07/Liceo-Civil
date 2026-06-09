import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import Authors from './components/Authors';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/proyectos" element={<ProjectList />} />
        <Route path="/proyectos/:id" element={<ProjectDetail />} />
        <Route path="/autores" element={<Authors />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
