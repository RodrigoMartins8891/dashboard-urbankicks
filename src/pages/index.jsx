import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { MemoryRouter as Router } from "react-router-dom";

// Importação dinâmica para evitar execução no servidor
const MainLayout = dynamic(() => import("../components/layout/MainLayout"), { 
  ssr: false 
});
const Dashboard = dynamic(() => import("./Dashboard"), { 
  ssr: false 
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // useEffect só roda no navegador (cliente)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Se não estiver montado, não renderiza nada para evitar erro de SSR
  if (!mounted) return null;

  return (
    <Router>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </Router>
  );
}