import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2A3335] text-white py-6 text-center px-0">
      <div className="w-full">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Controle de Estoque
        </p>
      </div>
    </footer>
  );
};

export default Footer;
