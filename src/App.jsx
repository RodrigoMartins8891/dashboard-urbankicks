import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.jsx";

// Importe as 4 páginas aqui:
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import Sales from "./pages/Sales.jsx";
import Customers from "./pages/Customers.jsx";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/vendas" element={<Sales />} />
          <Route path="/clientes" element={<Customers />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;