import useSWR from 'swr/immutable';
import { fetchProduct, fetchProducts } from '../utils/fetchData';

export const useProducts = () => {
  const { data, error } = useSWR('products', fetchProducts);
  return { products: data, isLoading: !error && !data, isError: error };
};

export const useProduct = (id: string) => {
  const { data, error } = useSWR(`product-${id}`, () => fetchProduct(id));
  return { product: data, isLoading: !error && !data, isError: error };
};
