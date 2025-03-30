import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa os estilos do Toastify
import InputText from "./InputText";
import InputNumber from "./InputNumber";
import TextArea from "./TextArea";
import { Product } from "../../types/product";

const ProductForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [fileName, setFileName] = useState<string>(
    "Nenhum arquivo selecionado"
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);

      setFileName(file.name); // Atualiza o nome do arquivo selecionado
    }
  };

  const handleClear = () => {
    setTitle("");
    setPrice(0);
    setDescription("");
    setImage("");
    setFileName("Nenhum arquivo selecionado");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || price <= 0 || !description.trim() || !image) {
      toast.error("Preencha todos os campos para continuar!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    const newProduct: Product = {
      title,
      price,
      description,
      image,
      id: new Date().getTime(),
    };

    const existingProducts = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products")!)
      : [];
    const updatedProducts = [...existingProducts, newProduct];

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    toast.success("Produto adicionado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    setTitle("");
    setPrice(0);
    setDescription("");
    setImage("");
    setFileName("Nenhum arquivo selecionado");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputText value={title} onChange={setTitle} placeholder="Título" />
        <InputNumber value={price} onChange={setPrice} placeholder="Preço" />
        <TextArea
          value={description}
          onChange={setDescription}
          placeholder="Descrição"
        />

        <div className="flex flex-col items-start space-y-2">
          <label
            htmlFor="file-upload"
            className="cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          >
            Selecionar Arquivo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          {/* Exibe o nome do arquivo ou a mensagem padrão */}
          <p className="mt-2 text-gray-700">{fileName}</p>
        </div>

        {image && (
          <img src={image} alt="Preview" className="mt-4 max-w-full h-auto" />
        )}

        {/* Contêiner flex para inverter a ordem dos botões e garantir largura igual */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            onClick={handleClear}
            className="btn w-60 px-6 py-4 rounded-lg bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 focus:outline-none"
          >
            Limpar Tudo
          </button>

          <button
            type="submit"
            className="btn w-60 px-6 py-4 rounded-lg bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:outline-none"
          >
            Adicionar Produto
          </button>
        </div>
      </form>

      {/* Componente do React-Toastify */}
      <ToastContainer />
    </>
  );
};

export default ProductForm;
