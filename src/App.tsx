import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* O conteúdo das rotas será renderizado aqui */}
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
