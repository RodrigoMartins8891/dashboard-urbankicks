import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// 1. Importe a imagem (ajuste o nome do arquivo conforme o seu)
import LogoImg from "../../assets/urbankicks-logo.png";

export default function Sidebar() {
  const location = useLocation();

const activeClass = (path: string) =>
    location.pathname === path
      ? "block p-3 bg-blue-600 rounded-lg font-medium"
      : "block p-3 hover:bg-slate-800 rounded-lg transition-colors";

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 p-5 shadow-xl">

      {/* 2. Troca do texto pela Imagem */}
      <div className="border-b border-slate-700 pb-6 mb-6 flex justify-center">
        <img
          src={LogoImg.src}
          alt="UrbanKicks Logo"
          className="w-48 h-auto object-contain" // w-48 deixa a logo com 192px de largura
        />
      </div>

      <nav className="space-y-4">
        <Link to="/" className={activeClass('/')}>Dashboard</Link>
        <Link to="/products" className={activeClass('/products')}>Produtos</Link>
        <Link to="/vendas" className={activeClass('/vendas')}>Vendas</Link>
        <Link to="/clientes" className={activeClass('/clientes')}>Clientes</Link>
      </nav>
    </aside>
  );
}