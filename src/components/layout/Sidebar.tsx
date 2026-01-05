"use client"; // Obrigatório para usar hooks como usePathname

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook correto do Next.js
import LogoImg from "../../assets/urbankicks-logo.png";

export default function Sidebar() {
  const pathname = usePathname(); // Substitui o location.pathname

  const activeClass = (path: string) =>
    pathname === path
      ? "block p-3 bg-blue-600 rounded-lg font-medium"
      : "block p-3 hover:bg-slate-800 rounded-lg transition-colors text-slate-300";

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 p-5 shadow-xl">

      {/* Logo */}
      <div className="border-b border-slate-700 pb-6 mb-6 flex justify-center">
        <img
          src={LogoImg.src}
          alt="UrbanKicks Logo"
          className="w-48 h-auto object-contain"
        />
      </div>

      {/* Navegação */}
      <nav className="flex flex-col space-y-2">
        {/* Adicionei o "/" para o Dashboard/Home */}
        <Link href="/" className={activeClass("/")}>
          Dashboard
        </Link>
        
        <Link href="/Products" className={activeClass("/Products")}>
          Produtos
        </Link>
        
        <Link href="/Sales" className={activeClass("/Sales")}>
          Vendas
        </Link>
        
        <Link href="/Customers" className={activeClass("/Customers")}>
          Clientes
        </Link>
      </nav>
    </aside>
  );
}