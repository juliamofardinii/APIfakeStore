import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/fakeStoreApi"; // A função de obter o produto
import "react-toastify/dist/ReactToastify.css"; // Importa os estilos do Toastify

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  // Função para buscar o produto
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const response = await getProductById(Number(id));
          setProduct(response);
        } catch (error) {
          console.error("Erro ao carregar o produto", error);
        }
      }
    };
    fetchProduct();
  }, [id]);

  // Enquanto o produto não for carregado, exibe a div com a mensagem de "Carregando"
  if (!product) {
    return (
      <div className="loading-container">
        <div>Carregando...</div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center w-full">
          {/* Imagem do produto à esquerda com espaço à direita */}
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-full object-cover mb-4 md:mb-0 md:mr-10" // Espaço à direita da imagem
          />

          <div className="flex flex-col items-center md:items-start">
            {/* Centralizando os itens */}
            {/* Título do produto */}
            <h2 className="text-2xl font-bold mb-2 text-center md:text-left">
              {product.title}
            </h2>
            {/* Descrição abaixo do título */}
            <p className="text-lg mb-4 text-center md:text-left">
              {product.description}
            </p>
            {/* Preço abaixo da descrição */}
            <p className="text-2xl font-semibold text-center md:text-left">
              ${product.price}
            </p>
            {/* Botões abaixo da descrição */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
