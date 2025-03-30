import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa os estilos do Toastify
import { getProducts, deleteProduct } from "../api/fakeStoreApi";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(); // Obtém os produtos diretamente
      setProducts(products); // Define o estado com os produtos
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteProduct(id); // Exclui o produto pelo ID
    setProducts(products.filter((product) => product.id !== id)); // Atualiza a lista de produtos

    // Exibe uma mensagem de sucesso
    toast.success("Produto excluído com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleViewDetails = (id: number) => {
    navigate(`/produto/${id}`); // Navega para a página de detalhes do produto
  };

  return (
    <>
      {/* Container do Toastify deve estar fora do mapeamento */}
      <ToastContainer />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-10 flex flex-col items-center min-h-[300px]"
          >
            {/* Imagem do produto */}
            <img
              src={product.image}
              alt={product.title}
              className="w-35 h-32 object-cover mb-4 rounded-md"
            />
            {/* Título do produto */}
            <h3 className="text-lg font-bold mb-4 text-center">
              {product.title}
            </h3>
            {/* Preço do produto */}
            <p className="font-semibold text-center mb-4">${product.price}</p>
            {/* Botões */}
            <div className="flex space-x-2 mt-auto w-full justify-center">
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Excluir
              </button>
              <button
                onClick={() => handleViewDetails(product.id)} // Navega para detalhes
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
