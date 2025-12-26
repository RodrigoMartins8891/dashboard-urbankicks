import React from 'react';
import { DollarSign, ShoppingCart, AlertTriangle } from 'lucide-react'; // Importando ícones
import SalesChart from '../components/charts/SalesChart.jsx';
import RecentOrders from '../components/table/RecentOrders.jsx';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-800">Visão Geral</h1>
      
      {/* Grid de Cards com Ícones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card Vendas */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex justify-between items-start">
          <div>
            <p className="text-slate-500 text-sm font-medium">Vendas Hoje</p>
            <h2 className="text-2xl font-bold text-slate-800">R$ 1.250,00</h2>
          </div>
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <DollarSign size={24} />
          </div>
        </div>

        {/* Card Pedidos */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex justify-between items-start">
          <div>
            <p className="text-slate-500 text-sm font-medium">Pedidos Pendentes</p>
            <h2 className="text-2xl font-bold text-slate-800">12</h2>
          </div>
          <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
            <ShoppingCart size={24} />
          </div>
        </div>

        {/* Card Alerta */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex justify-between items-start">
          <div>
            <p className="text-slate-500 text-sm font-medium">Itens em Falta</p>
            <h2 className="text-2xl font-bold text-red-600">3</h2>
          </div>
          <div className="bg-red-100 p-2 rounded-lg text-red-600">
            <AlertTriangle size={24} />
          </div>
        </div>

      </div>

      <SalesChart />
      <RecentOrders />
    </div>
  );
}