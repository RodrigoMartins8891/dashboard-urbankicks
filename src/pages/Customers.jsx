import React from 'react';
import { User, Mail, MapPin } from 'lucide-react';

const customers = [
    { id: 1, name: "João Silva", email: "joao@email.com", location: "São Paulo, SP", orders: 5, spent: "R$ 4.200" },
    { id: 2, name: "Maria Souza", email: "maria@email.com", location: "Rio de Janeiro, RJ", orders: 2, spent: "R$ 1.900" },
    { id: 3, name: "Ana Oliveira", email: "ana.olv@email.com", location: "Curitiba, PR", orders: 12, spent: "R$ 12.500" },
];

export default function Customers() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-800">Base de Clientes</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {customers.map((c) => (
                    <div key={c.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                            <User size={32} />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg">{c.name}</h3>
                        <p className="text-slate-400 text-sm mb-4 flex items-center gap-1">
                            <Mail size={14} /> {c.email}
                        </p>

                        <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-slate-50">
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold">Pedidos</p>
                                <p className="font-bold text-slate-700">{c.orders}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold">Total Gasto</p>
                                <p className="font-bold text-blue-600">{c.spent}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}