import React from "react";
import dynamic from 'next/dynamic';
import { MemoryRouter as Router } from "react-router-dom";

// O 'dynamic' com 'ssr: false' impede que o Next.js tente ler o useLocation no servidor
const MainLayout = dynamic(() => import("../components/layout/MainLayout"), { 
  ssr: false 
});

const Dashboard = dynamic(() => import("./Dashboard"), { 
  ssr: false 
});

export default function Home() {
  return (
    <Router>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </Router>
  );
}