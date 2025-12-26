import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Dados de exemplo: Vendas de tênis por dia da semana
const data = [
  { name: 'Seg', vendas: 2400 },
  { name: 'Ter', vendas: 1398 },
  { name: 'Qua', vendas: 9800 },
  { name: 'Qui', vendas: 3908 },
  { name: 'Sex', vendas: 4800 },
  { name: 'Sáb', vendas: 3800 },
  { name: 'Dom', vendas: 4300 },
];

export default function SalesChart() {
  return (
    <div className="h-[350px] w-full bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-slate-700 font-bold mb-6">Desempenho de Vendas</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#94a3b8', fontSize: 12}} 
            dy={10}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' 
            }}
          />
          <Area 
            type="monotone" 
            dataKey="vendas" 
            stroke="#3b82f6" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorVendas)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}