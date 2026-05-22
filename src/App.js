import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import Authors from './components/Authors';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/proyectos" element={<ProjectList />} />
        <Route path="/proyectos/:id" element={<ProjectDetail />} />
        <Route path="/autores" element={<Authors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
