// src/api/fakeStoreApi.ts
import axios from 'axios';
import { Product } from '../types/product';

const BASE_URL = 'https://fakestoreapi.com'; // URL base da API

// Função para obter todos os produtos
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`${BASE_URL}/products?limit=100`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar produtos');
  }
};

// Função para obter um produto pelo ID
export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await axios.get<Product>(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar produto com ID ${id}`);
  }
};

// Função para adicionar um novo produto
export const postProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  try {
    const response = await axios.post<Product>(`${BASE_URL}/products`, product);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar produto');
  }
};

// Função para atualizar um produto existente
export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
  try {
    const response = await axios.put<Product>(`${BASE_URL}/products/${id}`, product);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao atualizar produto com ID ${id}`);
  }
};

// Função para excluir um produto
export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/products/${id}`);
  } catch (error) {
    throw new Error(`Erro ao excluir produto com ID ${id}`);
  }
};




