import React from "react";
import { Link } from "react-router-dom"; // Importa o Link para navegação

const Header = () => {
  return (
    <header className="bg-[#2A3335] text-white py-6">
      {" "}
      {/* Fundo escuro, texto branco e padding vertical */}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* 
          container: Define uma largura máxima para o conteúdo.
          mx-auto: Centraliza o container horizontalmente.
          px-4: Adiciona padding horizontal (esquerda e direita).
          flex: Torna o container um flexbox, permitindo alinhar seus filhos de forma mais flexível.
          flex-col: Organiza os itens em coluna (empilhados) em telas pequenas (por padrão, em telas menores que "sm").
          sm:flex-row: Muda a direção para linha (horizontal) em telas grandes (acima do tamanho "sm").
          justify-between: Distribui o espaço disponível igualmente entre os itens (alinhamento horizontal).
          items-center: Alinha os itens verticalmente no centro.
        */}

        <h1 className="text-3xl font-bold text-center sm:text-left">
          {/* 
            text-3xl: Define o tamanho do texto (extra grande).
            font-bold: Aplica peso de fonte em negrito.
            text-center: Centraliza o texto em telas pequenas.
            sm:text-left: Alinha o texto à esquerda em telas maiores.
          */}
          Controle de Estoque
        </h1>

        <nav className="mt-4 sm:mt-0 flex flex-col sm:flex-row justify-center items-center">
          {/* 
            mt-4: Adiciona margem superior (4 unidades de espaçamento).
            sm:mt-0: Remove a margem superior em telas maiores (a partir de "sm").
            flex: Define um container flexbox para os itens dentro do `nav`.
            flex-col: Organiza os links em coluna em telas pequenas (por padrão).
            sm:flex-row: Organiza os links em linha em telas maiores (a partir de "sm").
            justify-center: Centraliza os links horizontalmente.
            items-center: Centraliza os links verticalmente.
          */}

          <Link to="/" className="text-lg mx-4 hover:text-teal-400">
            {/* 
              text-lg: Define o tamanho da fonte como grande.
              mx-4: Adiciona margem horizontal (esquerda e direita).
              hover:text-teal-400: Muda a cor do texto para um tom de teal quando o link é hover (passado o mouse).
            */}
            Home
          </Link>

          <Link
            to="/adicionar-produto"
            className="text-lg mx-4 hover:text-teal-400"
          >
            Adicionar Produto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
