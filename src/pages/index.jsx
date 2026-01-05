import React from "react";
import MainLayout from "../components/layout/MainLayout.jsx";
import Dashboard from "./Dashboard.jsx";

export default function Home() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}