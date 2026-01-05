"use client";
import React from 'react';
import Sidebar from './Sidebar';

// Adicionamos { children }: { children: any } para o TypeScript não reclamar
export default function MainLayout({ children }: { children: any }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}