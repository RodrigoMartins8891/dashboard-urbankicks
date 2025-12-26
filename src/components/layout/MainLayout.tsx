import React from 'react';
import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Menu Lateral Fixo */}
      <Sidebar />

      {/* Conteúdo à direita da Sidebar (ml-64 é a margem para não ficar embaixo da sidebar) */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}