import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Assuming your Django backend runs on this URL

interface GetProductsParams {
  page?: number;
  perPage?: number;
  sort?: string;
}

export const getProducts = async (params?: GetProductsParams) => {
  try {
    const { page = 1, perPage = 9, sort = 'latest' } = params || {};

    const queryParams = new URLSearchParams();
    queryParams.append('page', String(page));
    queryParams.append('per_page', String(perPage));
    queryParams.append('sort', sort);

    const response = await axios.get(`${API_BASE_URL}/products/?${queryParams.toString()}`);
    return response.data; // adjust if your API wraps data differently
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
export const getProductById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

export const getProductTypes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product-types/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product types:', error);
    throw error;
  }
};

export const createOrder = async (orderData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders/`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
