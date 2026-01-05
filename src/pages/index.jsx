import React from "react";
import dynamic from 'next/dynamic';
import { MemoryRouter as Router } from "react-router-dom";

// Carrega o Layout e o Dashboard apenas no cliente (sem SSR)
const MainLayout = dynamic(() => import("../components/layout/MainLayout"), { ssr: false });
const Dashboard = dynamic(() => import("./Dashboard"), { ssr: false });

export default function Home() {
  return (
    <Router>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </Router>
  );
}