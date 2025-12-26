import React, { useState } from 'react';
import { ShoppingBag, Calendar, User, DollarSign } from 'lucide-react';

export default function Sales() {
    const [sales] = useState([
        { id: "#SK-9021", customer: "João Silva", date: "26/12/2025", product: "Nike Air Max", total: 899.00, status: "Concluída" },
        { id: "#SK-9022", customer: "Maria Souza", date: "25/12/2025", product: "Adidas Ultraboost", total: 950.00, status: "Processando" },
        { id: "#SK-9023", customer: "Pedro Santos", date: "24/12/2025", product: "Jordan 1 Retro", total: 1500.00, status: "Concluída" },
    ]);

    const totalRevenue = sales.reduce((acc, curr) => acc + curr.total, 0);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Histórico de Vendas</h1>
                    <p className="text-slate-500">Acompanhe o faturamento da sua loja.</p>
                </div>
                <div className="bg-green-50 border border-green-100 p-4 rounded-xl text-right">
                    <p className="text-green-600 text-sm font-medium">Faturamento Total</p>
                    <h2 className="text-2xl font-bold text-green-700">R$ {totalRevenue.toLocaleString('pt-BR')}</h2>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4 text-slate-500 font-medium text-sm">ID</th>
                            <th className="px-6 py-4 text-slate-500 font-medium text-sm">Cliente</th>
                            <th className="px-6 py-4 text-slate-500 font-medium text-sm">Produto</th>
                            <th className="px-6 py-4 text-slate-500 font-medium text-sm">Data</th>
                            <th className="px-6 py-4 text-slate-500 font-medium text-sm">Valor</th>
                            <th className="px-6 py-4 text-slate-500 font-medium text-sm">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                        {sales.map((sale) => (
                            <tr key={sale.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-mono text-blue-600 text-sm">{sale.id}</td>
                                <td className="px-6 py-4 font-medium">{sale.customer}</td>
                                <td className="px-6 py-4 text-slate-500">{sale.product}</td>
                                <td className="px-6 py-4 text-sm">{sale.date}</td>
                                <td className="px-6 py-4 font-bold text-slate-800">R$ {sale.total.toFixed(2)}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${sale.status === 'Concluída' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                        {sale.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}