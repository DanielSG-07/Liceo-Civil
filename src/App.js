import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/proyectos" element={<ProjectList />} />
        <Route path="/proyectos/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
