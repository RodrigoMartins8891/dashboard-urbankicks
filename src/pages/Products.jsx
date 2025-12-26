import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Search } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export default function Products() {
    // Estado principal (todos os produtos)
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('sneaker_products');
        return savedProducts ? JSON.parse(savedProducts) : [
            { id: 1, name: "Nike Air Max 270", price: "899", stock: 15, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" }
        ];
    });

    // Estados do formulário
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    // NOVO: Estado para a pesquisa
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        localStorage.setItem('sneaker_products', JSON.stringify(products));
    }, [products]);

    // LÓGICA DE FILTRO: 
    // Criamos uma lista filtrada baseada no que o usuário digita
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!name || !price) return alert("Preencha o nome e o preço!");

        const newProduct = {
            id: Date.now(),
            name,
            price,
            stock: stock || 0,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
        };

        setProducts([newProduct, ...products]);
        setName(''); setPrice(''); setStock('');
    };

    const handleDelete = (id) => {
        if (window.confirm("Deseja excluir?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-slate-800">Gerenciar Estoque</h1>

                {/* BARRA DE PESQUISA */}
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por nome..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>
            </div>

            {/* Formulário (Continua igual) */}
            <form onSubmit={handleAddProduct} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                {/* ... inputs de nome, preço e estoque ... */}
                <div>
                    <label className="text-sm font-medium text-slate-600 block mb-1">Nome</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-600 block mb-1">Preço</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-600 block mb-1">Estoque</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"><Plus size={20} /> Cadastrar</button>
            </form>

            {/* TABELA: Agora usamos filteredProducts em vez de products */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm">
                        <tr>
                            <th className="px-6 py-4">Produto</th>
                            <th className="px-6 py-4">Preço</th>
                            <th className="px-6 py-4">Qtd</th>
                            <th className="px-6 py-4 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((p) => (
                                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 flex items-center gap-3">
                                        <img src={p.image} className="w-10 h-10 rounded shadow-inner object-cover" />
                                        <span className="font-bold text-slate-700">{p.name}</span>
                                    </td>
                                    <td className="px-6 py-4 font-bold">
                                        {formatCurrency(p.price)}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-slate-600 text-xs">{p.stock} un</td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => handleDelete(p.id)} className="text-slate-400 hover:text-red-600 transition-colors p-1"><Trash2 size={18} /></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-10 text-center text-slate-400 italic">Nenhum tênis encontrado...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}