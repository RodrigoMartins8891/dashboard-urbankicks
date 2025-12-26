
import React from 'react';

export default function RecentOrders() {
  const orders = [
    { id: "#1234", client: "João Silva", product: "Nike Air Max", price: "R$ 899,00", status: "Pago" },
    { id: "#1235", client: "Maria Souza", product: "Adidas Ultraboost", price: "R$ 750,00", status: "Pendente" },
    { id: "#1236", client: "Pedro Santos", product: "Jordan 1 Retro", price: "R$ 1.200,00", status: "Enviado" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mt-8">
      <h3 className="text-slate-700 font-bold mb-4">Pedidos Recentes</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-400 text-sm border-b border-slate-100">
            <th className="pb-3 font-medium">ID</th>
            <th className="pb-3 font-medium">Cliente</th>
            <th className="pb-3 font-medium">Produto</th>
            <th className="pb-3 font-medium">Preço</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="text-slate-600">
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
              <td className="py-4 text-sm font-bold text-blue-600">{order.id}</td>
              <td className="py-4">{order.client}</td>
              <td className="py-4">{order.product}</td>
              <td className="py-4 font-medium">{order.price}</td>
              <td className="py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  order.status === 'Pago' ? 'bg-green-100 text-green-600' : 
                  order.status === 'Pendente' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}